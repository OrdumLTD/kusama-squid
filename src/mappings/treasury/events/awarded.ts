import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getAwarderData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleAwarded(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.Awarded', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getAwarderData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.TreasuryProposal, {
        isEnded: true,
        status: ProposalStatus.Awarded,
    })
}
