import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getClosedData, getClosedDataOld } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleClosedOld(ctx: BatchContext<Store, unknown>,
    item: EventItem<'TechnicalCommittee.Executed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash, reward } = getClosedDataOld(ctx, item.event)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Closed,
        data: {
            reward,
        },
    })
}

export async function handleClosed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'TechnicalCommittee.Executed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { hash, reward } = getClosedData(ctx, item.event)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, header, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Closed,
        data: {
            reward,
        },
    })
}