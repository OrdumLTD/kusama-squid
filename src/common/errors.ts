import { ProposalType } from '../model'

export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}

export function MissingProposalRecordWarn(proposal: ProposalType | string, hashOrIndex: string | number) {
    return `Missing record for ${proposal} ${hashOrIndex}`
}

export function StorageNotExistsWarn(proposal: ProposalType | string, hashOrIndex: string | number) {
    return `Storage doesn't exist for ${proposal} ${hashOrIndex}`
}

export function TooManyOpenDelegations(block: number, track: number, wallet?: string) {
    return `Each wallet can only have one delegation at a time. 2 or more delegations are active for wallet ${wallet}, track ${track} at block ${block}`
}

export function NoDelegationFound(block: number, track: number, wallet?: string) {
    return `No active delegation found for wallet ${wallet}, track ${track} at block ${block}`
}

export function TooManyOpenVotes(block: number, index: number,  wallet?: string) {
    return `Two or more votes are active for referendum ${index} and wallet ${wallet} at block ${block}`
}

export function NoOpenVoteFound(block: number, index: number, wallet?: string) {
    return `No active vote found for referendum ${index} and wallet ${wallet} at block ${block}`
}

export function NoReferendaFoundForExecution(proposal: ProposalType, block: number){
    return `No Confirmed ${proposal} found at block ${block} that is scheduled for execution`
}