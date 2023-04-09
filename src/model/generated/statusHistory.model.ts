import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Proposal} from "./proposal.model"
import {ProposalStatus} from "./_proposalStatus"

@Entity_()
export class StatusHistory {
    constructor(props?: Partial<StatusHistory>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Proposal, {nullable: true})
    proposal!: Proposal

    @Column_("varchar", {length: 21, nullable: false})
    status!: ProposalStatus

    @Column_("int4", {nullable: false})
    block!: number

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date
}
