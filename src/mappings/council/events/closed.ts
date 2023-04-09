import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getClosedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'


export async function handleClosed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Council.Closed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const hash = getClosedData(ctx, item.event)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.CouncilMotion, {
        isEnded: true,
        status: ProposalStatus.Closed,
    })
}