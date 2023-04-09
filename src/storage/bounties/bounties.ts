/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { BountiesBountiesStorage, BountiesBountyDescriptionsStorage, TreasuryBountiesStorage, TreasuryBountyDescriptionsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store } from '@subsquid/typeorm-store'

interface BountyStorageData {
    proposer: Uint8Array
    value: bigint
    bond: bigint
    fee: bigint
    curatorDeposit: bigint
}

async function getBountyStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<BountyStorageData | undefined> {
    const storage = new BountiesBountiesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.asV9111.get(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<BountyStorageData | undefined> {
    const storage = new TreasuryBountiesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV2025) {
        return await storage.asV2025.get(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBounties(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock) {
    let bountyInfo =  (await getBountyStorageData(ctx, index, block)) || (await getTreasuryStorageData(ctx, index, block))
    if(!bountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...bountyInfo,
        description
    }
}


async function getBountyDescriptionStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<string | undefined> {
    const storage = new BountiesBountyDescriptionsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.asV9111.get(index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryDescriptionStorageData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<string | undefined> {
    const storage = new TreasuryBountyDescriptionsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV2025) {
        return await storage.asV2025.get(index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getDescription(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock) {
    return (await getBountyDescriptionStorageData(ctx, index, block)) || (await getTreasuryDescriptionStorageData(ctx, index, block))
}