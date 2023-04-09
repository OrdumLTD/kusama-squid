import { Instance2CollectiveProposalOfStorage, TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v9170'
import { BatchContext, SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { UnknownVersionError } from '../../common/errors'

type TechnicalCommitteeProposalStorageData = Call

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getInstanceStorageData(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new Instance2CollectiveProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'Instance2Collective', 'ProposalOf', hash)

    // if (storage.isV1020) {
    //     return (await storage.getAsV1020(hash)) as Call
    // } else if (storage.isV1022) {
    //     return (await storage.getAsV1022(hash)) as Call
    // } else if (storage.isV1024) {
    //     return (await storage.getAsV1024(hash)) as Call
    // } else if (storage.isV1027) {
    //     return (await storage.getAsV1027(hash)) as Call
    // } else if (storage.isV1029) {
    //     return (await storage.getAsV1029(hash)) as Call
    // } else if (storage.isV1030) {
    //     return (await storage.getAsV1030(hash)) as Call
    // } else if (storage.isV1031) {
    //     return (await storage.getAsV1031(hash)) as Call
    // } else if (storage.isV1032) {
    //     return (await storage.getAsV1032(hash)) as Call
    // } else if (storage.isV1038) {
    //     return (await storage.getAsV1038(hash)) as Call
    // } else if (storage.isV1039) {
    //     return (await storage.getAsV1039(hash)) as Call
    // } else if (storage.isV1040) {
    //     return (await storage.getAsV1040(hash)) as Call
    // } else if (storage.isV1042) {
    //     return (await storage.getAsV1042(hash)) as Call
    // } else if (storage.isV1050) {
    //     return (await storage.getAsV1050(hash)) as Call
    // } else if (storage.isV1054) {
    //     return (await storage.getAsV1054(hash)) as Call
    // } else if (storage.isV1055) {
    //     return (await storage.getAsV1055(hash)) as Call
    // } else if (storage.isV1058) {
    //     return (await storage.getAsV1058(hash)) as Call
    // } else if (storage.isV1062) {
    //     return (await storage.getAsV1062(hash)) as Call
    // } else if (storage.isV2005) {
    //     return (await storage.getAsV2005(hash)) as Call
    // } else if (storage.isV2007) {
    //     return (await storage.getAsV2007(hash)) as Call
    // } else if (storage.isV2011) {
    //     return (await storage.getAsV2011(hash)) as Call
    // } else if (storage.isV2013) {
    //     return (await storage.getAsV2013(hash)) as Call
    // } else if (storage.isV2015) {
    //     return (await storage.getAsV2015(hash)) as Call
    // } else if (storage.isV2022) {
    //     return (await storage.getAsV2022(hash)) as Call
    // } else if (storage.isV2023) {
    //     return (await storage.getAsV2023(hash)) as Call
    // } else if (storage.isV2024) {
    //     return (await storage.getAsV2024(hash)) as Call
    // } else if (storage.isV2025) {
    //     return (await storage.getAsV2025(hash)) as Call
    // } else if (storage.isV2026) {
    //     return (await storage.getAsV2026(hash)) as Call
    // } else if (storage.isV2028) {
    //     return (await storage.getAsV2028(hash)) as Call
    // } else if (storage.isV2029) {
    //     return (await storage.getAsV2029(hash)) as Call
    // } else if (storage.isV2030) {
    //     return (await storage.getAsV2030(hash)) as Call
    // } else if (storage.isV9010) {
    //     return (await storage.getAsV9010(hash)) as Call
    // } else if (storage.isV9030) {
    //     return (await storage.getAsV9030(hash)) as Call
    // } else if (storage.isV9040) {
    //     return (await storage.getAsV9040(hash)) as Call
    // } else if (storage.isV9050) {
    //     return (await storage.getAsV9050(hash)) as Call
    // } else if (storage.isV9080) {
    //     return (await storage.getAsV9080(hash)) as Call
    // } else if (storage.isV9090) {
    //     return (await storage.getAsV9090(hash)) as Call
    // } else if (storage.isV9100) {
    //     return (await storage.getAsV9100(hash)) as Call
    // } else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

async function getCoucilStorageData(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx, block)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(block.hash, 'TechnicalCommittee', 'ProposalOf', hash)

    // if (storage.isV9111) {
    //     return (await storage.getAsV9111(hash)) as Call
    // } else if (storage.isV9122) {
    //     return (await storage.getAsV9122(hash)) as Call
    // } else if (storage.isV9130) {
    //     return (await storage.getAsV9130(hash)) as Call
    // } else if (storage.isV9160) {
    //     return (await storage.getAsV9160(hash)) as Call
    // } else if (storage.isV9170) {
    //     return (await storage.getAsV9170(hash)) as Call
    // } else if (storage.isV9180) {
    //     return (await storage.getAsV9180(hash)) as Call
    // } else if (storage.isV9190) {
    //     return (await storage.getAsV9190(hash)) as Call
    // } else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

export async function getProposalOf(
    ctx: BatchContext<Store, unknown>, hash: Uint8Array, block: SubstrateBlock
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash, block)) || (await getInstanceStorageData(ctx, hash, block))
}
