import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getKilledData } from './getters'
import {createTally} from '../../utils/proposals'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleKilled(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Referenda.Killed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, tally } = getKilledData(ctx, item.event)

    const tallyData = createTally(tally)

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.Killed,
        data: {
            tally: tallyData
        }
    })
}