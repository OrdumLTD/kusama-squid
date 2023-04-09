import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getChildBountyClaimedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleClaimed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'ChildBounties.Claimed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { parentIndex, childIndex, payout, beneficiary } = getChildBountyClaimedData(ctx, item.event)

    await updateProposalStatus(ctx, header, childIndex, ProposalType.ChildBounty, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
        },
    })
}
