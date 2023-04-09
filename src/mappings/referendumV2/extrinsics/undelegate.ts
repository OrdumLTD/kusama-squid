import { getOriginAccountId } from '../../../common/tools'
import { CallHandlerContext } from '../../types/contexts' 
import { NoDelegationFound, TooManyOpenDelegations } from '../../../common/errors'
import { IsNull } from 'typeorm'
import { removeDelegatedVotesOngoingReferenda, removeVote } from './helpers'
import { Proposal, ProposalType } from '../../../model'
import { getUndelegateData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import {
    VotingDelegation
} from '../../../model'

export async function handleUndelegate(ctx: BatchContext<Store, unknown>,
    item: CallItem<'ConvictionVoting.undelegate', { call: { args: true; origin: true } }>,
    header: SubstrateBlock): Promise<void> {
    if (!(item.call as any).success) return
    const from = getOriginAccountId(item.call.origin)
    const { track } = getUndelegateData(ctx, item.call)
    let delegation = null;
    const delegations = await ctx.store.find(VotingDelegation, { where: { from, endedAtBlock: IsNull(), track } })
    if(delegations != undefined && delegations != null){
        if (delegations.length > 1) {
            //should never be the case
            ctx.log.warn(TooManyOpenDelegations(header.height, track, from))
        }
        else if (delegations.length === 0) {
            //should never be the case
            ctx.log.warn(NoDelegationFound(header.height, track, from))
            return
        }
        delegation = delegations[0]
        delegation.endedAtBlock = header.height
        delegation.endedAt = new Date(header.timestamp)
        await ctx.store.save(delegation)
    }
    //remove currently delegated votes from ongoing referenda for this wallet
    const ongoingReferenda = await ctx.store.find(Proposal, { where: { endedAt: IsNull(), trackNumber: track, type: ProposalType.ReferendumV2 } })
    for (let i = 0; i < ongoingReferenda.length; i++) {
        const referendum = ongoingReferenda[i]
        if(!referendum || referendum.index == undefined || referendum.index == null){
            continue
        }
        if(delegation){
            await removeVote(ctx, from, referendum.index, header.height, header.timestamp, false, true, delegation.to)
        }
    }
    await removeDelegatedVotesOngoingReferenda(ctx, from, header.height, header.timestamp, track)
}