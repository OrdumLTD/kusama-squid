/* eslint-disable @typescript-eslint/ban-ts-comment */
import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { BlockContext } from '../../../types/support'
import { PreimagePreimageForStorage, PreimageStatusForStorage } from '../../../types/storage'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec, parseProposalCall } from '../../../common/tools'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { Call } from '../../../types/v9111'
import { createPreimageV2 } from '../../utils/proposals'
import { getPreimageNotedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

type ProposalCall = Call

interface PreimageStorageData {
    data: Uint8Array
    status?: string
    value?: number | [Uint8Array, bigint] | undefined
    len?: number
}

function decodeProposal(chain: Chain, data: Uint8Array): ProposalCall {
    // @ts-ignore
    return chain.scaleCodec.decodeBinary(chain.description.call, data)
}

async function getStorageData(ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock): Promise<PreimageStorageData | undefined> {
    const storage = new PreimagePreimageForStorage(ctx, block)
    const preimageStatus: PreimageStatusStorageData | undefined = await getPreimageStatusData(ctx, hash, block)

    if (storage.isV9160) {
        const storageData = await storage.asV9160.get(hash)
        if (!storageData) return undefined

        return {
            data: storageData,
            ...preimageStatus
        }
    }
    else if(storage.isV9320) {
        if(preimageStatus && preimageStatus.len){
            const storageData = await storage.asV9320.get([hash, preimageStatus.len])
            if (!storageData) return undefined
            return {
                data: storageData,
                ...preimageStatus
            }
        }
        else {
            throw new UnknownVersionError(storage.constructor.name)
        }
    }
    else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

interface PreimageStatusStorageData{
    status: string
    value: number | [Uint8Array, bigint] | undefined
    len?: number
}

export async function getPreimageStatusData(ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock): Promise<PreimageStatusStorageData | undefined> {
    const preimageStorage = new PreimageStatusForStorage(ctx, block)
    if (preimageStorage.isV9160) {
        const storageData = await preimageStorage.asV9160.get(hash)
        if (!storageData) return undefined
        return {
            status: storageData.__kind,
            value: storageData.value,
            len: undefined
        }
    }
    else if(preimageStorage.isV9320) {
        const storageData = await preimageStorage.asV9320.get(hash)
        if (!storageData) return undefined
        return {
            status: storageData.__kind,
            value: storageData.deposit,
            len: storageData.len
        }
    }
    else {
        throw new UnknownVersionError(preimageStorage.constructor.name)
    }
}

export async function handlePreimageV2Noted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Preimage.Noted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getPreimageNotedData(ctx, item.event)
    const hexHash = toHex(hash)

    const storageData = await getStorageData(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn('PreimageV2', hexHash))
        return
    }

    let decodedCall:
        | {
              section: string
              method: string
              description: string
              args: Record<string, unknown>
          }
        | undefined

    try {
        const proposal = decodeProposal(ctx._chain as Chain, storageData.data)

        const { section, method, args, description } = parseProposalCall(ctx._chain, proposal)

        decodedCall = {
            section,
            method,
            description,
            args: args as Record<string, unknown>,
        }
    } catch (e) {
        ctx.log.warn(`Failed to decode ProposedCall of Preimage ${hexHash} at block ${header.height}:\n ${e}`)
    }

    const value = storageData.value as [Uint8Array, bigint]

    const proposer =  storageData.value ? ss58codec.encode(value[0] as Uint8Array) : undefined
    const deposit = storageData.value ? value[1] : undefined

    await createPreimageV2(ctx, header, {
        hash: hexHash,
        proposer,
        deposit,
        call: decodedCall,
        section: decodedCall?.section,
        method: decodedCall?.method,
        status: ProposalStatus.Noted,
        length: storageData.len,
    })
}