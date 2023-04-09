import assert from "assert"
import * as marshal from "./marshal"

export class SubmissionDeposit {
    private _who!: string | undefined | null
    private _amount!: bigint | undefined | null

    constructor(props?: Partial<Omit<SubmissionDeposit, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._who = json.who == null ? undefined : marshal.string.fromJSON(json.who)
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
        }
    }

    get who(): string | undefined | null {
        return this._who
    }

    set who(value: string | undefined | null) {
        this._who = value
    }

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
    }

    toJSON(): object {
        return {
            who: this.who,
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
        }
    }
}
