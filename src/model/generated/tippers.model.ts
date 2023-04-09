import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Proposal} from "./proposal.model"

@Entity_()
export class Tippers {
    constructor(props?: Partial<Tippers>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    hash!: string

    @Column_("text", {nullable: true})
    tipper!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    value!: bigint | undefined | null

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal

    @Index_()
    @Column_("int4", {nullable: false})
    createdAtBlock!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
