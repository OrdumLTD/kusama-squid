import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageReapedData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageReaped(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.PreimageReaped', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getPreimageReapedData(ctx, item.event)

    const hexHash = toHex(hash)

    await updatePreimageStatus(ctx, header, hexHash,{
        status: ProposalStatus.Reaped,
    })
}
