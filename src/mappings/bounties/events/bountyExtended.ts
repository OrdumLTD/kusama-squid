import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyExtendedData, getBountyExtendedDataOld } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleExtendedOld(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.BountyExtended', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getBountyExtendedDataOld(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Extended,
    })
}
export async function handleExtended(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Bounties.BountyExtended', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getBountyExtendedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        status: ProposalStatus.Extended,
    })
}
