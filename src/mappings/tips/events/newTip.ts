import { decodeHex, toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTip } from '../../utils/proposals'
import { getNewTipData, getNewTipDataOld } from './getters'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleNewTipOld(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.NewTip', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getNewTipDataOld(ctx, item.event)

    const hexHash = toHex(hash)
    const storageData = await storage.tips.getTips(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hexHash))
        return
    }

    const { who, deposit, finder, reason } = storageData

    await createTip(ctx, header, {
        hash: hexHash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Opened,
        reason: reason,
    })
}

export async function handleNewTip(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Tips.NewTip', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getNewTipData(ctx, item.event)

    const hexHash = toHex(hash)
    const storageData = await storage.tips.getTips(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hexHash))
        return
    }

    const { who, deposit, finder, reason } = storageData

    await createTip(ctx, header, {
        hash: hexHash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Opened,
        reason: reason,
    })
}