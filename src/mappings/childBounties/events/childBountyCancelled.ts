import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getChildBountyCancelledData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleCancelled(ctx: BatchContext<Store, unknown>,
    item: EventItem<'ChildBounties.Canceled', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { parentIndex, childIndex } = getChildBountyCancelledData(ctx, item.event)

    await updateProposalStatus(ctx, header, childIndex, ProposalType.ChildBounty, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
    })
}