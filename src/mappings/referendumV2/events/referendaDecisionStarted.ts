import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { createDeciding, updateProposalStatus } from '../../utils/proposals'
import { getDecisionStartedData } from './getters'
import {createTally} from '../../utils/proposals'
import { toHex } from '@subsquid/substrate-processor'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleDecisionStarted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Referenda.DecisionStarted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, tally, track, hash } = getDecisionStartedData(ctx, item.event)
    const tallyData = createTally(tally)

    const deciding = createDeciding({confirming: undefined, since: header.height})

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.Deciding,
        data: {
            tally: tallyData,
            trackNumber: track,
            hash: toHex(hash),
            deciding: deciding
        }
    })
}
