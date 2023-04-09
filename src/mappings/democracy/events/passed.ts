import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getPassedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handlePassed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.Passed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const index = getPassedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Passed,
    })
}
