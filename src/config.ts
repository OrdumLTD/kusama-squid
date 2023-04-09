import {lookupArchive} from "@subsquid/archive-registry"
import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'kusama',
        prefix: 'kusama',
    },
    dataSource: {
        archive: lookupArchive("kusama", {release: "FireSquid"}),
        chain: 'wss://kusama.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
