import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesBountyAwardedEvent,
    BountiesBountyBecameActiveEvent,
    BountiesBountyCanceledEvent,
    BountiesBountyClaimedEvent,
    BountiesBountyExtendedEvent,
    BountiesBountyProposedEvent,
    BountiesBountyRejectedEvent,
    TreasuryBountyAwardedEvent,
    TreasuryBountyBecameActiveEvent,
    TreasuryBountyCanceledEvent,
    TreasuryBountyClaimedEvent,
    TreasuryBountyExtendedEvent,
    TreasuryBountyProposedEvent,
    TreasuryBountyRejectedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'
import { Event } from '../../../types/support'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface BountyAwardedData {
    index: number
    beneficiary: Uint8Array
}

export function getBountyAwardedDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyAwardedData {
    const event = new TreasuryBountyAwardedEvent(ctx, itemEvent)
    if (event.isV2025) {
        const [index, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyAwardedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyAwardedData {
    const event = new BountiesBountyAwardedEvent(ctx, itemEvent)
    if (event.isV2028) {
        const [index, beneficiary] = event.asV2028
        return {
            index,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, beneficiary } = event.asV9130
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyBacameActiveData {
    index: number
}

export function getBountyBacameActiveDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyBacameActiveData {
    const event = new TreasuryBountyBecameActiveEvent(ctx, itemEvent)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyBacameActiveData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyBacameActiveData {
    const event = new BountiesBountyBecameActiveEvent(ctx, itemEvent)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyCanceledData {
    index: number
}

export function getBountyCanceledDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyCanceledData {
    const event = new TreasuryBountyCanceledEvent(ctx, itemEvent)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyCanceledData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyCanceledData {
    const event = new BountiesBountyCanceledEvent(ctx, itemEvent)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyClaimedData {
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

export function getBountyClaimedDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyClaimedData {
    const event = new TreasuryBountyClaimedEvent(ctx, itemEvent)
    if (event.isV2025) {
        const [index, payout, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
            payout,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyClaimedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyClaimedData {
    const event = new BountiesBountyClaimedEvent(ctx, itemEvent)
    if (event.isV2028) {
        const [index, payout, beneficiary] = event.asV2028
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, payout, beneficiary } = event.asV9130
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyExtendedData {
    index: number
}

export function getBountyExtendedDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyExtendedData {
    const event = new TreasuryBountyExtendedEvent(ctx, itemEvent)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyExtendedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyExtendedData {
    const event = new BountiesBountyExtendedEvent(ctx,  itemEvent)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyProposedData {
    index: number
}

export function getBountyProposedDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyProposedData {
    const event = new TreasuryBountyProposedEvent(ctx, itemEvent)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyProposedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyProposedData {
    const event = new BountiesBountyProposedEvent(ctx, itemEvent)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyRejectedData {
    index: number
}

export function getBountyRejectedDataOld(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyRejectedData {
    const event = new TreasuryBountyRejectedEvent(ctx, itemEvent)
    if (event.isV2025) {
        const [index] = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyRejectedData(ctx: BatchContext<Store, unknown>, itemEvent: Event): BountyRejectedData {
    const event = new BountiesBountyRejectedEvent(ctx, itemEvent)
    if (event.isV2028) {
        const [index] = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
