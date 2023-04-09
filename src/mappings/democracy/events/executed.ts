import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getExecutedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleExecuted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.Executed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const index = getExecutedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Executed,
    })
}