/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { ChildBountiesChildBountiesStorage, ChildBountiesChildBountyDescriptionsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'

interface ChildBountyBountyStorageData {
    value: bigint
    fee: bigint
    parentBounty: number,
    curatorDeposit: bigint,
}

async function getChildBountyStorageData(ctx: BatchContext<Store, unknown>, parentBountyId: number, index: number, block: SubstrateBlock): Promise<ChildBountyBountyStorageData | undefined> {
    const storage = new ChildBountiesChildBountiesStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV9190) {
        return await storage.asV9190.get(parentBountyId, index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}


export async function getChildBounties(ctx: BatchContext<Store, unknown>, parentBountyId: number, index: number, block: SubstrateBlock) {
    let childBountyInfo = await getChildBountyStorageData(ctx, parentBountyId, index, block)
    if(!childBountyInfo) return undefined;
    let description = await getDescription(ctx, index, block).then((r) => r || '');
    return {
        ...childBountyInfo,
        description
    }
}

async function getDescription(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock) {
    return (await getChildBountyStorageReasonData(ctx, index, block))
}

async function getChildBountyStorageReasonData(ctx: BatchContext<Store, unknown>, index: number, block: SubstrateBlock): Promise<string | undefined> {
    const storage = new ChildBountiesChildBountyDescriptionsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isV9190) {
        return await storage.asV9190.get(index).then((r) => Buffer.from(r || []).toString('utf8'))
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
