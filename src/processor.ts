import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as modules from './mappings'
import assert from 'assert'

//@ts-ignore ts(2589)
const processor = new SubstrateBatchProcessor()
    .setDataSource({
        chain: 'wss://kusama-rpc.polkadot.io/',
        archive: lookupArchive('kusama', { release: 'FireSquid' }),
    })
    .setBlockRange({from: 15426015})
    .addEvent('Democracy.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Tabled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Started', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Passed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.NotPassed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.Seconded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageNoted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageUsed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageInvalid', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageMissing', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Democracy.PreimageReaped', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Council.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Disapproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Closed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Council.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('TechnicalCommittee.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Disapproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Closed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('TechnicalCommittee.Executed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Treasury.Proposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.Awarded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.NewTip', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.TipClosed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.TipRetracted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.BountyProposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const) 
    .addEvent('Treasury.BountyRejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.BountyBecameActive', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.BountyAwarded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.BountyClaimed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.BountyCanceled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.BountyExtended', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Treasury.SpendApproved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)


    .addEvent('Tips.NewTip', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Tips.TipClosed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Tips.TipRetracted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Tips.TipSlashed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Bounties.BountyProposed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Bounties.BountyRejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Bounties.BountyBecameActive', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Bounties.BountyAwarded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Bounties.BountyClaimed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Bounties.BountyCanceled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Bounties.BountyExtended', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('ChildBounties.Added', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('ChildBounties.Awarded', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('ChildBounties.Claimed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('ChildBounties.Canceled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Preimage.Noted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Cleared', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Preimage.Requested', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('Referenda.Submitted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Killed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.TimedOut', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.DecisionDepositPlaced', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.DecisionStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Confirmed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.ConfirmStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.ConfirmAborted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Referenda.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)

    .addEvent('FellowshipReferenda.Submitted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Rejected', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Approved', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Killed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.TimedOut', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.DecisionDepositPlaced', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.DecisionStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Confirmed', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.ConfirmStarted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.ConfirmAborted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipReferenda.Cancelled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('FellowshipCollective.Voted', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Multisig.MultisigExecuted', { data: {  event: { args: true, extrinsic: { hash: true, } }, } } as const)


    // .addEvent('Scheduler.Scheduled', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    .addEvent('Scheduler.Dispatched', { data: { event: { args: true, extrinsic: { hash: true, } }, } } as const)
    
    .addCall('ConvictionVoting.vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.delegate', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.undelegate', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.remove_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ConvictionVoting.remove_other_vote', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Treasury.accept_curator', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Treasury.unassign_curator', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Bounties.accept_curator', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Bounties.unassign_curator', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ChildBounties.accept_curator', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('ChildBounties.unassign_curator', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Tips.tip', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Treasury.tip', { data: { call: { origin: true, args: true, }, } } as const)
    .addCall('Democracy.vote', { data: { call: { origin: true, args: true, }, } } as const)

processor.run(new TypeormDatabase(), async (ctx: any) => {
    for (let block of ctx.blocks) {
        let multisigOrigins = new Map<string, any>()
        for (let item of block.items) {
            let multisigAddress: string
            if (item.kind === 'call') {
                if (item.name == 'ConvictionVoting.vote'){
                    await modules.referendumV2.extrinsics.handleConvictionVote(ctx, item, block.header)
                }
                if (item.name == 'ConvictionVoting.delegate'){
                    await modules.referendumV2.extrinsics.handleDelegate(ctx, item, block.header)
                }
                if (item.name == 'ConvictionVoting.undelegate'){
                    await modules.referendumV2.extrinsics.handleUndelegate(ctx, item, block.header)
                }
                if (item.name == 'ConvictionVoting.remove_vote'){
                    await modules.referendumV2.extrinsics.handleRemoveVote(ctx, item, block.header)
                }
                if (item.name == 'ConvictionVoting.remove_other_vote'){
                    await modules.referendumV2.extrinsics.handleRemoveOtherVote(ctx, item, block.header)
                }
                if (item.name == 'Bounties.accept_curator'){
                    await modules.bounties.extrinsic.handleAcceptCurator(ctx, item, block.header)
                }
                if (item.name == 'Bounties.unassign_curator'){
                    await modules.bounties.extrinsic.handleUnassignCurator(ctx, item, block.header)
                }
                if (item.name == 'Treasury.accept_curator'){
                    await modules.bounties.extrinsic.handleAcceptCuratorOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.unassign_curator'){
                    await modules.bounties.extrinsic.handleUnassignCuratorOld(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.accept_curator'){
                    await modules.childBounties.extrinsic.handleAcceptCurator(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.unassign_curator'){
                    await modules.childBounties.extrinsic.handleUnassignCurator(ctx, item, block.header)
                }
                if (item.name == 'Tips.tip'){
                    await modules.tips.extrinsics.handleNewTipValue(ctx, item, block.header)
                }
                if (item.name == 'Treasury.tip'){
                    await modules.tips.extrinsics.handleNewTipValueOld(ctx, item, block.header)
                }
                if (item.name == 'Democracy.vote'){
                    await modules.democracy.extrinsics.handleVote(ctx, item, block.header)
                }
            }
            if (item.kind === 'event'){
                if (item.name == 'Democracy.Proposed'){
                    await modules.democracy.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Tabled'){
                    await modules.democracy.events.handleTabled(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Started'){
                    await modules.democracy.events.handleStarted(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Passed'){
                    await modules.democracy.events.handlePassed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.NotPassed'){
                    await modules.democracy.events.handleNotPassed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Cancelled'){
                    await modules.democracy.events.handleCancelled(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Executed'){
                    await modules.democracy.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'Democracy.Seconded'){
                    await modules.democracy.events.handleDemocracySeconds(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageNoted'){
                    await modules.democracy.events.handlePreimageNoted(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageUsed'){
                    await modules.democracy.events.handlePreimageUsed(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageInvalid'){
                    await modules.democracy.events.handlePreimageInvalid(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageMissing'){
                    await modules.democracy.events.handlePreimageMissing(ctx, item, block.header)
                }
                if (item.name == 'Democracy.PreimageReaped'){
                    await modules.democracy.events.handlePreimageReaped(ctx, item, block.header)
                }
                if (item.name == 'Council.Proposed'){
                    await modules.council.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Council.Voted'){
                    await modules.council.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'Council.Closed'){
                    await modules.council.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'Council.Disapproved'){
                    await modules.council.events.handleDisapproved(ctx, item, block.header)
                }
                if (item.name == 'Council.Executed'){
                    await modules.council.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'Council.Approved'){
                    await modules.council.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Proposed'){
                    await modules.techComittee.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Approved'){
                    await modules.techComittee.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Disapproved'){
                    await modules.techComittee.events.handleDisapproved(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Closed'){
                    await modules.techComittee.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Voted'){
                    await modules.techComittee.events.handleVoted(ctx, item, block.header)
                }
                if (item.name == 'TechnicalCommittee.Executed'){
                    await modules.techComittee.events.handleExecuted(ctx, item, block.header)
                }
                if (item.name == 'Treasury.Proposed'){
                    await modules.treasury.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Treasury.Awarded'){
                    await modules.treasury.events.handleAwarded(ctx, item, block.header)
                }
                if (item.name == 'Treasury.Rejected'){
                    await modules.treasury.events.handleRejected(ctx, item, block.header)
                }
                if (item.name == 'Treasury.SpendApproved'){
                    await modules.treasury.events.handleSpendApproved(ctx, item, block.header)
                }
                if (item.name == 'Treasury.BountyProposed'){
                    await modules.bounties.events.handleProposedOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.BountyRejected'){
                    await modules.bounties.events.handleRejectedOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.BountyBecameActive'){
                    await modules.bounties.events.handleBecameActiveOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.BountyAwarded'){
                    await modules.bounties.events.handleAwardedOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.BountyClaimed'){
                    await modules.bounties.events.handleClaimedOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.BountyCanceled'){
                    await modules.bounties.events.handleCanceledOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.BountyExtended'){
                    await modules.bounties.events.handleExtendedOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.NewTip'){
                    await modules.tips.events.handleNewTipOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.TipRetracted'){
                    await modules.tips.events.handleRetractedOld(ctx, item, block.header)
                }
                if (item.name == 'Treasury.TipClosed'){
                    await modules.tips.events.handleClosedOld(ctx, item, block.header)
                }
                if (item.name == 'Tips.TipClosed'){
                    await modules.tips.events.handleClosed(ctx, item, block.header)
                }
                if (item.name == 'Tips.NewTip'){
                    await modules.tips.events.handleNewTip(ctx, item, block.header)
                }
                if (item.name == 'Tips.TipRetracted'){
                    await modules.tips.events.handleRetracted(ctx, item, block.header)
                }
                if (item.name == 'Tips.TipSlashed'){
                    await modules.tips.events.handleSlashed(ctx, item, block.header)
                }
                if (item.name == 'Bounties.BountyProposed'){
                    await modules.bounties.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'Bounties.BountyRejected'){
                    await modules.bounties.events.handleRejected(ctx, item, block.header)
                }
                if (item.name == 'Bounties.BountyBecameActive'){
                    await modules.bounties.events.handleBecameActive(ctx, item, block.header)
                }
                if (item.name == 'Bounties.BountyAwarded'){
                    await modules.bounties.events.handleAwarded(ctx, item, block.header)
                }
                if (item.name == 'Bounties.BountyClaimed'){
                    await modules.bounties.events.handleClaimed(ctx, item, block.header)
                }
                if (item.name == 'Bounties.BountyCanceled'){
                    await modules.bounties.events.handleCanceled(ctx, item, block.header)
                }
                if (item.name == 'Bounties.BountyExtended'){
                    await modules.bounties.events.handleExtended(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.Added'){
                    await modules.childBounties.events.handleProposed(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.Awarded'){
                    await modules.childBounties.events.handleAwarded(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.Claimed'){
                    await modules.childBounties.events.handleClaimed(ctx, item, block.header)
                }
                if (item.name == 'ChildBounties.Canceled'){
                    await modules.childBounties.events.handleCancelled(ctx, item, block.header)
                }
                if (item.name == 'Preimage.Noted'){
                    await modules.preimageV2.events.handlePreimageV2Noted(ctx, item, block.header)
                }
                if (item.name == 'Preimage.Cleared'){
                    await modules.preimageV2.events.handlePreimageV2Cleared(ctx, item, block.header)
                }
                if (item.name == 'Preimage.Requested'){
                    await modules.preimageV2.events.handlePreimageV2Requested(ctx, item, block.header)
                }
                if (item.name == 'Referenda.Submitted'){
                    await modules.referendumV2.events.handleSubmitted(ctx, item, block.header)
                }
                if (item.name == 'Referenda.Approved'){
                    await modules.referendumV2.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'Referenda.Cancelled'){
                    await modules.referendumV2.events.handleCancelled(ctx, item, block.header)
                }
                if (item.name == 'Referenda.ConfirmAborted'){
                    await modules.referendumV2.events.handleConfirmAborted(ctx, item, block.header)
                }
                if (item.name == 'Referenda.Confirmed'){
                    await modules.referendumV2.events.handleConfirmed(ctx, item, block.header)
                }
                if (item.name == 'Referenda.ConfirmStarted'){
                    await modules.referendumV2.events.handleConfirmStarted(ctx, item, block.header)
                }
                if (item.name == 'Referenda.DecisionDepositPlaced'){
                    await modules.referendumV2.events.handleDecisionDepositPlaced(ctx, item, block.header)
                }
                if (item.name == 'Referenda.DecisionStarted'){
                    await modules.referendumV2.events.handleDecisionStarted(ctx, item, block.header)
                }
                if (item.name == 'Referenda.Killed'){
                    await modules.referendumV2.events.handleKilled(ctx, item, block.header)
                }
                if (item.name == 'Referenda.Rejected'){
                    await modules.referendumV2.events.handleRejected(ctx, item, block.header)
                }
                if (item.name == 'Referenda.TimedOut'){
                    await modules.referendumV2.events.handleTimedOut(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Submitted'){
                    await modules.fellowshipReferendum.events.handleSubmitted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Approved'){
                    await modules.fellowshipReferendum.events.handleApproved(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Cancelled'){
                    await modules.fellowshipReferendum.events.handleCancelled(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.ConfirmAborted'){
                    await modules.fellowshipReferendum.events.handleConfirmAborted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Confirmed'){
                    await modules.fellowshipReferendum.events.handleConfirmed(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.ConfirmStarted'){
                    await modules.fellowshipReferendum.events.handleConfirmStarted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.DecisionDepositPlaced'){
                    await modules.fellowshipReferendum.events.handleDecisionDepositPlaced(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.DecisionStarted'){
                    await modules.fellowshipReferendum.events.handleDecisionStarted(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Killed'){
                    await modules.fellowshipReferendum.events.handleKilled(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.Rejected'){
                    await modules.fellowshipReferendum.events.handleRejected(ctx, item, block.header)
                }
                if (item.name == 'FellowshipReferenda.TimedOut'){
                    await modules.fellowshipReferendum.events.handleTimedOut(ctx, item, block.header)
                }
                if (item.name == 'FellowshipCollective.Voted'){
                    await modules.fellowshipReferendum.events.handleFellowshipVotes(ctx, item, block.header)
                }
                // if(item.name == 'Scheduler.Scheduled'){
                //     await modules.fellowshipReferendum.events.   (ctx, item, block.header)
                //     await modules.referendumV2.events.handleReferendumV2ExecutionSchedule(ctx, item, block.header)
                // }
                if(item.name == 'Scheduler.Dispatched'){
                    await modules.fellowshipReferendum.events.handleFellowshipExecution(ctx, item, block.header)
                    await modules.referendumV2.events.handleReferendumV2Execution(ctx, item, block.header)
                }
                if (item.name == 'Multisig.MultisigExecuted') {
                    if (Array.isArray(item.event.args)) {
                        assert(item.event.args.length >= 3)
                        multisigAddress = item.event.args[2]
                    } else if (typeof item.event.args === 'object') {
                        assert('multisig' in item.event.args)
                        multisigAddress = item.event.args.multisig
                    } else {
                        throw new Error('Unextpected case')
                    }
    
                    let extrinsicHash = item.event.extrinsic!.hash
                    multisigOrigins.set(extrinsicHash, {
                        __kind: 'system',
                        value: {
                            __kind: 'Signed',
                            value: multisigAddress,
                        },
                    })
                }
            }
        }
        if (multisigOrigins.size > 0) {
            for (let item of block.items) {
                if (item.kind === 'call' && 'extrinsic' in item && 'origin' in item.call && item.call.origin == null) {
                    item.call.origin = multisigOrigins.get(item.extrinsic.hash)
                }
            }
        }
    }  
});
