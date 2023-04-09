import assert from "assert"
import * as marshal from "./marshal"

export class ProposedCall {
    private _section!: string
    private _method!: string
    private _args!: unknown | undefined | null
    private _description!: string

    constructor(props?: Partial<Omit<ProposedCall, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._section = marshal.string.fromJSON(json.section)
            this._method = marshal.string.fromJSON(json.method)
            this._args = json.args
            this._description = marshal.string.fromJSON(json.description)
        }
    }

    get section(): string {
        assert(this._section != null, 'uninitialized access')
        return this._section
    }

    set section(value: string) {
        this._section = value
    }

    get method(): string {
        assert(this._method != null, 'uninitialized access')
        return this._method
    }

    set method(value: string) {
        this._method = value
    }

    get args(): unknown | undefined | null {
        return this._args
    }

    set args(value: unknown | undefined | null) {
        this._args = value
    }

    get description(): string {
        assert(this._description != null, 'uninitialized access')
        return this._description
    }

    set description(value: string) {
        this._description = value
    }

    toJSON(): object {
        return {
            section: this.section,
            method: this.method,
            args: this.args,
            description: this.description,
        }
    }
}
