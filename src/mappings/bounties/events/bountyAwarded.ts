import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyAwardedData, getBountyAwardedDataOld } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleAwardedOld(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.BountyAwarded', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, beneficiary } = getBountyAwardedDataOld(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
        },
    })
}

export async function handleAwarded(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Bounties.BountyAwarded', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, beneficiary } = getBountyAwardedData(ctx, item.event)

    await updateProposalStatus(ctx, header, index, ProposalType.Bounty, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
        },
    })
}
