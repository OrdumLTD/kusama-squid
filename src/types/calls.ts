import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v1020 from './v1020'
import * as v1055 from './v1055'
import * as v9111 from './v9111'
import * as v9291 from './v9291'
import * as v9320 from './v9320'
import * as v9340 from './v9340'

export class BountiesAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV2028(): boolean {
        return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV2028(): {bountyId: number} {
        assert(this.isV2028)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV2028(): boolean {
        return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV2028(): {bountyId: number} {
        assert(this.isV2028)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Accept the curator role for the child-bounty.
     * 
     * The dispatch origin for this call must be the curator of this
     * child-bounty.
     * 
     * A deposit will be reserved from the curator and refund upon
     * successful payout or cancellation.
     * 
     * Fee for curator is deducted from curator fee of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "CuratorProposed" state, for processing the
     * call. And state of child-bounty is moved to "Active" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ChildBounties.accept_curator') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
    }

    /**
     * Accept the curator role for the child-bounty.
     * 
     * The dispatch origin for this call must be the curator of this
     * child-bounty.
     * 
     * A deposit will be reserved from the curator and refund upon
     * successful payout or cancellation.
     * 
     * Fee for curator is deducted from curator fee of parent bounty.
     * 
     * Parent bounty must be in active state, for this child-bounty call to
     * work.
     * 
     * Child-bounty must be in "CuratorProposed" state, for processing the
     * call. And state of child-bounty is moved to "Active" on successful
     * call completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get asV9190(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ChildBountiesUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ChildBounties.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unassign curator from a child-bounty.
     * 
     * The dispatch origin for this call can be either `RejectOrigin`, or
     * the curator of the parent bounty, or any signed origin.
     * 
     * For the origin other than T::RejectOrigin and the child-bounty
     * curator, parent-bounty must be in active state, for this call to
     * work. We allow child-bounty curator and T::RejectOrigin to execute
     * this call irrespective of the parent-bounty state.
     * 
     * If this function is called by the `RejectOrigin` or the
     * parent-bounty curator, we assume that the child-bounty curator is
     * malicious or inactive. As a result, child-bounty curator deposit is
     * slashed.
     * 
     * If the origin is the child-bounty curator, we take this as a sign
     * that they are unable to do their job, and are willingly giving up.
     * We could slash the deposit, but for now we allow them to unreserve
     * their deposit and exit without issue. (We may want to change this if
     * it is abused.)
     * 
     * Finally, the origin can be anyone iff the child-bounty curator is
     * "inactive". Expiry update due of parent bounty is used to estimate
     * inactive state of child-bounty curator.
     * 
     * This allows anyone in the community to call out that a child-bounty
     * curator is not doing their due diligence, and we should pick a new
     * one. In this case the child-bounty curator deposit is slashed.
     * 
     * State of child-bounty is moved to Added state on successful call
     * completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get isV9190(): boolean {
        return this._chain.getCallHash('ChildBounties.unassign_curator') === '3dca7b9fd6bc92337517a800e3ddd90a757f5b4e8ccfd63c20fde7d675eed25e'
    }

    /**
     * Unassign curator from a child-bounty.
     * 
     * The dispatch origin for this call can be either `RejectOrigin`, or
     * the curator of the parent bounty, or any signed origin.
     * 
     * For the origin other than T::RejectOrigin and the child-bounty
     * curator, parent-bounty must be in active state, for this call to
     * work. We allow child-bounty curator and T::RejectOrigin to execute
     * this call irrespective of the parent-bounty state.
     * 
     * If this function is called by the `RejectOrigin` or the
     * parent-bounty curator, we assume that the child-bounty curator is
     * malicious or inactive. As a result, child-bounty curator deposit is
     * slashed.
     * 
     * If the origin is the child-bounty curator, we take this as a sign
     * that they are unable to do their job, and are willingly giving up.
     * We could slash the deposit, but for now we allow them to unreserve
     * their deposit and exit without issue. (We may want to change this if
     * it is abused.)
     * 
     * Finally, the origin can be anyone iff the child-bounty curator is
     * "inactive". Expiry update due of parent bounty is used to estimate
     * inactive state of child-bounty curator.
     * 
     * This allows anyone in the community to call out that a child-bounty
     * curator is not doing their due diligence, and we should pick a new
     * one. In this case the child-bounty curator deposit is slashed.
     * 
     * State of child-bounty is moved to Added state on successful call
     * completion.
     * 
     * - `parent_bounty_id`: Index of parent bounty.
     * - `child_bounty_id`: Index of child bounty.
     */
    get asV9190(): {parentBountyId: number, childBountyId: number} {
        assert(this.isV9190)
        return this._chain.decodeCall(this.call)
    }
}

export class ConvictionVotingDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ConvictionVoting.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account for a
     * particular class of polls.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
     *   to this function are required.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of polls the voter delegating to has
     *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('ConvictionVoting.delegate') === '563d5eab734fe469b3fd1a773588895c1e243f7cab2958e6049514318be32953'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account for a
     * particular class of polls.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
     *   to this function are required.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of polls the voter delegating to has
     *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
     */
    get asV9320(): {class: number, to: v9320.MultiAddress, conviction: v9320.Conviction, balance: bigint} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ConvictionVotingRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ConvictionVoting.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a poll.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the poll was cancelled, because the voter lost the poll or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for poll
     *   `index`.
     * - `index`: The index of poll of the vote to be removed.
     * - `class`: The class of the poll.
     * 
     * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('ConvictionVoting.remove_other_vote') === '852f4a0a1605e3f516a2a6871f4fb69a9ef09ca1678667ccfea4b04852621c76'
    }

    /**
     * Remove a vote for a poll.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the poll was cancelled, because the voter lost the poll or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for poll
     *   `index`.
     * - `index`: The index of poll of the vote to be removed.
     * - `class`: The class of the poll.
     * 
     * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV9320(): {target: v9320.MultiAddress, class: number, index: number} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ConvictionVotingRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ConvictionVoting.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a poll.
     * 
     * If:
     * - the poll was cancelled, or
     * - the poll is ongoing, or
     * - the poll has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the poll has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for poll `index`.
     * 
     * - `index`: The index of poll of the vote to be removed.
     * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
     *   which have finished or are cancelled, this must be `Some`.
     * 
     * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('ConvictionVoting.remove_vote') === 'be8a5ba82f77b6bda5e0784b678fdfe0fe9d28837d87406cb5d907269bb45b25'
    }

    /**
     * Remove a vote for a poll.
     * 
     * If:
     * - the poll was cancelled, or
     * - the poll is ongoing, or
     * - the poll has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the poll has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for poll `index`.
     * 
     * - `index`: The index of poll of the vote to be removed.
     * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
     *   which have finished or are cancelled, this must be `Some`.
     * 
     * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV9320(): {class: (number | undefined), index: number} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ConvictionVotingUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ConvictionVoting.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Undelegate the voting power of the sending account for a particular class of polls.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * - `class`: The class of polls to remove the delegation from.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of polls the voter delegating to has
     *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('ConvictionVoting.undelegate') === '55363f75c61dc45265060eec3a1e578e86c93c9059f3f1b3d63fc1f2da6e7ea5'
    }

    /**
     * Undelegate the voting power of the sending account for a particular class of polls.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * - `class`: The class of polls to remove the delegation from.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of polls the voter delegating to has
     *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
     */
    get asV9320(): {class: number} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ConvictionVotingVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ConvictionVoting.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `poll_index`: The index of the poll to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of polls the voter has voted on.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('ConvictionVoting.vote') === 'd10ef1b298a681ecd2445c4d8c083dbabfcf6f60a2f8103238e6ab7895b95b86'
    }

    /**
     * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `poll_index`: The index of the poll to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of polls the voter has voted on.
     */
    get asV9320(): {pollIndex: number, vote: v9320.AccountVote} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `poll_index`: The index of the poll to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of polls the voter has voted on.
     */
    get isV9340(): boolean {
        return this._chain.getCallHash('ConvictionVoting.vote') === 'c659a6e0d84861cd97f11d84780117a5b61201e70e1e5533a740761dc9489558'
    }

    /**
     * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `poll_index`: The index of the poll to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of polls the voter has voted on.
     */
    get asV9340(): {pollIndex: number, vote: v9340.Type_144} {
        assert(this.isV9340)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Delegate vote.
     * 
     *  # <weight>
     *  - One extra DB entry.
     *  # </weight>
     */
    get isV1020(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === 'd9417a632105aca765ccf10b89de97fe97492311af7c953010fed5edc4ea50ec'
    }

    /**
     *  Delegate vote.
     * 
     *  # <weight>
     *  - One extra DB entry.
     *  # </weight>
     */
    get asV1020(): {to: Uint8Array, conviction: v1020.Conviction} {
        assert(this.isV1020)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Delegate the voting power (with some given conviction) of the sending account.
     * 
     *  The balance delegated is locked for as long as it's delegated, and thereafter for the
     *  time appropriate for the conviction's lock period.
     * 
     *  The dispatch origin of this call must be _Signed_, and the signing account must either:
     *    - be delegating already; or
     *    - have no voting activity (if there is, then it will need to be removed/consolidated
     *      through `reap_vote` or `unvote`).
     * 
     *  - `to`: The account whose voting the `target` account's voting power will follow.
     *  - `conviction`: The conviction that will be attached to the delegated votes. When the
     *    account is undelegated, the funds will be locked for the corresponding period.
     *  - `balance`: The amount of the account's balance to be used in delegating. This must
     *    not be more than the account's current balance.
     * 
     *  Emits `Delegated`.
     * 
     *  # <weight>
     *  # </weight>
     */
    get isV1055(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
    }

    /**
     *  Delegate the voting power (with some given conviction) of the sending account.
     * 
     *  The balance delegated is locked for as long as it's delegated, and thereafter for the
     *  time appropriate for the conviction's lock period.
     * 
     *  The dispatch origin of this call must be _Signed_, and the signing account must either:
     *    - be delegating already; or
     *    - have no voting activity (if there is, then it will need to be removed/consolidated
     *      through `reap_vote` or `unvote`).
     * 
     *  - `to`: The account whose voting the `target` account's voting power will follow.
     *  - `conviction`: The conviction that will be attached to the delegated votes. When the
     *    account is undelegated, the funds will be locked for the corresponding period.
     *  - `balance`: The amount of the account's balance to be used in delegating. This must
     *    not be more than the account's current balance.
     * 
     *  Emits `Delegated`.
     * 
     *  # <weight>
     *  # </weight>
     */
    get asV1055(): {to: Uint8Array, conviction: v1055.Conviction, balance: bigint} {
        assert(this.isV1055)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isV9291(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '789db36a1c43e1ffdad52288f8573a492f529890632f51821e7bd1d74ba6cffc'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asV9291(): {to: v9291.MultiAddress, conviction: v9291.Conviction, balance: bigint} {
        assert(this.isV9291)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If the `target` is equal to the signer, then this function is exactly equivalent to
     *  `remove_vote`. If not equal to the signer, then the vote must have expired,
     *  either because the referendum was cancelled, because the voter lost the referendum or
     *  because the conviction period is over.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account of the vote to be removed; this account must have voted for
     *    referendum `index`.
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  # <weight>
     *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *  # </weight>
     */
    get isV1055(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If the `target` is equal to the signer, then this function is exactly equivalent to
     *  `remove_vote`. If not equal to the signer, then the vote must have expired,
     *  either because the referendum was cancelled, because the voter lost the referendum or
     *  because the conviction period is over.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account of the vote to be removed; this account must have voted for
     *    referendum `index`.
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  # <weight>
     *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *  # </weight>
     */
    get asV1055(): {target: Uint8Array, index: number} {
        assert(this.isV1055)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isV9291(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '43d317508cc3ba04dcadb411eb6499f25532d64ab5a169b27410116c72f40a26'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asV9291(): {target: v9291.MultiAddress, index: number} {
        assert(this.isV9291)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If:
     *  - the referendum was cancelled, or
     *  - the referendum is ongoing, or
     *  - the referendum has ended such that
     *    - the vote of the account was in opposition to the result; or
     *    - there was no conviction to the account's vote; or
     *    - the account made a split vote
     *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
     *  funds being available.
     * 
     *  If, however, the referendum has ended and:
     *  - it finished corresponding to the vote of the account, and
     *  - the account made a standard vote with conviction, and
     *  - the lock period of the conviction is not over
     *  ...then the lock will be aggregated into the overall account's lock, which may involve
     *  *overlocking* (where the two locks are combined into a single lock that is the maximum
     *  of both the amount locked and the time is it locked for).
     * 
     *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
     *  registered for referendum `index`.
     * 
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  # <weight>
     *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *  # </weight>
     */
    get isV1055(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     *  Remove a vote for a referendum.
     * 
     *  If:
     *  - the referendum was cancelled, or
     *  - the referendum is ongoing, or
     *  - the referendum has ended such that
     *    - the vote of the account was in opposition to the result; or
     *    - there was no conviction to the account's vote; or
     *    - the account made a split vote
     *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
     *  funds being available.
     * 
     *  If, however, the referendum has ended and:
     *  - it finished corresponding to the vote of the account, and
     *  - the account made a standard vote with conviction, and
     *  - the lock period of the conviction is not over
     *  ...then the lock will be aggregated into the overall account's lock, which may involve
     *  *overlocking* (where the two locks are combined into a single lock that is the maximum
     *  of both the amount locked and the time is it locked for).
     * 
     *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
     *  registered for referendum `index`.
     * 
     *  - `index`: The index of referendum of the vote to be removed.
     * 
     *  # <weight>
     *  - `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *  # </weight>
     */
    get asV1055(): {index: number} {
        assert(this.isV1055)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Undelegate vote.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get isV1020(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     *  Undelegate vote.
     * 
     *  # <weight>
     *  - O(1).
     *  # </weight>
     */
    get asV1020(): null {
        assert(this.isV1020)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get isV1020(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3a01fd8d5e95145a311b99cf21decce5be8578650f311f3a6091395407f5efe9'
    }

    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  # <weight>
     *  - O(1).
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get asV1020(): {refIndex: number, vote: number} {
        assert(this.isV1020)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `ref_index`: The index of the referendum to vote for.
     *  - `vote`: The vote configuration.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get isV1055(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
    }

    /**
     *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     *  otherwise it is a vote to keep the status quo.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `ref_index`: The index of the referendum to vote for.
     *  - `vote`: The vote configuration.
     * 
     *  # <weight>
     *  - `O(1)`.
     *  - One DB change, one DB entry.
     *  # </weight>
     */
    get asV1055(): {refIndex: number, vote: v1055.AccountVote} {
        assert(this.isV1055)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get isV9111(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter has voted on.
     */
    get asV9111(): {refIndex: number, vote: v9111.AccountVote} {
        assert(this.isV9111)
        return this._chain.decodeCall(this.call)
    }
}

export class FellowshipCollectiveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FellowshipCollective.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * - `origin`: Must be `Signed` by a member account.
     * - `poll`: Index of a poll which is ongoing.
     * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
     * 
     * Transaction fees are be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * 
     * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('FellowshipCollective.vote') === '3b92ae59b712230cb36e2d4be01eaefb25ea0777001bbd698d8598221faca7d3'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * - `origin`: Must be `Signed` by a member account.
     * - `poll`: Index of a poll which is ongoing.
     * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
     * 
     * Transaction fees are be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * 
     * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
     */
    get asV9320(): {poll: number, aye: boolean} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class TipsTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Tips.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get isV2028(): boolean {
        return this._chain.getCallHash('Tips.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get asV2028(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV2028)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV2025(): boolean {
        return this._chain.getCallHash('Treasury.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Accept the curator role for a bounty.
     *  A deposit will be reserved from curator and refund upon successful payout.
     * 
     *  May only be called from the curator.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV2025(): {bountyId: number} {
        assert(this.isV2025)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryTipCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.tip')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One storage mutation (codec `O(T)`), one storage read `O(1)`.
     *  - Up to one event.
     *  # </weight>
     */
    get isV1038(): boolean {
        return this._chain.getCallHash('Treasury.tip') === '2111563b3ac5541651b53f665a96e00e00bd7257eee2b159ec7f437d63c69299'
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - `O(T)`
     *  - One storage mutation (codec `O(T)`), one storage read `O(1)`.
     *  - Up to one event.
     *  # </weight>
     */
    get asV1038(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV1038)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get isV2025(): boolean {
        return this._chain.getCallHash('Treasury.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
    }

    /**
     *  Declare a tip value for an already-open tip.
     * 
     *  The dispatch origin for this call must be _Signed_ and the signing account must be a
     *  member of the `Tippers` set.
     * 
     *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
     *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
     *    account ID.
     *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
     *    value of active tippers will be given to the `who`.
     * 
     *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
     *  has started.
     * 
     *  # <weight>
     *  - Complexity: `O(T)` where `T` is the number of tippers.
     *    decoding `Tipper` vec of length `T`, insert tip and check closing,
     *    `T` is charged as upper bound given by `ContainsLengthBound`.
     *    The actual cost depends on the implementation of `T::Tippers`.
     * 
     *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
     *    is weighted as if almost full i.e of length `T-1`.
     *  - DbReads: `Tippers`, `Tips`
     *  - DbWrites: `Tips`
     *  # </weight>
     */
    get asV2025(): {hash: Uint8Array, tipValue: bigint} {
        assert(this.isV2025)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV2025(): boolean {
        return this._chain.getCallHash('Treasury.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     *  Unassign curator from a bounty.
     * 
     *  This function can only be called by the `RejectOrigin` a signed origin.
     * 
     *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
     *  or inactive. As a result, we will slash the curator when possible.
     * 
     *  If the origin is the curator, we take this as a sign they are unable to do their job and
     *  they willingly give up. We could slash them, but for now we allow them to recover their
     *  deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     *  anyone in the community to call out that a curator is not doing their due diligence, and
     *  we should pick a new curator. In this case the curator should also be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV2025(): {bountyId: number} {
        assert(this.isV2025)
        return this._chain.decodeCall(this.call)
    }
}
