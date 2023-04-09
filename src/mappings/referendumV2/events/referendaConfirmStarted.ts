
import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { createDeciding, updateProposalStatus } from '../../utils/proposals'
import { getConfirmStartedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleConfirmStarted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Referenda.ConfirmStarted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getConfirmStartedData(ctx, item.event)

    const proposal = await ctx.store.get(Proposal, {
        where: {
                    index: index,
                    type: ProposalType.ReferendumV2,
                },
        order: {
            id: 'DESC',
        },
    })

    let deciding = undefined

    if (proposal && proposal.deciding && proposal.deciding.since) {
        deciding = createDeciding({confirming: header.height, since: proposal.deciding.since})
    }
    else {
        deciding = createDeciding({confirming: header.height, since: header.height})
    }

    await updateProposalStatus(ctx, header, index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.ConfirmStarted,
        data: {
            deciding: deciding
        }
    })
}