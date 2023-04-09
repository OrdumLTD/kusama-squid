import {StandardVoteBalance} from "./_standardVoteBalance"
import {SplitVoteBalance} from "./_splitVoteBalance"

export type VoteBalance = StandardVoteBalance | SplitVoteBalance

export function fromJsonVoteBalance(json: any): VoteBalance {
    switch(json?.isTypeOf) {
        case 'StandardVoteBalance': return new StandardVoteBalance(undefined, json)
        case 'SplitVoteBalance': return new SplitVoteBalance(undefined, json)
        default: throw new TypeError('Unknown json object passed as VoteBalance')
    }
}
