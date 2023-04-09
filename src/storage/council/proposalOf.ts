import { CouncilProposalOfStorage, Instance1CollectiveProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v9170'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'

type CouncilProposalStorageData = Call

async function getInstance1CollectiveStorageData(
    ctx: BatchContext<Store, unknown>,
    hash: Uint8Array,
    block: SubstrateBlock
): Promise<CouncilProposalStorageData | undefined> {
    const storage = new Instance1CollectiveProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'Instance1Collective', 'ProposalOf', hash)
}

async function getCoucilStorageData(
    ctx: BatchContext<Store, unknown>,
    hash: Uint8Array,
    block: SubstrateBlock
): Promise<CouncilProposalStorageData | undefined> {
    const storage = new CouncilProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'Council', 'ProposalOf', hash)

    // if (storage.isV9111) {
    //     return (await storage.asV9111.get(hash)) as Call
    // } else if (storage.isV9122) {
    //     return (await storage.asV9122.get(hash)) as Call
    // } else if (storage.isV9130) {
    //     return (await storage.asV9130.get(hash)) as Call
    // } else if (storage.isV9160) {
    //     return (await storage.asV9160.get(hash)) as Call
    // } else if (storage.isV9170) {
    //     return (await storage.asV9170.get(hash)) as Call
    // } else if (storage.isV9180) {
    //     return (await storage.asV9180.get(hash)) as Call
    // } else if (storage.isV9190) {
    //     return (await storage.asV9190.get(hash)) as Call
    // } else if (storage.isV9220) {
    //     return (await storage.asV9220.get(hash)) as Call
    // } else if (storage.isV9230) {
    //     return (await storage.asV9230.get(hash)) as Call
    // } else if (storage.isV9250) {
    //     return (await storage.asV9250.get(hash)) as Call
    // } else if (storage.isV9271) {
    //     return (await storage.asV9271.get(hash)) as Call
    // } else if (storage.isV9291) {
    //     return (await storage.asV9291.get(hash)) as Call
    // } else if (storage.isV9300) {
    //     return (await storage.asV9300.get(hash)) as Call
    // } else if (storage.isV9340) {
    //     return (await storage.asV9340.get(hash)) as Call
    // } else if (storage.isV9350) {
    //     return (await storage.asV9350.get(hash)) as Call
    // } else if (storage.isV9370) {
    //     return (await storage.asV9370.get(hash)) as Call
    // } else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

export async function getProposalOf
    (ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<CouncilProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash, block)) || (await getInstance1CollectiveStorageData(ctx, hash, block))
}