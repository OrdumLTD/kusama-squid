import { randomUUID } from 'crypto'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, StandardVoteBalance, Vote, VoteType } from '../../../model'
import { getDemocracySecondedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { VoteDecision } from '../../../model'

export async function handleDemocracySeconds(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.Seconded', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { accountId, refIndex } = getDemocracySecondedData(ctx, item.event)

    const amount = undefined;

    const proposal = await ctx.store.get(Proposal, { where: { index: refIndex, type: ProposalType.DemocracyProposal } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.FellowshipReferendum, refIndex))
        return
    }

    //const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(accountId),
            blockNumber: header.height,
            decision: VoteDecision.yes,
            proposal,
            balance: new StandardVoteBalance({
                value: amount ? BigInt(amount) : BigInt(0),
            }),
            timestamp: new Date(header.timestamp),
            type: VoteType.DemocracyProposal,
        })
    )
}