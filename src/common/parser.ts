import { ArrayType, SequenceType, Ti, TupleType, TypeKind, Primitive, OptionType } from '@subsquid/scale-codec'
import {
    CodecBytesArrayType,
    CodecStructType,
    CodecType,
    CodecVariantType,
} from '@subsquid/scale-codec/src/types-codec'
import { toHex } from '@subsquid/substrate-processor'
import assert from 'assert'

export class Parser {
    private types: CodecType[]

    constructor(types: CodecType[]) {
        this.types = types
    }

    parse(type: Ti, val: unknown): unknown {
        const def = this.types[type]
        switch (def.kind) {
            case TypeKind.Primitive:
            case TypeKind.Compact:
                return this.parsePrimitive(val)
            case TypeKind.BitSequence:
                return this.parseBitSequence(val)
            case TypeKind.Array:
                return this.parseArray(def, val)
            case TypeKind.Sequence:
                return this.parseSequence(def, val)
            case TypeKind.Tuple:
                return this.parseTuple(def, val)
            case TypeKind.Struct:
                return this.parseStruct(def, val)
            case TypeKind.Variant:
                return this.parseVariant(def, val)
            case TypeKind.BytesArray:
                return this.parseBytesArray(def, val)
            case TypeKind.Bytes:
                return this.parseBytes(val)
            case TypeKind.BooleanOption:
                return this.parseBooleanOption(val)
            case TypeKind.Option:
                return this.parseOption(def, val)
            default:
                return undefined
        }
    }

    private parseArray(def: ArrayType, val: unknown): unknown[] {
        assert(Array.isArray(val) && val.length == def.len)

        const result: unknown[] = []
        for (let i = 0; i < val.length; i++) {
            this.parse(def.type, val[i])
        }

        return result
    }

    private parseSequence(def: SequenceType, val: unknown): unknown[] {
        assert(Array.isArray(val))

        const result: unknown[] = []
        for (let i = 0; i < val.length; i++) {
            result.push(this.parse(def.type, val[i]))
        }

        return result
    }

    private parseTuple(def: TupleType, val: unknown): unknown[] | undefined {
        if (def.tuple.length == 0) {
            assert(val == null)
            return undefined
        }

        assert(Array.isArray(val) && def.tuple.length == val.length)

        const result: unknown[] = []
        for (let i = 0; i < val.length; i++) {
            result.push(this.parse(def.tuple[i], val[i]))
        }

        return result
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private parseStruct(def: CodecStructType, val: any): Record<string, unknown> {
        const result: Record<string, unknown> = {}
        for (let i = 0; i < def.fields.length; i++) {
            const f = def.fields[i]
            result[f.name] = this.parse(f.type, val[f.name])
        }

        return result
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private parseVariant(def: CodecVariantType, val: any): unknown {
        assert(typeof val?.__kind == 'string', 'not a variant type value')
        const variant = def.variantsByName[val.__kind]
        if (variant == null) throw new Error(`Unknown variant: ${val.__kind}`)
        switch (variant.kind) {
            case 'value':
                return this.parse(variant.type, val.value)
            case 'tuple':
                return this.parseTuple(variant.def, val.value)
            case 'struct':
                return this.parseStruct(variant.def, val)
            default:
                return undefined
        }
    }

    private parseOption(def: OptionType, val: unknown): unknown {
        if (val === undefined) {
            return undefined
        } else {
            return this.parse(def.type, val)
        }
    }

    private parseBooleanOption(val: unknown): boolean | undefined {
        if (val == null) {
            return undefined
        } else {
            assert(typeof val == 'boolean')
            return val
        }
    }

    private parseBitSequence(bits: unknown): string {
        assert(bits instanceof Uint8Array)
        return toHex(bits)
    }

    private parseBytesArray(def: CodecBytesArrayType, val: unknown): string {
        assert(val instanceof Uint8Array && val.length == def.len)
        return toHex(val)
    }

    private parseBytes(val: unknown): string {
        assert(val instanceof Uint8Array)
        return toHex(val)
    }

    private parsePrimitive(val: unknown): unknown {
        return val
    }
}
