import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getChildBountyAwardedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleAwarded(ctx: BatchContext<Store, unknown>,
    item: EventItem<'ChildBounties.Awarded', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { childIndex, beneficiary } = getChildBountyAwardedData(ctx, item.event)

    await updateProposalStatus(ctx, header, childIndex, ProposalType.ChildBounty, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
        },
    })
}