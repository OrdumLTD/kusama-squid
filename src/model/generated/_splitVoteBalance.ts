import assert from "assert"
import * as marshal from "./marshal"

export class SplitVoteBalance {
    public readonly isTypeOf = 'SplitVoteBalance'
    private _aye!: bigint | undefined | null
    private _nay!: bigint | undefined | null
    private _abstain!: bigint | undefined | null

    constructor(props?: Partial<Omit<SplitVoteBalance, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._aye = json.aye == null ? undefined : marshal.bigint.fromJSON(json.aye)
            this._nay = json.nay == null ? undefined : marshal.bigint.fromJSON(json.nay)
            this._abstain = json.abstain == null ? undefined : marshal.bigint.fromJSON(json.abstain)
        }
    }

    get aye(): bigint | undefined | null {
        return this._aye
    }

    set aye(value: bigint | undefined | null) {
        this._aye = value
    }

    get nay(): bigint | undefined | null {
        return this._nay
    }

    set nay(value: bigint | undefined | null) {
        this._nay = value
    }

    get abstain(): bigint | undefined | null {
        return this._abstain
    }

    set abstain(value: bigint | undefined | null) {
        this._abstain = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            aye: this.aye == null ? undefined : marshal.bigint.toJSON(this.aye),
            nay: this.nay == null ? undefined : marshal.bigint.toJSON(this.nay),
            abstain: this.abstain == null ? undefined : marshal.bigint.toJSON(this.abstain),
        }
    }
}
