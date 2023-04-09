/* eslint-disable @typescript-eslint/ban-ts-comment */
import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec, parseProposalCall } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTechCommitteeMotion } from '../../utils/proposals'
import { getProposedData } from './getters'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

export async function handleProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'TechnicalCommittee.Proposed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, proposer, hash, threshold } = getProposedData(ctx, item.event)

    const storageData = await storage.techCommittee.getProposalOf(ctx, hash, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TechCommitteeProposal, index))
        return
    }

    const { section, method, args, description } = parseProposalCall(ctx._chain, storageData)

    await createTechCommitteeMotion(ctx, header, {
        index,
        hash: toHex(hash),
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        threshold,
        call: {
            section,
            method,
            description,
            args: args as Record<string, unknown>,
        },
    })
}