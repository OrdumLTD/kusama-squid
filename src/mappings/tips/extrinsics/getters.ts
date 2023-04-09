import { UnknownVersionError } from '../../../common/errors'
import {
    TipsTipCall, TreasuryTipCall
} from '../../../types/calls'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

interface AccepterCuratorData {
    hash: Uint8Array,
    tipValue: bigint,
}

export function getTipsTipData(ctx: BatchContext<Store, unknown>, itemCall: any): AccepterCuratorData {
    const call = new TipsTipCall(ctx, itemCall)
    if (call.isV2028) {
        const { hash, tipValue } = call.asV2028
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export function getTreasuryTipData(ctx: BatchContext<Store, unknown>, itemCall: any): AccepterCuratorData {
    const call = new TreasuryTipCall(ctx, itemCall)
    if (call.isV1038) {
        const { hash, tipValue } = call.asV1038
        return {
            hash,
            tipValue,
        }
    }else if (call.isV2025) {
        const { hash, tipValue } = call.asV2025
        return {
            hash,
            tipValue,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}