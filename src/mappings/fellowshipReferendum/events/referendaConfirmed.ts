import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getConfirmedData } from './getters'
import {createTally} from '../../utils/proposals'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleConfirmed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'FellowshipReferenda.Confirmed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, tally } = getConfirmedData(ctx, item.event)

    const tallyData = createTally(tally)

    await updateProposalStatus(ctx, header, index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.Confirmed,
        data: {
            tally: tallyData
        }
    })
}