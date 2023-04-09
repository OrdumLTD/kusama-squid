/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTreasury } from '../../utils/proposals'
import { getProposedData, getSpendApprovedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.Proposed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index } = getProposedData(ctx, item.event)

    const storageData = await storage.treasury.getProposals(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TreasuryProposal, index))
        return
    }

    const { proposer, beneficiary, value, bond } = storageData

    await createTreasury(ctx, header, {
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: ss58codec.encode(beneficiary),
    })
}

export async function handleSpendApproved(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Treasury.SpendApproved', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { proposalIndex, amount, beneficiary } = getSpendApprovedData(ctx, item.event)

    await createTreasury(ctx, header, {
        index: proposalIndex,
        proposer: ss58codec.encode(beneficiary),
        status: ProposalStatus.Approved,
        reward: amount,
        deposit: 0 as unknown as bigint,
        payee: ss58codec.encode(beneficiary),
    })
}