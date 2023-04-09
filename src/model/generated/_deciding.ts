import assert from "assert"
import * as marshal from "./marshal"

export class Deciding {
    private _since!: number | undefined | null
    private _confirming!: number | undefined | null

    constructor(props?: Partial<Omit<Deciding, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._since = json.since == null ? undefined : marshal.int.fromJSON(json.since)
            this._confirming = json.confirming == null ? undefined : marshal.int.fromJSON(json.confirming)
        }
    }

    get since(): number | undefined | null {
        return this._since
    }

    set since(value: number | undefined | null) {
        this._since = value
    }

    get confirming(): number | undefined | null {
        return this._confirming
    }

    set confirming(value: number | undefined | null) {
        this._confirming = value
    }

    toJSON(): object {
        return {
            since: this.since,
            confirming: this.confirming,
        }
    }
}
