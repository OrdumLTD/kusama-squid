import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { BlockContext, EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { createReferendumV2 } from '../../utils/proposals'
import { getEventData } from './getters'
import { ReferendaReferendumInfoForStorage } from "../../../types/storage";
import { toHex } from '@subsquid/substrate-processor'
import { ss58codec } from '../../../common/tools'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ReferendumInfo {
    index: number
    trackNumber: number
    origin: string
    enactmentAt?: number
    enactmentAfter?: number
    submittedAt: number
    submissionDeposit: {who: Uint8Array, amount: bigint}
    decisionDeposit: {who: Uint8Array, amount: bigint} | undefined
    deciding: {since: number, confirming: number | undefined} | undefined
    tally: {ayes: bigint, nays: bigint, support: bigint}
}


export async function getStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<ReferendumInfo | undefined> {
    const storage = new ReferendaReferendumInfoForStorage(ctx, block)
    if (!storage.isExists) return undefined
    const storageData = await ctx._chain.getStorage(block.hash, 'Referenda', 'ReferendumInfoFor', index)

    if (!storageData) return undefined
    if(storageData.__kind === 'Ongoing') {
        let enactmentAt = undefined
        let enactmentAfter = undefined;
        if(storageData.value.enactment.__kind === 'At') {
            enactmentAt = storageData.value.enactment.value
        }
        else if(storageData.value.enactment.__kind === 'After') {
            enactmentAfter = storageData.value.enactment.value
        }
        return {
            index,
            trackNumber: storageData.value.track,
            origin: storageData.value.origin.value.__kind,
            enactmentAt: enactmentAt,
            enactmentAfter: enactmentAfter,
            submittedAt: storageData.value.submitted,
            submissionDeposit: storageData.value.submissionDeposit,
            decisionDeposit: storageData.value.decisionDeposit,
            deciding: storageData.value.deciding,
            tally: storageData.value.tally
        }
    }
    // }else if(storage.isV9350){
    //     const storageData = await storage.asV9350.get(index)
    //     if (!storageData) return undefined
    //     if(storageData.__kind === 'Ongoing') {
    //         let enactmentAt = undefined
    //         let enactmentAfter = undefined;
    //         if(storageData.value.enactment.__kind === 'At') {
    //             enactmentAt = storageData.value.enactment.value
    //         }
    //         else if(storageData.value.enactment.__kind === 'After') {
    //             enactmentAfter = storageData.value.enactment.value
    //         }
    //         return {
    //             index,
    //             trackNumber: storageData.value.track,
    //             origin: storageData.value.origin.value.__kind,
    //             enactmentAt: enactmentAt,
    //             enactmentAfter: enactmentAfter,
    //             submittedAt: storageData.value.submitted,
    //             submissionDeposit: storageData.value.submissionDeposit,
    //             decisionDeposit: storageData.value.decisionDeposit,
    //             deciding: storageData.value.deciding,
    //             tally: storageData.value.tally
    //         }
    //     }

    // }else if(storage.isV9370){
    //     const storageData = await storage.asV9370.get(index)
    //     if (!storageData) return undefined
    //     if(storageData.__kind === 'Ongoing') {
    //         let enactmentAt = undefined
    //         let enactmentAfter = undefined;
    //         if(storageData.value.enactment.__kind === 'At') {
    //             enactmentAt = storageData.value.enactment.value
    //         }
    //         else if(storageData.value.enactment.__kind === 'After') {
    //             enactmentAfter = storageData.value.enactment.value
    //         }
    //         return {
    //             index,
    //             trackNumber: storageData.value.track,
    //             origin: storageData.value.origin.value.__kind,
    //             enactmentAt: enactmentAt,
    //             enactmentAfter: enactmentAfter,
    //             submittedAt: storageData.value.submitted,
    //             submissionDeposit: storageData.value.submissionDeposit,
    //             decisionDeposit: storageData.value.decisionDeposit,
    //             deciding: storageData.value.deciding,
    //             tally: storageData.value.tally
    //         }
    //     }

    // }else if(storage.isV9381){
    //     const storageData = await storage.asV9370.get(index)
    //     if (!storageData) return undefined
    //     if(storageData.__kind === 'Ongoing') {
    //         let enactmentAt = undefined
    //         let enactmentAfter = undefined;
    //         if(storageData.value.enactment.__kind === 'At') {
    //             enactmentAt = storageData.value.enactment.value
    //         }
    //         else if(storageData.value.enactment.__kind === 'After') {
    //             enactmentAfter = storageData.value.enactment.value
    //         }
    //         return {
    //             index,
    //             trackNumber: storageData.value.track,
    //             origin: storageData.value.origin.value.__kind,
    //             enactmentAt: enactmentAt,
    //             enactmentAfter: enactmentAfter,
    //             submittedAt: storageData.value.submitted,
    //             submissionDeposit: storageData.value.submissionDeposit,
    //             decisionDeposit: storageData.value.decisionDeposit,
    //             deciding: storageData.value.deciding,
    //             tally: storageData.value.tally
    //         }
    //     }

    // }
    // else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}


export async function handleSubmitted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Referenda.Submitted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, hash } = getEventData(ctx, item.event)

    const storageData = await getStorageData(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.ReferendumV2, index))
        return
    }

    const hexHash = toHex(hash)

    await createReferendumV2(ctx, header, {
        index,
        status: ProposalStatus.Submitted,
        hash: hexHash,
        proposer: ss58codec.encode(storageData.submissionDeposit.who),
        submissionDeposit: storageData.submissionDeposit,
        decisionDeposit: storageData.decisionDeposit,
        deciding: storageData.deciding,
        tally: storageData.tally,
        trackNumber: storageData.trackNumber,
        origin: storageData.origin,
        submittedAt: storageData.submittedAt,
        enactmentAt: storageData.enactmentAt,
        enactmentAfter: storageData.enactmentAfter 
    }, ProposalType.ReferendumV2)
}