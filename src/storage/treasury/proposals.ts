import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'
import { TreasuryProposalsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface TreasuryProposalStorageData {
    proposer: Uint8Array
    value: bigint
    beneficiary: Uint8Array
    bond: bigint
}

async function getStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<TreasuryProposalStorageData | undefined> {
    const storage = new TreasuryProposalsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.asV1020.get(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock) {
    return await getStorageData(ctx, index, block)
}
