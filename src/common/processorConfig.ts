import { SubstrateProcessor } from '@subsquid/substrate-processor'

type Parameters<T> = T extends (...args: infer R) => unknown ? R : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

export type ChainConfig = Readonly<{
    name: string
    prefix: number | string
}>

export type ProcessorConfig<S> = Readonly<{
    chain: ChainConfig
    dataSource: Parameters<SubstrateProcessor<S>['setDataSource']>[HandlerParams.NAME]
    typesBundle: Parameters<SubstrateProcessor<S>['setTypesBundle']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateProcessor<S>['setBatchSize']>[HandlerParams.NAME]
    port?: Parameters<SubstrateProcessor<S>['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor<S>['setBlockRange']>[HandlerParams.NAME]
}>
