import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updatePreimageStatusV2 } from '../../utils/proposals'
import { getPreimageRequestedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageV2Requested(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Preimage.Requested', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getPreimageRequestedData(ctx, item.event)

    const hexHash = toHex(hash)

    await updatePreimageStatusV2(ctx, header, hexHash, {
        status: ProposalStatus.Requested,
    })
}