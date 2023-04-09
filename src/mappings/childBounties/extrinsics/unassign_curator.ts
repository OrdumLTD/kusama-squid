import { MissingProposalRecordWarn } from '../../../common/errors'
import { Proposal, ProposalType } from '../../../model'
import { CallHandlerContext } from '../../types/contexts'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { getUnassingCuratorData } from './getters'

export async function handleUnassignCurator(ctx: BatchContext<Store, unknown>,
    item: CallItem<'ChildBounties.unassign_curator', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return
    const { parentBountyId, childBountyId } = getUnassingCuratorData(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index: childBountyId, parentBountyIndex: parentBountyId, type: ProposalType.ChildBounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ChildBounty, childBountyId))
        return
    }

    proposal.curator = null

    await ctx.store.save(proposal)
}