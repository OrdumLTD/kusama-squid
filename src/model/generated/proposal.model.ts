import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {ProposalType} from "./_proposalType"
import {Threshold, fromJsonThreshold} from "./_threshold"
import {ProposedCall} from "./_proposedCall"
import {Vote} from "./vote.model"
import {ConvictionVote} from "./convictionVote.model"
import {Preimage} from "./preimage.model"
import {ProposalStatus} from "./_proposalStatus"
import {StatusHistory} from "./statusHistory.model"
import {SubmissionDeposit} from "./_submissionDeposit"
import {DecisionDeposit} from "./_decisionDeposit"
import {Deciding} from "./_deciding"
import {Tally} from "./_tally"
import {ProposalGroup} from "./proposalGroup.model"

@Entity_()
export class Proposal {
    constructor(props?: Partial<Proposal>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("varchar", {length: 21, nullable: false})
    type!: ProposalType

    @Index_()
    @Column_("text", {nullable: true})
    hash!: string | undefined | null

    @Index_()
    @Column_("int4", {nullable: true})
    index!: number | undefined | null

    @Column_("text", {nullable: true})
    proposer!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    deposit!: bigint | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonThreshold(obj)}, nullable: true})
    threshold!: Threshold | undefined | null

    @Column_("int4", {nullable: true})
    end!: number | undefined | null

    @Column_("int4", {nullable: true})
    delay!: number | undefined | null

    @Column_("text", {nullable: true})
    curator!: string | undefined | null

    @Column_("text", {nullable: true})
    payee!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    reward!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fee!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    bond!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    curatorDeposit!: bigint | undefined | null

    @Column_("text", {nullable: true})
    description!: string | undefined | null

    @Column_("int4", {nullable: true})
    parentBountyIndex!: number | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new ProposedCall(undefined, obj)}, nullable: true})
    proposalArguments!: ProposedCall | undefined | null

    @Column_("text", {nullable: true})
    proposalArgumentHash!: string | undefined | null

    @OneToMany_(() => Vote, e => e.proposal)
    voting!: Vote[]

    @OneToMany_(() => ConvictionVote, e => e.proposal)
    convictionVoting!: ConvictionVote[]

    @Index_()
    @ManyToOne_(() => Preimage, {nullable: true})
    preimage!: Preimage | undefined | null

    @Column_("varchar", {length: 21, nullable: false})
    status!: ProposalStatus

    @OneToMany_(() => StatusHistory, e => e.proposal)
    statusHistory!: StatusHistory[]

    @Column_("int4", {nullable: true})
    trackNumber!: number | undefined | null

    @Column_("text", {nullable: true})
    origin!: string | undefined | null

    @Column_("int4", {nullable: true})
    enactmentAtBlock!: number | undefined | null

    @Column_("int4", {nullable: true})
    enactmentAfterBlock!: number | undefined | null

    @Column_("int4", {nullable: true})
    submittedAtBlock!: number | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new SubmissionDeposit(undefined, obj)}, nullable: true})
    submissionDeposit!: SubmissionDeposit | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new DecisionDeposit(undefined, obj)}, nullable: true})
    decisionDeposit!: DecisionDeposit | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Deciding(undefined, obj)}, nullable: true})
    deciding!: Deciding | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Tally(undefined, obj)}, nullable: true})
    tally!: Tally | undefined | null

    @Column_("int4", {nullable: true})
    executeAtBlockNumber!: number | undefined | null

    @Column_("timestamp with time zone", {nullable: true})
    executedAt!: Date | undefined | null

    @Index_()
    @ManyToOne_(() => ProposalGroup, {nullable: true})
    group!: ProposalGroup | undefined | null

    @Index_()
    @Column_("int4", {nullable: false})
    createdAtBlock!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("int4", {nullable: true})
    endedAtBlock!: number | undefined | null

    @Column_("timestamp with time zone", {nullable: true})
    endedAt!: Date | undefined | null

    @Index_()
    @Column_("int4", {nullable: true})
    updatedAtBlock!: number | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: true})
    updatedAt!: Date | undefined | null
}
