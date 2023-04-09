import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesAcceptCuratorCall,
    BountiesUnassignCuratorCall,
    TreasuryAcceptCuratorCall,
    TreasuryUnassignCuratorCall,
} from '../../../types/calls'
import { BatchContext } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorDataOld(ctx: BatchContext<Store, unknown>, itemCall: any): AccepterCuratorData {
    const call = new TreasuryAcceptCuratorCall(ctx, itemCall)
    if (call.isV2025) {
        const { bountyId } = call.asV2025
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export function getAccepterCuratorData(ctx: BatchContext<Store, unknown>, itemCall: any): AccepterCuratorData {
    const call = new BountiesAcceptCuratorCall(ctx, itemCall)
    if (call.isV2028) {
        const { bountyId } = call.asV2028
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

interface UnassingCuratorData {
    index: number
}

export function getUnassingCuratorDataOld(ctx: BatchContext<Store, unknown>, itemCall: any): UnassingCuratorData {
    const call = new TreasuryUnassignCuratorCall(ctx, itemCall)
    if (call.isV2025) {
        const { bountyId } = call.asV2025
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export function getUnassingCuratorData(ctx: BatchContext<Store, unknown>, itemCall: any): UnassingCuratorData {
    const call = new BountiesUnassignCuratorCall(ctx, itemCall)
    if (call.isV2028) {
        const { bountyId } = call.asV2028
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
