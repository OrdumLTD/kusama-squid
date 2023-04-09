import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getRectractedData, getRectractedDataOld } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleRetractedOld(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.TipRetracted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getRectractedDataOld(ctx, item.event)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Retracted,
    })
}

export async function handleRetracted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Tips.TipRetracted', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash } = getRectractedData(ctx, item.event)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Retracted,
    })
}