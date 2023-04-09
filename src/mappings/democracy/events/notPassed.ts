import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getNotPassedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleNotPassed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.NotPassed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const index = getNotPassedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.NotPassed,
    })
}
