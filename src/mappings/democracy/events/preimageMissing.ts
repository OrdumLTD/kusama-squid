import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus } from '../../../model'
import { updatePreimageStatus } from '../../utils/proposals'
import { getPreimageMissingData } from './getters'

import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handlePreimageMissing(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.PreimageMissing', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getPreimageMissingData(ctx, item.event)

    const hexHash = toHex(hash)

    await updatePreimageStatus(ctx, header, hexHash,{
        status: ProposalStatus.Missing,
    })
}
