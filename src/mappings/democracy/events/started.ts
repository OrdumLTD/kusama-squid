import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { DemocracyStartedEvent } from '../../../types/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, ReferendumThresholdType } from '../../../model'
import { storage } from '../../../storage'
import { createReferendum } from '../../utils/proposals'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'
import { Event } from '../../../types/support'

interface ReferendumEventData {
    index: number
    threshold: string
}

function getEventData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ReferendumEventData {
    const event = new DemocracyStartedEvent(ctx, itemEvent)
    if (event.isV1020) {
        const [index, threshold] = event.asV1020
        return {
            index,
            threshold: threshold.__kind,
        }
    } else if (event.isV9130) {
        const { refIndex: index, threshold } = event.asV9130
        return {
            index,
            threshold: threshold.__kind,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleStarted(ctx: BatchContext<Store, unknown>,
    item: EventItem<'Democracy.Started', { event: { args: true; extrinsic: { hash: true } } }>,
    header: SubstrateBlock) {
    const { index, threshold } = getEventData(ctx, item.event)

    const storageData = await storage.democracy.getReferendumInfoOf(ctx, index, header)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Referendum, index))
        return
    }

    if (storageData.status === 'Finished') {
        ctx.log.warn(`Referendum with index ${index} has already finished at block ${header.height}`)
        return
    }

    const { hash, end, delay } = storageData
    const hexHash = toHex(hash)

    await createReferendum(ctx, header, {
        index,
        threshold: threshold as ReferendumThresholdType,
        status: ProposalStatus.Started,
        hash: hexHash,
        end: end,
        delay: delay,
    })
}
