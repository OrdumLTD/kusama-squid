import {MotionThreshold} from "./_motionThreshold"
import {ReferendumThreshold} from "./_referendumThreshold"

export type Threshold = MotionThreshold | ReferendumThreshold

export function fromJsonThreshold(json: any): Threshold {
    switch(json?.isTypeOf) {
        case 'MotionThreshold': return new MotionThreshold(undefined, json)
        case 'ReferendumThreshold': return new ReferendumThreshold(undefined, json)
        default: throw new TypeError('Unknown json object passed as Threshold')
    }
}
