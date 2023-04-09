import { UnknownVersionError } from '../../../common/errors'
import {
    PreimageNotedEvent,
    PreimageRequestedEvent,
    PreimageClearedEvent
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Event } from '../../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface PreimageNotedData {
    hash: Uint8Array
}

export function getPreimageNotedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageNotedData {
    const event = new PreimageNotedEvent(ctx, itemEvent)
    if (event.isV9160) {
        const { hash } = event.asV9160
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageRequestedData {
    hash: Uint8Array
}

export function getPreimageRequestedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageRequestedData {
    const event = new PreimageRequestedEvent(ctx, itemEvent)
    if (event.isV9160) {
        const {hash} = event.asV9160
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageClearedData {
    hash: Uint8Array
}

export function getPreimageClearedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): PreimageClearedData {
    const event = new PreimageClearedEvent(ctx, itemEvent)
    if (event.isV9160) {
        const {hash} = event.asV9160
        return {
            hash
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}