import { CallHandlerContext } from '../../types/contexts'
import { MissingProposalRecordWarn } from '../../../common/errors'
import {
    Proposal,
    ProposalType,
    SplitVoteBalance,
    StandardVoteBalance,
    Vote,
    VoteBalance,
    VoteDecision,
    VoteType,
} from '../../../model'
import { getOriginAccountId } from '../../../common/tools'
import { getVoteData } from './getters'
import { randomUUID } from 'crypto'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export async function handleVote(ctx: BatchContext<Store, unknown>,
    item: CallItem<'Democracy.vote', { call: { args: true; origin: true } }>,
    header: SubstrateBlock) {
    if (!item.call.success) return

    const { index, vote } = getVoteData(ctx, item.call)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }

    let decision: VoteDecision
    switch (vote.type) {
        case 'Standard':
            decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'Split':
            decision = VoteDecision.abstain
            break
    }

    let lockPeriod: number | undefined
    let balance: VoteBalance | undefined
    if (vote.type === 'Split') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
        })
    } else if (vote.type === 'Standard') {
        balance = new StandardVoteBalance({
            value: vote.balance,
        })
        lockPeriod = vote.value < 128 ? vote.value : vote.value - 128
    }

    // const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: randomUUID(),
            voter: item.call.origin ? getOriginAccountId(item.call.origin) : null,
            blockNumber: header.height,
            decision,
            lockPeriod,
            proposal,
            balance,
            timestamp: new Date(header.timestamp),
            type: VoteType.Referendum,
        })
    )
}
