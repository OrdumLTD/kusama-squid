import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getSlashedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'


export async function handleSlashed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Tips.TipSlashed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getSlashedData(ctx, item.event)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Retracted,
    })
}