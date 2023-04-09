import { Proposal, ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getScheduledEventData, getDispatchedEventData } from '../../../common/scheduledData'
import { NoReferendaFoundForExecution } from '../../../common/errors'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

// export async function handleFellowshipExecutionSchedule(ctx: BatchContext<Store, unknown>,
//     item: EventItem<'Scheduler.Scheduled', { event: { args: true; extrinsic: { hash: true } } }>,
//     header: SubstrateBlock) {
//     console.log('item', item)
//     const { blockNumber } = getScheduledEventData(ctx, item.event)

//     const proposal = await ctx.store.get(Proposal, {
//         where: {
//                     type: ProposalType.FellowshipReferendum,
//                     updatedAtBlock: header.height,
//                     status: ProposalStatus.Confirmed
//                 },
//         order: {
//             id: 'DESC',
//         },
//     })

//     if(!proposal || !proposal.index){
//         ctx.log.warn(NoReferendaFoundForExecution(ProposalType.FellowshipReferendum, header.height))
//         return;
//     }

//     await updateProposalStatus(ctx, header, proposal.index, ProposalType.FellowshipReferendum, {
//         isEnded: true,
//         status: ProposalStatus.Confirmed,
//         data: {
//             executeAtBlockNumber: blockNumber
//         }
//     })
// }

export async function handleFellowshipExecution(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Scheduler.Dispatched', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const eventData = getDispatchedEventData(ctx, item.event)
    if(!eventData){
        return null
    }

    const proposal = await ctx.store.get(Proposal, {
        where: {
                    type: ProposalType.FellowshipReferendum,
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

    await updateProposalStatus(ctx, header, proposal.index, ProposalType.FellowshipReferendum, {
        isEnded: true,
        status: ProposalStatus.Executed,
        data: {
            executedAt: new Date(header.timestamp)
        }
    })
}