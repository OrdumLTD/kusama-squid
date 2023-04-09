import { randomUUID } from 'crypto'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, StandardVoteBalance, Vote, VoteType } from '../../../model'
import { getFellowshipVoteData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleFellowshipVotes(ctx: BatchContext<Store, unknown>,
    item: EventItem<'FellowshipCollective.Voted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { accountId, index, decision, amount, tally } = getFellowshipVoteData(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.FellowshipReferendum } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.FellowshipReferendum, index))
        return
    }

    //const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(accountId),
            blockNumber: header.height,
            decision: decision,
            proposal,
            balance: new StandardVoteBalance({
                value: amount ? BigInt(amount) : BigInt(0),
            }),
            timestamp: new Date(header.timestamp),
            type: VoteType.Fellowship,
        })
    )
}