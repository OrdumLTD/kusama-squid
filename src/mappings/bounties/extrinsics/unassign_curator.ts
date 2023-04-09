import { MissingProposalRecordWarn } from '../../../common/errors'
import { Proposal, ProposalType } from '../../../model'
import { CallHandlerContext } from '../../types/contexts'
import { getUnassingCuratorData, getUnassingCuratorDataOld } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export async function handleUnassignCurator(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Bounties.unassign_curator', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return
    const { index } = getUnassingCuratorData(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    proposal.curator = null

    await ctx.store.save(proposal)
}

export async function handleUnassignCuratorOld(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Treasury.unassign_curator', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return
    const { index } = getUnassingCuratorDataOld(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    proposal.curator = null

    await ctx.store.save(proposal)
}