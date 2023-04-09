import { toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { getOriginAccountId } from '../../../common/tools'
import { Proposal, ProposalType, Tippers } from '../../../model'
import { CallHandlerContext } from '../../types/contexts'
import { getTipsTipData, getTreasuryTipData } from './getters'
import { randomUUID } from 'crypto'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export async function handleNewTipValue(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Tips.tip', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return

    const { hash, tipValue } = getTipsTipData(ctx, item.call)
    const hexHash = toHex(hash)
    const proposal = await ctx.store.get(Proposal, { where: { hash: hexHash, type: ProposalType.Tip } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Tip, hexHash))
        return
    }

    const origin = getOriginAccountId(item.call.origin)

    if (!origin) {
        ctx.log.warn(`Origin for Tips.tip is null`)
        return
    }

    const tipper = new Tippers({
        id: randomUUID(),
        hash: hexHash,
        tipper: origin,
        value: tipValue,
        proposal: proposal,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
    })

    await ctx.store.save(tipper)
}

export async function handleNewTipValueOld(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Treasury.tip', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return

    const { hash, tipValue } = getTreasuryTipData(ctx, item.call)
    const hexHash = toHex(hash)
    const proposal = await ctx.store.get(Proposal, { where: { hash: hexHash, type: ProposalType.Tip } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Tip, hexHash))
        return
    }

    const origin = getOriginAccountId(item.call.origin)

    if (!origin) {
        ctx.log.warn(`Origin for Tips.tip is null`)
        return
    }

    const tipper = new Tippers({
        id: randomUUID(),
        hash: hexHash,
        tipper: origin,
        value: tipValue,
        proposal: proposal,
        createdAtBlock: header.height,
        createdAt: new Date(header.timestamp),
    })

    await ctx.store.save(tipper)
}
