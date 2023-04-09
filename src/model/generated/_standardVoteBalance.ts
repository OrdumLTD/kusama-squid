import assert from "assert"
import * as marshal from "./marshal"

export class StandardVoteBalance {
    public readonly isTypeOf = 'StandardVoteBalance'
    private _value!: bigint | undefined | null

    constructor(props?: Partial<Omit<StandardVoteBalance, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._value = json.value == null ? undefined : marshal.bigint.fromJSON(json.value)
        }
    }

    get value(): bigint | undefined | null {
        return this._value
    }

    set value(value: bigint | undefined | null) {
        this._value = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            value: this.value == null ? undefined : marshal.bigint.toJSON(this.value),
        }
    }
}
