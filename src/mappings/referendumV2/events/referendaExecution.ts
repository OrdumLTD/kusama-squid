import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getScheduledEventData, getDispatchedEventData } from '../../../common/scheduledData'
import { NoReferendaFoundForExecution } from '../../../common/errors'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

// export async function handleReferendumV2ExecutionSchedule(ctx: BatchContext<Store, unknown>,
//     item: EventItem<'Scheduler.Scheduled', { event: { args: true; extrinsic: { hash: true } } }>,
//     header: SubstrateBlock) {
//     console.log('item', item)
//     const { blockNumber } = getScheduledEventData(ctx, item.event)

//     const proposal = await ctx.store.get(Proposal, {
//         where: {
//                     type: ProposalType.ReferendumV2,
//                     updatedAtBlock: header.height,
//                     status: ProposalStatus.Confirmed
//                 },
//         order: {
//             id: 'DESC',
//         },
//     })

//     if(!proposal || !proposal.index){
//         ctx.log.warn(NoReferendaFoundForExecution(ProposalType.ReferendumV2, header.height))
//         return;
//     }

//     await updateProposalStatus(ctx, header, proposal.index, ProposalType.ReferendumV2, {
//         isEnded: true,
//         status: ProposalStatus.Confirmed,
//         data: {
//             executeAtBlockNumber: blockNumber
//         }
//     })
// }

export async function handleReferendumV2Execution(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Scheduler.Dispatched', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const eventData = getDispatchedEventData(ctx, item.event)
    if(!eventData){
        return null
    }

    const proposal = await ctx.store.get(Proposal, {
        where: {
                    type: ProposalType.ReferendumV2,
                    executeAtBlockNumber: eventData.blockNumber,
                    status: ProposalStatus.Confirmed
                },
        order: {
            id: 'DESC',
        },
    })

    if(!proposal || !proposal.index){
        return;
    }

    await updateProposalStatus(ctx, header, proposal.index, ProposalType.ReferendumV2, {
        isEnded: true,
        status: ProposalStatus.Executed,
        data: {
            executedAt: new Date(header.timestamp)
        }
    })
}