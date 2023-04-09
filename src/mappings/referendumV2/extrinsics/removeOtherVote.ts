import { Proposal, ConvictionVote, ProposalType, VoteType } from '../../../model'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { ss58codec } from '../../../common/tools'
import { getRemoveOtherVoteData } from './getters'
import { IsNull } from 'typeorm'
import { NoOpenVoteFound, TooManyOpenVotes } from '../../../common/errors'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { getAllNestedDelegations, removeDelegatedVotesReferendum } from './helpers'
import { CallHandlerContext } from '../../types/contexts'

export async function handleRemoveOtherVote(ctx: BatchContext<Store, unknown>,
    item: CallItem<'ConvictionVoting.remove_other_vote', { call: { args: true; origin: true } }>,
    header: SubstrateBlock): Promise<void> {
    if (!(item.call as any).success) return
    const { target, index } = getRemoveOtherVoteData(ctx, item.call)
    const referendum = await ctx.store.get(Proposal, { where: { index, type: ProposalType.ReferendumV2} })
    if (!referendum || referendum.index == undefined || referendum.index == null || referendum.trackNumber == undefined || referendum.trackNumber == null) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.ReferendumV2, index))
        return
    }
    if (referendum.endedAtBlock && referendum.endedAtBlock < header.height) {
        //ref already ended probably removing vote for democracy_unlock
        return
    }
    if (!target){
        return
    } 
    const wallet = ss58codec.encode(target)
    const votes = await ctx.store.find(ConvictionVote, { where: { voter: wallet, proposalIndex: index, removedAtBlock: IsNull(), type: VoteType.ReferendumV2 } })
    if(votes){
        if (votes.length > 1) {
            ctx.log.warn(TooManyOpenVotes(header.height, index, wallet))
        }
        else if (votes.length === 0) {
            ctx.log.warn(NoOpenVoteFound(header.height, index, wallet))
            return
        }
        const vote = votes[0]
        vote.removedAtBlock = header.height
        vote.removedAt = new Date(header.timestamp)
        await ctx.store.save(vote)
    }
    let nestedDelegations = await getAllNestedDelegations(ctx, wallet, referendum.trackNumber)
    await removeDelegatedVotesReferendum(ctx, header.height, header.timestamp, index, nestedDelegations)
}