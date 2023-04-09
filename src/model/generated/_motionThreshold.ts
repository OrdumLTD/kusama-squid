import assert from "assert"
import * as marshal from "./marshal"

export class MotionThreshold {
    public readonly isTypeOf = 'MotionThreshold'
    private _value!: number

    constructor(props?: Partial<Omit<MotionThreshold, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._value = marshal.int.fromJSON(json.value)
        }
    }

    get value(): number {
        assert(this._value != null, 'uninitialized access')
        return this._value
    }

    set value(value: number) {
        this._value = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            value: this.value,
        }
    }
}
