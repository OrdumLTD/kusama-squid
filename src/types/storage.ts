import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1020 from './v1020'
import * as v1022 from './v1022'
import * as v1024 from './v1024'
import * as v1027 from './v1027'
import * as v1029 from './v1029'
import * as v1030 from './v1030'
import * as v1031 from './v1031'
import * as v1032 from './v1032'
import * as v1038 from './v1038'
import * as v1039 from './v1039'
import * as v1040 from './v1040'
import * as v1042 from './v1042'
import * as v1050 from './v1050'
import * as v1054 from './v1054'
import * as v1055 from './v1055'
import * as v1058 from './v1058'
import * as v1062 from './v1062'
import * as v2005 from './v2005'
import * as v2007 from './v2007'
import * as v2011 from './v2011'
import * as v2013 from './v2013'
import * as v2015 from './v2015'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2024 from './v2024'
import * as v2025 from './v2025'
import * as v2026 from './v2026'
import * as v2028 from './v2028'
import * as v2029 from './v2029'
import * as v2030 from './v2030'
import * as v9010 from './v9010'
import * as v9030 from './v9030'
import * as v9040 from './v9040'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9111 from './v9111'
import * as v9122 from './v9122'
import * as v9130 from './v9130'
import * as v9160 from './v9160'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9220 from './v9220'
import * as v9230 from './v9230'
import * as v9250 from './v9250'
import * as v9271 from './v9271'
import * as v9291 from './v9291'
import * as v9300 from './v9300'
import * as v9320 from './v9320'
import * as v9340 from './v9340'
import * as v9350 from './v9350'
import * as v9370 from './v9370'
import * as v9381 from './v9381'

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get asV1050(): BalancesAccountStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
 *  is ever zero, then the entry *MUST* be removed.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface BalancesAccountStorageV1050 {
    get(key: Uint8Array): Promise<v1050.AccountData>
    getAll(): Promise<v1050.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1050.AccountData[]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV1020(): BalancesTotalIssuanceStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV1020 {
    get(): Promise<bigint>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asV9111(): BountiesBountiesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageV9111 {
    get(key: number): Promise<(v9111.Bounty | undefined)>
    getAll(): Promise<v9111.Bounty[]>
    getMany(keys: number[]): Promise<(v9111.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v9111.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.Bounty][]>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV9111(): BountiesBountyDescriptionsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageV9111 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ChildBountiesChildBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBounties'
    }

    /**
     *  Child-bounties that have been added.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '27265a54e9a270a9e783aa4baa7a1318433a77722a99de466a3afe5e9d56ba7d'
    }

    /**
     *  Child-bounties that have been added.
     */
    get asV9190(): ChildBountiesChildBountiesStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  Child-bounties that have been added.
 */
export interface ChildBountiesChildBountiesStorageV9190 {
    get(key1: number, key2: number): Promise<(v9190.ChildBounty | undefined)>
    getAll(): Promise<v9190.ChildBounty[]>
    getMany(keys: [number, number][]): Promise<(v9190.ChildBounty | undefined)[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: v9190.ChildBounty][]>
}

export class ChildBountiesChildBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'ChildBounties'
    }

    protected getName() {
        return 'ChildBountyDescriptions'
    }

    /**
     *  The description of each child-bounty.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each child-bounty.
     */
    get asV9190(): ChildBountiesChildBountyDescriptionsStorageV9190 {
        assert(this.isV9190)
        return this as any
    }
}

/**
 *  The description of each child-bounty.
 */
export interface ChildBountiesChildBountyDescriptionsStorageV9190 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ConvictionVotingVotingForStorage extends StorageBase {
    protected getPrefix() {
        return 'ConvictionVoting'
    }

    protected getName() {
        return 'VotingFor'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'f5718a9729b93e5dd0b421ab8274a5e99a7a8bced5ee0a817ed2c995cdfb78d0'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV9320(): ConvictionVotingVotingForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'df291b3d7624eee0e92994a913b5e2134fd7795d7b03d5af2a82d38f2d2e4fd7'
    }

    /**
     *  All voting for a particular voter in a particular voting class. We store the balance for the
     *  number of votes that we have recorded.
     */
    get asV9340(): ConvictionVotingVotingForStorageV9340 {
        assert(this.isV9340)
        return this as any
    }
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV9320 {
    get(key1: Uint8Array, key2: number): Promise<v9320.Type_608>
    getAll(): Promise<v9320.Type_608[]>
    getMany(keys: [Uint8Array, number][]): Promise<v9320.Type_608[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v9320.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v9320.Type_608][]>
}

/**
 *  All voting for a particular voter in a particular voting class. We store the balance for the
 *  number of votes that we have recorded.
 */
export interface ConvictionVotingVotingForStorageV9340 {
    get(key1: Uint8Array, key2: number): Promise<v9340.Type_608>
    getAll(): Promise<v9340.Type_608[]>
    getMany(keys: [Uint8Array, number][]): Promise<v9340.Type_608[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: v9340.Type_608][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: v9340.Type_608][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV9111(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV9111(): CouncilMembersStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageV9111 {
    get(): Promise<Uint8Array[]>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV9111(): CouncilProposalCountStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageV9111 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9111(): CouncilProposalOfStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9122(): CouncilProposalOfStorageV9122 {
        assert(this.isV9122)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9130(): CouncilProposalOfStorageV9130 {
        assert(this.isV9130)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9160(): CouncilProposalOfStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): CouncilProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): CouncilProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): CouncilProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): CouncilProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): CouncilProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): CouncilProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9271(): CouncilProposalOfStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === '15ce1541499aecffbe2bf8eeafc64023633a5d282a468972bd6c44aa77b52ce3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): CouncilProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '4489558a261f014c524a3fa533244e852a4234f4db9aba95f960d069aa1a2db7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): CouncilProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'e264f3acf17bae2089248c1b5be4b79c3766ff552e8565a925e0bceaa16c973b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9320(): CouncilProposalOfStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'bac834a064b49e90d7838a7a187b8909126f18547277b5d8053bc5274c87c1c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): CouncilProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === '325aefbc233caff71e364b31bec3a78cdea40e407dacdb91f8743a0cd5529b7d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9350(): CouncilProposalOfStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '02ea96d1290feb9231e11e833e8eb92c5f4c7bf8bc9033921415b61ac5e1e4b5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): CouncilProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === 'ee93cb7fd8840a07d97e1ae677ebb2b5785cefc002cf463089a970a4ada757f3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9381(): CouncilProposalOfStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.Call | undefined)>
    getAll(): Promise<v9111.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9122 {
    get(key: Uint8Array): Promise<(v9122.Call | undefined)>
    getAll(): Promise<v9122.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9130 {
    get(key: Uint8Array): Promise<(v9130.Call | undefined)>
    getAll(): Promise<v9130.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.Call | undefined)>
    getAll(): Promise<v9160.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9271 {
    get(key: Uint8Array): Promise<(v9271.Call | undefined)>
    getAll(): Promise<v9271.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.Call | undefined)>
    getAll(): Promise<v9320.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9350 {
    get(key: Uint8Array): Promise<(v9350.Call | undefined)>
    getAll(): Promise<v9350.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9350.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV9381 {
    get(key: Uint8Array): Promise<(v9381.Call | undefined)>
    getAll(): Promise<v9381.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9381.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === '8d49bec84532cce5991ad4c420ddf4ab792644a27de5f8450488e36a6c1c40ef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1022(): DemocracyPreimagesStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV1058(): DemocracyPreimagesStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asV9111(): DemocracyPreimagesStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1022 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint, number] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint, number][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint, number] | undefined)[]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV1058 {
    get(key: Uint8Array): Promise<(v1058.PreimageStatus | undefined)>
    getAll(): Promise<v1058.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v1058.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1058.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1058.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1058.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1058.PreimageStatus][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.PreimageStatus | undefined)>
    getAll(): Promise<v9111.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.PreimageStatus][]>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asV1020(): DemocracyPublicPropCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageV1020 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '0da61e381ba5d7090741171fee74491d6e5f0d3b420709a45911270de6f4da0a'
    }

    /**
     *  The public proposals. Unsorted.
     */
    get asV1020(): DemocracyPublicPropsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asV1022(): DemocracyPublicPropsStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asV9320(): DemocracyPublicPropsStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted.
 */
export interface DemocracyPublicPropsStorageV1020 {
    get(): Promise<[number, v1020.Proposal, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageV1022 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageV9320 {
    get(): Promise<[number, v9320.Bounded, Uint8Array][]>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'b841a2a79796892945d8a9256375f0a9e422926b95cb3e85c8edae023ec07300'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1020(): DemocracyReferendumInfoOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV1055(): DemocracyReferendumInfoOfStorageV1055 {
        assert(this.isV1055)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9111(): DemocracyReferendumInfoOfStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asV9320(): DemocracyReferendumInfoOfStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface DemocracyReferendumInfoOfStorageV1020 {
    get(key: number): Promise<(v1020.Type_283 | undefined)>
    getAll(): Promise<v1020.Type_283[]>
    getMany(keys: number[]): Promise<(v1020.Type_283 | undefined)[]>
}

/**
 *  Information concerning any given referendum.
 */
export interface DemocracyReferendumInfoOfStorageV1055 {
    get(key: number): Promise<(v1055.ReferendumInfo | undefined)>
    getAll(): Promise<v1055.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v1055.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v1055.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v1055.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v1055.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v1055.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9111 {
    get(key: number): Promise<(v9111.ReferendumInfo | undefined)>
    getAll(): Promise<v9111.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9111.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9111.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9111.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9111.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9111.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageV9320 {
    get(key: number): Promise<(v9320.ReferendumInfo | undefined)>
    getAll(): Promise<v9320.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(v9320.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9320.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: v9320.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9320.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9320.ReferendumInfo][]>
}

export class FellowshipReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'FellowshipReferenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '8a990b6f7846d554858f1d8393cc54fb83824334598c3e96b4c4724d09d3d6c2'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9320(): FellowshipReferendaReferendumInfoForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === 'aabc81c1452cdb0de49a229561d543d385d7d642ee1e7780c9625a85ff113aa4'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9350(): FellowshipReferendaReferendumInfoForStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '94d97d6312dcca8e8b83b102ca6ece367c8a23b89f39bef9faa78f5e68a93333'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9370(): FellowshipReferendaReferendumInfoForStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '66ce814ce6829f0f86b4fbdc3c4d3336f4c25072d7ed8a54ab0a62e15c2190d9'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9381(): FellowshipReferendaReferendumInfoForStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9320 {
    get(key: number): Promise<(v9320.Type_643 | undefined)>
    getAll(): Promise<v9320.Type_643[]>
    getMany(keys: number[]): Promise<(v9320.Type_643 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9320.Type_643][]>
    getPairs(key: number): Promise<[k: number, v: v9320.Type_643][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9320.Type_643][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9320.Type_643][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9350 {
    get(key: number): Promise<(v9350.Type_643 | undefined)>
    getAll(): Promise<v9350.Type_643[]>
    getMany(keys: number[]): Promise<(v9350.Type_643 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9350.Type_643][]>
    getPairs(key: number): Promise<[k: number, v: v9350.Type_643][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9350.Type_643][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9350.Type_643][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9370 {
    get(key: number): Promise<(v9370.Type_644 | undefined)>
    getAll(): Promise<v9370.Type_644[]>
    getMany(keys: number[]): Promise<(v9370.Type_644 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9370.Type_644][]>
    getPairs(key: number): Promise<[k: number, v: v9370.Type_644][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9370.Type_644][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9370.Type_644][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface FellowshipReferendaReferendumInfoForStorageV9381 {
    get(key: number): Promise<(v9381.Type_649 | undefined)>
    getAll(): Promise<v9381.Type_649[]>
    getMany(keys: number[]): Promise<(v9381.Type_649 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9381.Type_649][]>
    getPairs(key: number): Promise<[k: number, v: v9381.Type_649][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9381.Type_649][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9381.Type_649][]>
}

export class Instance1CollectiveMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asV1020(): Instance1CollectiveMembersStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface Instance1CollectiveMembersStorageV1020 {
    get(): Promise<Uint8Array[]>
}

export class Instance1CollectiveProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asV1020(): Instance1CollectiveProposalCountStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface Instance1CollectiveProposalCountStorageV1020 {
    get(): Promise<number>
}

export class Instance1CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance1Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ff658fad55af8e9e38fe1bed80067dc6842aefcacc9835f3404ef79a9bfa9a7f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1020(): Instance1CollectiveProposalOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === 'cf2bde75ee5bf4aedef305aabd50a859b561d2ea72a3ad32f0253c133c791f40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1022(): Instance1CollectiveProposalOfStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1024(): boolean {
        return this.getTypeHash() === 'af9a5b7fd3313a46c1c6b41b8b6812f69ff0f2b1edd8d66693a82c0ca49db343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1024(): Instance1CollectiveProposalOfStorageV1024 {
        assert(this.isV1024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1027(): boolean {
        return this.getTypeHash() === 'fcb038bcf495bae551346ead7a5d7cb7edff11f26babbbe2fcc9d0fbbfb0ee86'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1027(): Instance1CollectiveProposalOfStorageV1027 {
        assert(this.isV1027)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1029(): boolean {
        return this.getTypeHash() === '1fa524953ff02a11fb7b9dc520b34c836bf4a94b731f96f02d8442061891be9a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1029(): Instance1CollectiveProposalOfStorageV1029 {
        assert(this.isV1029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '722c944e5d464430da96eb7afb30cb22dcf97958e77a989b11b76e0a08bc91ae'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1030(): Instance1CollectiveProposalOfStorageV1030 {
        assert(this.isV1030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1031(): boolean {
        return this.getTypeHash() === '04587b1736af13aca0b303f067e8d8ca82708a7c35f7e540deb889b26b16e850'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1031(): Instance1CollectiveProposalOfStorageV1031 {
        assert(this.isV1031)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1032(): boolean {
        return this.getTypeHash() === '687ab865a15f03a5c5501e45563136c8c7e04087d3f2d252349b1e3afc2bb95b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1032(): Instance1CollectiveProposalOfStorageV1032 {
        assert(this.isV1032)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '4b12bc407721d3d627ff8c350094c66df705befac88991c10ee1900190e41fcd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1038(): Instance1CollectiveProposalOfStorageV1038 {
        assert(this.isV1038)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1039(): boolean {
        return this.getTypeHash() === '280c2b5e09651099a2df56d3a3b1021971981e68df34b2cc71f846a279441cf7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1039(): Instance1CollectiveProposalOfStorageV1039 {
        assert(this.isV1039)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '7b716afbe6383efdfa96087dbe25666ef1749a83171459d7a417e308370bf5ce'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1040(): Instance1CollectiveProposalOfStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1042(): boolean {
        return this.getTypeHash() === 'ba9ae3f886667e78e6929d4b9f36feb891aad7e94d36a75d3c2835143d849183'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1042(): Instance1CollectiveProposalOfStorageV1042 {
        assert(this.isV1042)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'd780ab190a15dcdf4e9424c86844bcd43951578af085195d51e82860b74ea017'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1050(): Instance1CollectiveProposalOfStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1054(): boolean {
        return this.getTypeHash() === '4ee1bcb3e88f1695c390a015a7bb5456bbed70aea3e714981690f4d1e6647d20'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1054(): Instance1CollectiveProposalOfStorageV1054 {
        assert(this.isV1054)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '9b1888d08bbc63ca77fc479899195e8abbc91196043f964ed6ae05f7a6b92ac2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1055(): Instance1CollectiveProposalOfStorageV1055 {
        assert(this.isV1055)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '51d22c65a4493fbee384e3c6b5480902226dcb7f07fdae2e09b1ed994581b8a2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1058(): Instance1CollectiveProposalOfStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1062(): boolean {
        return this.getTypeHash() === '2bebfde2c19829d495b45d6c78ef1337d124232bf319c06661a736c67899c40b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1062(): Instance1CollectiveProposalOfStorageV1062 {
        assert(this.isV1062)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'b1d8bd7af8a0bdba85190975d77d06e416603175b1c190c6efc22966d2222b42'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2005(): Instance1CollectiveProposalOfStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2007(): boolean {
        return this.getTypeHash() === '961aa31652f228fead4d9c95205bb44df6d3431225fc46ab1b2bb180613401d3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2007(): Instance1CollectiveProposalOfStorageV2007 {
        assert(this.isV2007)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2011(): boolean {
        return this.getTypeHash() === '611412d18d1c6341ce497288da6f8d52d113a683fd777fa5d7a6c0ac089326a1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2011(): Instance1CollectiveProposalOfStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '1095e28f34062b5a0a31d9abd5578a7aa39d989d65d6cd2c6987346f2cacface'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2013(): Instance1CollectiveProposalOfStorageV2013 {
        assert(this.isV2013)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2015(): boolean {
        return this.getTypeHash() === '633a2c0a40bf70aa7d1a84d140419484144593cd4c1fbd16efca4f71428abd5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2015(): Instance1CollectiveProposalOfStorageV2015 {
        assert(this.isV2015)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2022(): boolean {
        return this.getTypeHash() === 'ba39e6f89dc7984a5de5986ba21ea9c7874a17928d35ee22e9f19a6a32b06ed7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2022(): Instance1CollectiveProposalOfStorageV2022 {
        assert(this.isV2022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2023(): boolean {
        return this.getTypeHash() === '0eff9f067f650895cebad9eb8f6d2e0b87378eb99f6cfcc9188519b6809e81c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2023(): Instance1CollectiveProposalOfStorageV2023 {
        assert(this.isV2023)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2024(): boolean {
        return this.getTypeHash() === 'f47e7718dc7af5fdbceb48ad3c23c248921145bbaaefecdaf3c6e766071a0379'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2024(): Instance1CollectiveProposalOfStorageV2024 {
        assert(this.isV2024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '20b9a67d80ebdfbcdbeab6296df5fb3c08e4edd42eb821b0d267a4e6a5639fe3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2025(): Instance1CollectiveProposalOfStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2026(): boolean {
        return this.getTypeHash() === 'b96abbff6a00bf4f4edb47eab52154f403f584ec4ab38b7e4be1af0d215bc2e2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2026(): Instance1CollectiveProposalOfStorageV2026 {
        assert(this.isV2026)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '399c92d404fea7dc92e323f9384520a1dcaf371691e5db7723306cc5b1246d94'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2028(): Instance1CollectiveProposalOfStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '468d59d5b40e80c13c2d81c4774d12f145dcf6ba2363aef718241ac2abc28d12'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2029(): Instance1CollectiveProposalOfStorageV2029 {
        assert(this.isV2029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === 'd82835c91c052dffa0a14eb20b7a8a134d538d2d60742b962f3fa7823c1657fa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2030(): Instance1CollectiveProposalOfStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '198809793338f28c0a822990194fdeaf2dec25e8848048ce7bb835b676396a37'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9010(): Instance1CollectiveProposalOfStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9030(): boolean {
        return this.getTypeHash() === '133daac7167756eaebbdcb23c93e2211158671e84e107af848071d3534ed99bd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9030(): Instance1CollectiveProposalOfStorageV9030 {
        assert(this.isV9030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '45640f8fa172b75c33ced53cedf23106c06b9a91427a71e706d9d136aed8d3a6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9040(): Instance1CollectiveProposalOfStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '6ffbddf00697f7a651ddd2bd8789384e7dca3980a60aa5a2499d016d43b1ac56'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance1CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '5c95cef639e096f92226c0b752c338b2195817a6e7f6d387b5199e8de3e02bab'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance1CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '3060f9c0543c77d2a8f13dd41a665b6e953b60cd682f2cd0a4b9e47ca76c255d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance1CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '4da47ef769f8cd0065a1642d93ed9e4664c7b938642677491109a7b2d9dffc5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance1CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.Proposal | undefined)>
    getAll(): Promise<v1020.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1022 {
    get(key: Uint8Array): Promise<(v1022.Proposal | undefined)>
    getAll(): Promise<v1022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1024 {
    get(key: Uint8Array): Promise<(v1024.Proposal | undefined)>
    getAll(): Promise<v1024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1027 {
    get(key: Uint8Array): Promise<(v1027.Proposal | undefined)>
    getAll(): Promise<v1027.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1029 {
    get(key: Uint8Array): Promise<(v1029.Proposal | undefined)>
    getAll(): Promise<v1029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1030 {
    get(key: Uint8Array): Promise<(v1030.Proposal | undefined)>
    getAll(): Promise<v1030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1031 {
    get(key: Uint8Array): Promise<(v1031.Proposal | undefined)>
    getAll(): Promise<v1031.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1032 {
    get(key: Uint8Array): Promise<(v1032.Proposal | undefined)>
    getAll(): Promise<v1032.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1038 {
    get(key: Uint8Array): Promise<(v1038.Proposal | undefined)>
    getAll(): Promise<v1038.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1039 {
    get(key: Uint8Array): Promise<(v1039.Proposal | undefined)>
    getAll(): Promise<v1039.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1040 {
    get(key: Uint8Array): Promise<(v1040.Proposal | undefined)>
    getAll(): Promise<v1040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1042 {
    get(key: Uint8Array): Promise<(v1042.Proposal | undefined)>
    getAll(): Promise<v1042.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.Proposal | undefined)>
    getAll(): Promise<v1050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1054 {
    get(key: Uint8Array): Promise<(v1054.Proposal | undefined)>
    getAll(): Promise<v1054.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1055 {
    get(key: Uint8Array): Promise<(v1055.Proposal | undefined)>
    getAll(): Promise<v1055.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1058 {
    get(key: Uint8Array): Promise<(v1058.Proposal | undefined)>
    getAll(): Promise<v1058.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV1062 {
    get(key: Uint8Array): Promise<(v1062.Proposal | undefined)>
    getAll(): Promise<v1062.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2005 {
    get(key: Uint8Array): Promise<(v2005.Proposal | undefined)>
    getAll(): Promise<v2005.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2007 {
    get(key: Uint8Array): Promise<(v2007.Proposal | undefined)>
    getAll(): Promise<v2007.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2011 {
    get(key: Uint8Array): Promise<(v2011.Proposal | undefined)>
    getAll(): Promise<v2011.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2013 {
    get(key: Uint8Array): Promise<(v2013.Proposal | undefined)>
    getAll(): Promise<v2013.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2015 {
    get(key: Uint8Array): Promise<(v2015.Proposal | undefined)>
    getAll(): Promise<v2015.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2022 {
    get(key: Uint8Array): Promise<(v2022.Proposal | undefined)>
    getAll(): Promise<v2022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2023 {
    get(key: Uint8Array): Promise<(v2023.Proposal | undefined)>
    getAll(): Promise<v2023.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2024 {
    get(key: Uint8Array): Promise<(v2024.Proposal | undefined)>
    getAll(): Promise<v2024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2025 {
    get(key: Uint8Array): Promise<(v2025.Proposal | undefined)>
    getAll(): Promise<v2025.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2026 {
    get(key: Uint8Array): Promise<(v2026.Proposal | undefined)>
    getAll(): Promise<v2026.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2028 {
    get(key: Uint8Array): Promise<(v2028.Proposal | undefined)>
    getAll(): Promise<v2028.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2029 {
    get(key: Uint8Array): Promise<(v2029.Proposal | undefined)>
    getAll(): Promise<v2029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV2030 {
    get(key: Uint8Array): Promise<(v2030.Proposal | undefined)>
    getAll(): Promise<v2030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9010 {
    get(key: Uint8Array): Promise<(v9010.Proposal | undefined)>
    getAll(): Promise<v9010.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9030 {
    get(key: Uint8Array): Promise<(v9030.Proposal | undefined)>
    getAll(): Promise<v9030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9040 {
    get(key: Uint8Array): Promise<(v9040.Proposal | undefined)>
    getAll(): Promise<v9040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance1CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class Instance2CollectiveProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Instance2Collective'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'ff658fad55af8e9e38fe1bed80067dc6842aefcacc9835f3404ef79a9bfa9a7f'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1020(): Instance2CollectiveProposalOfStorageV1020 {
        assert(this.isV1020)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1022(): boolean {
        return this.getTypeHash() === 'cf2bde75ee5bf4aedef305aabd50a859b561d2ea72a3ad32f0253c133c791f40'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1022(): Instance2CollectiveProposalOfStorageV1022 {
        assert(this.isV1022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1024(): boolean {
        return this.getTypeHash() === 'af9a5b7fd3313a46c1c6b41b8b6812f69ff0f2b1edd8d66693a82c0ca49db343'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1024(): Instance2CollectiveProposalOfStorageV1024 {
        assert(this.isV1024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1027(): boolean {
        return this.getTypeHash() === 'fcb038bcf495bae551346ead7a5d7cb7edff11f26babbbe2fcc9d0fbbfb0ee86'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1027(): Instance2CollectiveProposalOfStorageV1027 {
        assert(this.isV1027)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1029(): boolean {
        return this.getTypeHash() === '1fa524953ff02a11fb7b9dc520b34c836bf4a94b731f96f02d8442061891be9a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1029(): Instance2CollectiveProposalOfStorageV1029 {
        assert(this.isV1029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1030(): boolean {
        return this.getTypeHash() === '722c944e5d464430da96eb7afb30cb22dcf97958e77a989b11b76e0a08bc91ae'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1030(): Instance2CollectiveProposalOfStorageV1030 {
        assert(this.isV1030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1031(): boolean {
        return this.getTypeHash() === '04587b1736af13aca0b303f067e8d8ca82708a7c35f7e540deb889b26b16e850'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1031(): Instance2CollectiveProposalOfStorageV1031 {
        assert(this.isV1031)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1032(): boolean {
        return this.getTypeHash() === '687ab865a15f03a5c5501e45563136c8c7e04087d3f2d252349b1e3afc2bb95b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1032(): Instance2CollectiveProposalOfStorageV1032 {
        assert(this.isV1032)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '4b12bc407721d3d627ff8c350094c66df705befac88991c10ee1900190e41fcd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1038(): Instance2CollectiveProposalOfStorageV1038 {
        assert(this.isV1038)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1039(): boolean {
        return this.getTypeHash() === '280c2b5e09651099a2df56d3a3b1021971981e68df34b2cc71f846a279441cf7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1039(): Instance2CollectiveProposalOfStorageV1039 {
        assert(this.isV1039)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1040(): boolean {
        return this.getTypeHash() === '7b716afbe6383efdfa96087dbe25666ef1749a83171459d7a417e308370bf5ce'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1040(): Instance2CollectiveProposalOfStorageV1040 {
        assert(this.isV1040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1042(): boolean {
        return this.getTypeHash() === 'ba9ae3f886667e78e6929d4b9f36feb891aad7e94d36a75d3c2835143d849183'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1042(): Instance2CollectiveProposalOfStorageV1042 {
        assert(this.isV1042)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === 'd780ab190a15dcdf4e9424c86844bcd43951578af085195d51e82860b74ea017'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1050(): Instance2CollectiveProposalOfStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1054(): boolean {
        return this.getTypeHash() === '4ee1bcb3e88f1695c390a015a7bb5456bbed70aea3e714981690f4d1e6647d20'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1054(): Instance2CollectiveProposalOfStorageV1054 {
        assert(this.isV1054)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1055(): boolean {
        return this.getTypeHash() === '9b1888d08bbc63ca77fc479899195e8abbc91196043f964ed6ae05f7a6b92ac2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1055(): Instance2CollectiveProposalOfStorageV1055 {
        assert(this.isV1055)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1058(): boolean {
        return this.getTypeHash() === '51d22c65a4493fbee384e3c6b5480902226dcb7f07fdae2e09b1ed994581b8a2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1058(): Instance2CollectiveProposalOfStorageV1058 {
        assert(this.isV1058)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1062(): boolean {
        return this.getTypeHash() === '2bebfde2c19829d495b45d6c78ef1337d124232bf319c06661a736c67899c40b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1062(): Instance2CollectiveProposalOfStorageV1062 {
        assert(this.isV1062)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2005(): boolean {
        return this.getTypeHash() === 'b1d8bd7af8a0bdba85190975d77d06e416603175b1c190c6efc22966d2222b42'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2005(): Instance2CollectiveProposalOfStorageV2005 {
        assert(this.isV2005)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2007(): boolean {
        return this.getTypeHash() === '961aa31652f228fead4d9c95205bb44df6d3431225fc46ab1b2bb180613401d3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2007(): Instance2CollectiveProposalOfStorageV2007 {
        assert(this.isV2007)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2011(): boolean {
        return this.getTypeHash() === '611412d18d1c6341ce497288da6f8d52d113a683fd777fa5d7a6c0ac089326a1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2011(): Instance2CollectiveProposalOfStorageV2011 {
        assert(this.isV2011)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '1095e28f34062b5a0a31d9abd5578a7aa39d989d65d6cd2c6987346f2cacface'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2013(): Instance2CollectiveProposalOfStorageV2013 {
        assert(this.isV2013)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2015(): boolean {
        return this.getTypeHash() === '633a2c0a40bf70aa7d1a84d140419484144593cd4c1fbd16efca4f71428abd5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2015(): Instance2CollectiveProposalOfStorageV2015 {
        assert(this.isV2015)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2022(): boolean {
        return this.getTypeHash() === 'ba39e6f89dc7984a5de5986ba21ea9c7874a17928d35ee22e9f19a6a32b06ed7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2022(): Instance2CollectiveProposalOfStorageV2022 {
        assert(this.isV2022)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2023(): boolean {
        return this.getTypeHash() === '0eff9f067f650895cebad9eb8f6d2e0b87378eb99f6cfcc9188519b6809e81c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2023(): Instance2CollectiveProposalOfStorageV2023 {
        assert(this.isV2023)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2024(): boolean {
        return this.getTypeHash() === 'f47e7718dc7af5fdbceb48ad3c23c248921145bbaaefecdaf3c6e766071a0379'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2024(): Instance2CollectiveProposalOfStorageV2024 {
        assert(this.isV2024)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '20b9a67d80ebdfbcdbeab6296df5fb3c08e4edd42eb821b0d267a4e6a5639fe3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2025(): Instance2CollectiveProposalOfStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2026(): boolean {
        return this.getTypeHash() === 'b96abbff6a00bf4f4edb47eab52154f403f584ec4ab38b7e4be1af0d215bc2e2'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2026(): Instance2CollectiveProposalOfStorageV2026 {
        assert(this.isV2026)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '399c92d404fea7dc92e323f9384520a1dcaf371691e5db7723306cc5b1246d94'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2028(): Instance2CollectiveProposalOfStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2029(): boolean {
        return this.getTypeHash() === '468d59d5b40e80c13c2d81c4774d12f145dcf6ba2363aef718241ac2abc28d12'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2029(): Instance2CollectiveProposalOfStorageV2029 {
        assert(this.isV2029)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === 'd82835c91c052dffa0a14eb20b7a8a134d538d2d60742b962f3fa7823c1657fa'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV2030(): Instance2CollectiveProposalOfStorageV2030 {
        assert(this.isV2030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9010(): boolean {
        return this.getTypeHash() === '198809793338f28c0a822990194fdeaf2dec25e8848048ce7bb835b676396a37'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9010(): Instance2CollectiveProposalOfStorageV9010 {
        assert(this.isV9010)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9030(): boolean {
        return this.getTypeHash() === '133daac7167756eaebbdcb23c93e2211158671e84e107af848071d3534ed99bd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9030(): Instance2CollectiveProposalOfStorageV9030 {
        assert(this.isV9030)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9040(): boolean {
        return this.getTypeHash() === '45640f8fa172b75c33ced53cedf23106c06b9a91427a71e706d9d136aed8d3a6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9040(): Instance2CollectiveProposalOfStorageV9040 {
        assert(this.isV9040)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9050(): boolean {
        return this.getTypeHash() === '6ffbddf00697f7a651ddd2bd8789384e7dca3980a60aa5a2499d016d43b1ac56'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9050(): Instance2CollectiveProposalOfStorageV9050 {
        assert(this.isV9050)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9080(): boolean {
        return this.getTypeHash() === '5c95cef639e096f92226c0b752c338b2195817a6e7f6d387b5199e8de3e02bab'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9080(): Instance2CollectiveProposalOfStorageV9080 {
        assert(this.isV9080)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9090(): boolean {
        return this.getTypeHash() === '3060f9c0543c77d2a8f13dd41a665b6e953b60cd682f2cd0a4b9e47ca76c255d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9090(): Instance2CollectiveProposalOfStorageV9090 {
        assert(this.isV9090)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9100(): boolean {
        return this.getTypeHash() === '4da47ef769f8cd0065a1642d93ed9e4664c7b938642677491109a7b2d9dffc5c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9100(): Instance2CollectiveProposalOfStorageV9100 {
        assert(this.isV9100)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1020 {
    get(key: Uint8Array): Promise<(v1020.Proposal | undefined)>
    getAll(): Promise<v1020.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1020.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1022 {
    get(key: Uint8Array): Promise<(v1022.Proposal | undefined)>
    getAll(): Promise<v1022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1022.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1024 {
    get(key: Uint8Array): Promise<(v1024.Proposal | undefined)>
    getAll(): Promise<v1024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1024.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1027 {
    get(key: Uint8Array): Promise<(v1027.Proposal | undefined)>
    getAll(): Promise<v1027.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1027.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1029 {
    get(key: Uint8Array): Promise<(v1029.Proposal | undefined)>
    getAll(): Promise<v1029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1029.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1030 {
    get(key: Uint8Array): Promise<(v1030.Proposal | undefined)>
    getAll(): Promise<v1030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1030.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1031 {
    get(key: Uint8Array): Promise<(v1031.Proposal | undefined)>
    getAll(): Promise<v1031.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1031.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1032 {
    get(key: Uint8Array): Promise<(v1032.Proposal | undefined)>
    getAll(): Promise<v1032.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1032.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1038 {
    get(key: Uint8Array): Promise<(v1038.Proposal | undefined)>
    getAll(): Promise<v1038.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1038.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1039 {
    get(key: Uint8Array): Promise<(v1039.Proposal | undefined)>
    getAll(): Promise<v1039.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1039.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1040 {
    get(key: Uint8Array): Promise<(v1040.Proposal | undefined)>
    getAll(): Promise<v1040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1040.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1042 {
    get(key: Uint8Array): Promise<(v1042.Proposal | undefined)>
    getAll(): Promise<v1042.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1042.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1050 {
    get(key: Uint8Array): Promise<(v1050.Proposal | undefined)>
    getAll(): Promise<v1050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1050.Proposal | undefined)[]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1054 {
    get(key: Uint8Array): Promise<(v1054.Proposal | undefined)>
    getAll(): Promise<v1054.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1054.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1054.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1055 {
    get(key: Uint8Array): Promise<(v1055.Proposal | undefined)>
    getAll(): Promise<v1055.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1055.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1055.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1058 {
    get(key: Uint8Array): Promise<(v1058.Proposal | undefined)>
    getAll(): Promise<v1058.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1058.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1058.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV1062 {
    get(key: Uint8Array): Promise<(v1062.Proposal | undefined)>
    getAll(): Promise<v1062.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v1062.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1062.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2005 {
    get(key: Uint8Array): Promise<(v2005.Proposal | undefined)>
    getAll(): Promise<v2005.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2005.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2005.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2007 {
    get(key: Uint8Array): Promise<(v2007.Proposal | undefined)>
    getAll(): Promise<v2007.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2007.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2007.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2011 {
    get(key: Uint8Array): Promise<(v2011.Proposal | undefined)>
    getAll(): Promise<v2011.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2011.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2011.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2013 {
    get(key: Uint8Array): Promise<(v2013.Proposal | undefined)>
    getAll(): Promise<v2013.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2013.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2013.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2015 {
    get(key: Uint8Array): Promise<(v2015.Proposal | undefined)>
    getAll(): Promise<v2015.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2015.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2015.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2022 {
    get(key: Uint8Array): Promise<(v2022.Proposal | undefined)>
    getAll(): Promise<v2022.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2022.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2022.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2023 {
    get(key: Uint8Array): Promise<(v2023.Proposal | undefined)>
    getAll(): Promise<v2023.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2023.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2023.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2024 {
    get(key: Uint8Array): Promise<(v2024.Proposal | undefined)>
    getAll(): Promise<v2024.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2024.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2024.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2025 {
    get(key: Uint8Array): Promise<(v2025.Proposal | undefined)>
    getAll(): Promise<v2025.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2025.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2025.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2026 {
    get(key: Uint8Array): Promise<(v2026.Proposal | undefined)>
    getAll(): Promise<v2026.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2026.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2026.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2028 {
    get(key: Uint8Array): Promise<(v2028.Proposal | undefined)>
    getAll(): Promise<v2028.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2028.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2029 {
    get(key: Uint8Array): Promise<(v2029.Proposal | undefined)>
    getAll(): Promise<v2029.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2029.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2029.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV2030 {
    get(key: Uint8Array): Promise<(v2030.Proposal | undefined)>
    getAll(): Promise<v2030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v2030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9010 {
    get(key: Uint8Array): Promise<(v9010.Proposal | undefined)>
    getAll(): Promise<v9010.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9010.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9010.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9030 {
    get(key: Uint8Array): Promise<(v9030.Proposal | undefined)>
    getAll(): Promise<v9030.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9030.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9030.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9040 {
    get(key: Uint8Array): Promise<(v9040.Proposal | undefined)>
    getAll(): Promise<v9040.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9040.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9040.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9050 {
    get(key: Uint8Array): Promise<(v9050.Proposal | undefined)>
    getAll(): Promise<v9050.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9050.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9050.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9080 {
    get(key: Uint8Array): Promise<(v9080.Proposal | undefined)>
    getAll(): Promise<v9080.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9080.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9080.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9090 {
    get(key: Uint8Array): Promise<(v9090.Proposal | undefined)>
    getAll(): Promise<v9090.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9090.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9090.Proposal][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface Instance2CollectiveProposalOfStorageV9100 {
    get(key: Uint8Array): Promise<(v9100.Proposal | undefined)>
    getAll(): Promise<v9100.Proposal[]>
    getMany(keys: Uint8Array[]): Promise<(v9100.Proposal | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9100.Proposal][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV9160(): PreimagePreimageForStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    get isV9320(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV9320(): PreimagePreimageForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV9160 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface PreimagePreimageForStorageV9320 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9160(): PreimageStatusForStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9320(): PreimageStatusForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.RequestStatus | undefined)>
    getAll(): Promise<v9160.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.RequestStatus | undefined)>
    getAll(): Promise<v9320.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.RequestStatus][]>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '33899ab47ab8fe6857d9da2d98b7b7168468bb2627a189bdae062d9c5ad90e3a'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9320(): ReferendaReferendumInfoForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === '4adf07f2f69a8f559991f6f0e0723c30859a0ed73aeac6c1fb83b91e3f29a69c'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9350(): ReferendaReferendumInfoForStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '2e118aad7ee2503a94d98e08177512fcbcb174783c0ea17e18b13efb0a6a5dff'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9370(): ReferendaReferendumInfoForStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === '282a6192ba32678409143f18c94f866f00f2c4e36ad01a5737156fa49a4fd5bb'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9381(): ReferendaReferendumInfoForStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9320 {
    get(key: number): Promise<(v9320.Type_620 | undefined)>
    getAll(): Promise<v9320.Type_620[]>
    getMany(keys: number[]): Promise<(v9320.Type_620 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9320.Type_620][]>
    getPairs(key: number): Promise<[k: number, v: v9320.Type_620][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9320.Type_620][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9320.Type_620][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9350 {
    get(key: number): Promise<(v9350.Type_620 | undefined)>
    getAll(): Promise<v9350.Type_620[]>
    getMany(keys: number[]): Promise<(v9350.Type_620 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9350.Type_620][]>
    getPairs(key: number): Promise<[k: number, v: v9350.Type_620][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9350.Type_620][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9350.Type_620][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9370 {
    get(key: number): Promise<(v9370.Type_621 | undefined)>
    getAll(): Promise<v9370.Type_621[]>
    getMany(keys: number[]): Promise<(v9370.Type_621 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9370.Type_621][]>
    getPairs(key: number): Promise<[k: number, v: v9370.Type_621][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9370.Type_621][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9370.Type_621][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9381 {
    get(key: number): Promise<(v9381.Type_626 | undefined)>
    getAll(): Promise<v9381.Type_626[]>
    getMany(keys: number[]): Promise<(v9381.Type_626 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9381.Type_626][]>
    getPairs(key: number): Promise<[k: number, v: v9381.Type_626][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9381.Type_626][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9381.Type_626][]>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV1050(): SystemAccountStorageV1050 {
        assert(this.isV1050)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2025(): SystemAccountStorageV2025 {
        assert(this.isV2025)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2028(): boolean {
        return this.getTypeHash() === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2028(): SystemAccountStorageV2028 {
        assert(this.isV2028)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV2030(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV2030(): SystemAccountStorageV2030 {
        assert(this.isV2030)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV1050 {
    get(key: Uint8Array): Promise<v1050.AccountInfo>
    getAll(): Promise<v1050.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v1050.AccountInfo[]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2025 {
    get(key: Uint8Array): Promise<v2025.AccountInfo>
    getAll(): Promise<v2025.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2025.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2025.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2025.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2025.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2025.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2028 {
    get(key: Uint8Array): Promise<v2028.AccountInfo>
    getAll(): Promise<v2028.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2028.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2028.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2028.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2028.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2028.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV2030 {
    get(key: Uint8Array): Promise<v2030.AccountInfo>
    getAll(): Promise<v2030.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v2030.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2030.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2030.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2030.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2030.AccountInfo][]>
}

export class SystemAccountNonceStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AccountNonce'
    }

    /**
     *  Extrinsics nonce for accounts.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  Extrinsics nonce for accounts.
     */
    get asV1020(): SystemAccountNonceStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Extrinsics nonce for accounts.
 */
export interface SystemAccountNonceStorageV1020 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9111(): TechnicalCommitteeProposalOfStorageV9111 {
        assert(this.isV9111)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9122(): boolean {
        return this.getTypeHash() === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9122(): TechnicalCommitteeProposalOfStorageV9122 {
        assert(this.isV9122)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9130(): boolean {
        return this.getTypeHash() === '000fa9eac9f34fd52e1de16af6c8184e689b16aff5b69e5b770310c6592b9a23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9130(): TechnicalCommitteeProposalOfStorageV9130 {
        assert(this.isV9130)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'ae191f57edfafa0ed77684f6c6956e661698f7626fcceabc35fc02aa204fc327'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9160(): TechnicalCommitteeProposalOfStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9170(): boolean {
        return this.getTypeHash() === '92131b74d89cee349edae227d67d4039f396e38796421ef6ccad698229d1be87'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9170(): TechnicalCommitteeProposalOfStorageV9170 {
        assert(this.isV9170)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9180(): boolean {
        return this.getTypeHash() === '75d269266869aab19a7c849bd16e82439d759218a7ceb76d9d44ca8913eac77b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9180(): TechnicalCommitteeProposalOfStorageV9180 {
        assert(this.isV9180)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9190(): boolean {
        return this.getTypeHash() === 'ad90492cf87d0e7973eb29afcc4224fdcd5cea7edbc9f874a78e09ffb7af764a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9190(): TechnicalCommitteeProposalOfStorageV9190 {
        assert(this.isV9190)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9220(): boolean {
        return this.getTypeHash() === '4364e985a64c3f6addf377d90f061349553d92fcbc29839df8b7cde1ec346b0c'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9220(): TechnicalCommitteeProposalOfStorageV9220 {
        assert(this.isV9220)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9230(): boolean {
        return this.getTypeHash() === '60a712e8f852a3af336091a63ce735a781e9f17a09e4fb3ea560e93a76c19d2e'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9230(): TechnicalCommitteeProposalOfStorageV9230 {
        assert(this.isV9230)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9250(): boolean {
        return this.getTypeHash() === 'c62c655cbb15038afffc766086c6f698f366a8695bacaa50b3b5b2d97d4b89f5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9250(): TechnicalCommitteeProposalOfStorageV9250 {
        assert(this.isV9250)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9271(): boolean {
        return this.getTypeHash() === 'b6f7b824ac82eac6e00f10809e508dfaacd22dda3aeafc8c9374020bd69d27ad'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9271(): TechnicalCommitteeProposalOfStorageV9271 {
        assert(this.isV9271)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9291(): boolean {
        return this.getTypeHash() === '15ce1541499aecffbe2bf8eeafc64023633a5d282a468972bd6c44aa77b52ce3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9291(): TechnicalCommitteeProposalOfStorageV9291 {
        assert(this.isV9291)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9300(): boolean {
        return this.getTypeHash() === '4489558a261f014c524a3fa533244e852a4234f4db9aba95f960d069aa1a2db7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9300(): TechnicalCommitteeProposalOfStorageV9300 {
        assert(this.isV9300)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'e264f3acf17bae2089248c1b5be4b79c3766ff552e8565a925e0bceaa16c973b'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9320(): TechnicalCommitteeProposalOfStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9340(): boolean {
        return this.getTypeHash() === 'bac834a064b49e90d7838a7a187b8909126f18547277b5d8053bc5274c87c1c7'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9340(): TechnicalCommitteeProposalOfStorageV9340 {
        assert(this.isV9340)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === '325aefbc233caff71e364b31bec3a78cdea40e407dacdb91f8743a0cd5529b7d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9350(): TechnicalCommitteeProposalOfStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '02ea96d1290feb9231e11e833e8eb92c5f4c7bf8bc9033921415b61ac5e1e4b5'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9370(): TechnicalCommitteeProposalOfStorageV9370 {
        assert(this.isV9370)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV9381(): boolean {
        return this.getTypeHash() === 'ee93cb7fd8840a07d97e1ae677ebb2b5785cefc002cf463089a970a4ada757f3'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV9381(): TechnicalCommitteeProposalOfStorageV9381 {
        assert(this.isV9381)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.Call | undefined)>
    getAll(): Promise<v9111.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9122 {
    get(key: Uint8Array): Promise<(v9122.Call | undefined)>
    getAll(): Promise<v9122.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9122.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9122.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9130 {
    get(key: Uint8Array): Promise<(v9130.Call | undefined)>
    getAll(): Promise<v9130.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9130.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9130.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.Call | undefined)>
    getAll(): Promise<v9160.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9170 {
    get(key: Uint8Array): Promise<(v9170.Call | undefined)>
    getAll(): Promise<v9170.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9170.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9170.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9180 {
    get(key: Uint8Array): Promise<(v9180.Call | undefined)>
    getAll(): Promise<v9180.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9180.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9180.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9190 {
    get(key: Uint8Array): Promise<(v9190.Call | undefined)>
    getAll(): Promise<v9190.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9190.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9190.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9220 {
    get(key: Uint8Array): Promise<(v9220.Call | undefined)>
    getAll(): Promise<v9220.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9220.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9220.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9230 {
    get(key: Uint8Array): Promise<(v9230.Call | undefined)>
    getAll(): Promise<v9230.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9230.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9230.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9250 {
    get(key: Uint8Array): Promise<(v9250.Call | undefined)>
    getAll(): Promise<v9250.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9250.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9250.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9271 {
    get(key: Uint8Array): Promise<(v9271.Call | undefined)>
    getAll(): Promise<v9271.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9271.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9271.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9291 {
    get(key: Uint8Array): Promise<(v9291.Call | undefined)>
    getAll(): Promise<v9291.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9291.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9291.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9300 {
    get(key: Uint8Array): Promise<(v9300.Call | undefined)>
    getAll(): Promise<v9300.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9300.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9300.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.Call | undefined)>
    getAll(): Promise<v9320.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9340 {
    get(key: Uint8Array): Promise<(v9340.Call | undefined)>
    getAll(): Promise<v9340.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9340.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9340.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9350 {
    get(key: Uint8Array): Promise<(v9350.Call | undefined)>
    getAll(): Promise<v9350.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9350.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9350.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9370 {
    get(key: Uint8Array): Promise<(v9370.Call | undefined)>
    getAll(): Promise<v9370.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9370.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9370.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV9381 {
    get(key: Uint8Array): Promise<(v9381.Call | undefined)>
    getAll(): Promise<v9381.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v9381.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9381.Call][]>
}

export class TipsReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV9111(): TipsReasonsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TipsReasonsStorageV9111 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TipsTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tips'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV9111(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV9111(): TipsTipsStorageV9111 {
        assert(this.isV9111)
        return this as any
    }
}

/**
 *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TipsTipsStorageV9111 {
    get(key: Uint8Array): Promise<(v9111.OpenTip | undefined)>
    getAll(): Promise<v9111.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v9111.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9111.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9111.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9111.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9111.OpenTip][]>
}

export class TreasuryBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === 'e276510ea57efb7a40938452ef5d335bafe4cc416f094226131c0321c9bb6599'
    }

    /**
     *  Bounties that have been made.
     */
    get asV2025(): TreasuryBountiesStorageV2025 {
        assert(this.isV2025)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface TreasuryBountiesStorageV2025 {
    get(key: number): Promise<(v2025.Bounty | undefined)>
    getAll(): Promise<v2025.Bounty[]>
    getMany(keys: number[]): Promise<(v2025.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v2025.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: v2025.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v2025.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v2025.Bounty][]>
}

export class TreasuryBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isV2025(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asV2025(): TreasuryBountyDescriptionsStorageV2025 {
        assert(this.isV2025)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface TreasuryBountyDescriptionsStorageV2025 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1020(): TreasuryProposalsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1020 {
    get(key: number): Promise<(v1020.TreasuryProposal | undefined)>
    getAll(): Promise<v1020.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v1020.TreasuryProposal | undefined)[]>
}

export class TreasuryReasonsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Reasons'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  Simple preimage lookup from the reason's hash to the original data. Again, has an
     *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
     */
    get asV1038(): TreasuryReasonsStorageV1038 {
        assert(this.isV1038)
        return this as any
    }
}

/**
 *  Simple preimage lookup from the reason's hash to the original data. Again, has an
 *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
 */
export interface TreasuryReasonsStorageV1038 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class TreasuryTipsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Tips'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV1038(): boolean {
        return this.getTypeHash() === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV1038(): TreasuryTipsStorageV1038 {
        assert(this.isV1038)
        return this as any
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get isV2013(): boolean {
        return this.getTypeHash() === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
    }

    /**
     *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
     *  This has the insecure enumerable hash function since the key itself is already
     *  guaranteed to be a secure hash.
     */
    get asV2013(): TreasuryTipsStorageV2013 {
        assert(this.isV2013)
        return this as any
    }
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV1038 {
    get(key: Uint8Array): Promise<(v1038.OpenTip | undefined)>
    getAll(): Promise<v1038.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v1038.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1038.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1038.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1038.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1038.OpenTip][]>
}

/**
 *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
 *  This has the insecure enumerable hash function since the key itself is already
 *  guaranteed to be a secure hash.
 */
export interface TreasuryTipsStorageV2013 {
    get(key: Uint8Array): Promise<(v2013.OpenTip | undefined)>
    getAll(): Promise<v2013.OpenTip[]>
    getMany(keys: Uint8Array[]): Promise<(v2013.OpenTip | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v2013.OpenTip][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v2013.OpenTip][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v2013.OpenTip][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v2013.OpenTip][]>
}
