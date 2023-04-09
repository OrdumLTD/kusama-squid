import { Index } from 'typeorm'
import { UnknownVersionError } from '../../../common/errors'
import {
    ChildBountiesAddedEvent,
    ChildBountiesAwardedEvent,
    ChildBountiesCanceledEvent,
    ChildBountiesClaimedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ChildBountyAwardedData {
    parentIndex: number
    childIndex: number
    beneficiary: Uint8Array
}

export function getChildBountyAwardedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ChildBountyAwardedData {
    const event = new ChildBountiesAwardedEvent(ctx, itemEvent)
    if (event.isV9190) {
        const { index, childIndex, beneficiary } = event.asV9190
        return {
            parentIndex: index,
            childIndex,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface ChildBountyCancelledData {
    parentIndex: number,
    childIndex: number,
}

export function getChildBountyCancelledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ChildBountyCancelledData {
    const event = new ChildBountiesCanceledEvent(ctx, itemEvent)
    if (event.isV9190) {
        const { index, childIndex } = event.asV9190
        return {
            parentIndex: index,
            childIndex
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface ChildBountyClaimedData {
    parentIndex: number
    childIndex: number
    payout: bigint
    beneficiary: Uint8Array
}

export function getChildBountyClaimedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ChildBountyClaimedData {
    const event = new ChildBountiesClaimedEvent(ctx, itemEvent)
    if (event.isV9190) {
        const { index, childIndex, payout, beneficiary } = event.asV9190
        return {
            parentIndex: index,
            childIndex,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface ChildBountyAddedData {
    parentIndex: number
    childIndex: number
}

export function getChildBountyAddedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): ChildBountyAddedData {
    const event = new ChildBountiesAddedEvent(ctx, itemEvent)
    if (event.isV9190) {
        const { index, childIndex } = event.asV9190
        return {
            parentIndex: index,
            childIndex
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
