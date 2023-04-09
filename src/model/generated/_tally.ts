import assert from "assert"
import * as marshal from "./marshal"

export class Tally {
    private _ayes!: bigint | undefined | null
    private _nays!: bigint | undefined | null
    private _support!: bigint | undefined | null
    private _bareAyes!: bigint | undefined | null

    constructor(props?: Partial<Omit<Tally, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._ayes = json.ayes == null ? undefined : marshal.bigint.fromJSON(json.ayes)
            this._nays = json.nays == null ? undefined : marshal.bigint.fromJSON(json.nays)
            this._support = json.support == null ? undefined : marshal.bigint.fromJSON(json.support)
            this._bareAyes = json.bareAyes == null ? undefined : marshal.bigint.fromJSON(json.bareAyes)
        }
    }

    get ayes(): bigint | undefined | null {
        return this._ayes
    }

    set ayes(value: bigint | undefined | null) {
        this._ayes = value
    }

    get nays(): bigint | undefined | null {
        return this._nays
    }

    set nays(value: bigint | undefined | null) {
        this._nays = value
    }

    get support(): bigint | undefined | null {
        return this._support
    }

    set support(value: bigint | undefined | null) {
        this._support = value
    }

    get bareAyes(): bigint | undefined | null {
        return this._bareAyes
    }

    set bareAyes(value: bigint | undefined | null) {
        this._bareAyes = value
    }

    toJSON(): object {
        return {
            ayes: this.ayes == null ? undefined : marshal.bigint.toJSON(this.ayes),
            nays: this.nays == null ? undefined : marshal.bigint.toJSON(this.nays),
            support: this.support == null ? undefined : marshal.bigint.toJSON(this.support),
            bareAyes: this.bareAyes == null ? undefined : marshal.bigint.toJSON(this.bareAyes),
        }
    }
}
