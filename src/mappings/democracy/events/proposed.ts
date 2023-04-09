import { toHex } from '@subsquid/substrate-processor'
import { DemocracyProposedEvent } from '../../../types/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createDemocracyProposal } from '../../utils/proposals'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { Event } from '../../../types/support'

interface DemocracyProposalEventData {
    index: number
    deposit: bigint
}

function getEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): DemocracyProposalEventData {
    const event = new DemocracyProposedEvent(ctx, itemEvent)
    if (event.isV1020) {
        const [index, deposit] = event.asV1020
        return {
            index,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalIndex: index, deposit } = event.asV9130
        return {
            index,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.Proposed', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, deposit } = getEventData(ctx, item.event)

    const storageData = await storage.democracy.getProposals(ctx, header)
    if (!storageData) {
        ctx.log.warn(`Storage doesn't exist for democracy proposals at block ${header.height}`)
        return
    }

    const proposalData = storageData.find((prop) => prop.index === index)
    if (!proposalData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.DemocracyProposal, index))
        return
    }
    const { hash, proposer } = proposalData
    const hexHash = toHex(hash)

    await createDemocracyProposal(ctx, header, {
        hash: hexHash,
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        deposit,
    })
}
