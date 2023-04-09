import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getCancelledData } from './getters'
import {createTally} from '../../utils/proposals'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleCancelled(ctx: BatchContext<Store, unknown>,
    item: EventItem<'FellowshipReferenda.Cancelled', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, tally } = getCancelledData(ctx, item.event)

    const tallyData = createTally(tally)

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
        data: {
            tally: tallyData
        }
    })
}
