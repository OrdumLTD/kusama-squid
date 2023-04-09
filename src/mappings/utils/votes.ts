import { ConvictionVote, Vote } from '../../model'
import { CommonHandlerContext } from '../types/contexts'

const proposalsVotes = new Map<string, number>()

export async function getVotesCount(ctx: CommonHandlerContext, proposalId: string) {
    let count = proposalsVotes.get(proposalId)
    if (count == null) {
        count = await ctx.store.count(Vote, {
            where: {
                proposalId,
            },
        })
    }
    proposalsVotes.set(proposalId, count + 1)
    return count
}

const proposals = new Map<string, number>()

export async function getConvictionVotesCount(ctx: CommonHandlerContext, proposalId: string) {
    let count = proposals.get(proposalId)
    if (count == null) {
        count = await ctx.store.count(ConvictionVote, {
            where: {
                proposalId,
            },
        })
    }
    proposals.set(proposalId, count + 1)
    return count
}