import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, Vote, VoteDecision, VoteType } from '../../../model'
import { getVotesCount } from '../../utils/votes'
import { getVotedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { randomUUID } from 'crypto'

export async function handleVoted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'TechnicalCommittee.Voted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { voter, hash, decision } = getVotedData(ctx, item.event)

    const hexHash = toHex(hash)
    const proposal = await ctx.store.get(Proposal, {
        where: { hash: hexHash, type: ProposalType.TechCommitteeProposal },
    })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.TechCommitteeProposal, hexHash))
        return
    }

    // const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: ss58codec.encode(voter),
            blockNumber: header.height,
            decision: decision ? VoteDecision.yes : VoteDecision.no,
            proposal,
            timestamp: new Date(header.timestamp),
            type: VoteType.Motion,
        })
    )
}