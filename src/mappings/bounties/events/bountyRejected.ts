import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyRejectedData, getBountyRejectedDataOld } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleRejectedOld(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.BountyRejected', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getBountyRejectedDataOld(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Rejected,
        isEnded: true,
    })
}

export async function handleRejected(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Bounties.BountyRejected', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getBountyRejectedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Rejected,
        isEnded: true,
    })
}
