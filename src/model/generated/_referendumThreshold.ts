import assert from "assert"
import * as marshal from "./marshal"
import {ReferendumThresholdType} from "./_referendumThresholdType"

export class ReferendumThreshold {
    public readonly isTypeOf = 'ReferendumThreshold'
    private _type!: ReferendumThresholdType

    constructor(props?: Partial<Omit<ReferendumThreshold, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._type = marshal.enumFromJson(json.type, ReferendumThresholdType)
        }
    }

    get type(): ReferendumThresholdType {
        assert(this._type != null, 'uninitialized access')
        return this._type
    }

    set type(value: ReferendumThresholdType) {
        this._type = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            type: this.type,
        }
    }
}
