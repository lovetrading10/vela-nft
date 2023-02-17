import {
  ClosePosition as ClosePositionEvent,
  DecreasePosition as DecreasePositionEvent,
  IncreasePosition as IncreasePositionEvent,
  LiquidatePosition as LiquidatePositionEvent,
} from "../generated/VaultUtils/VaultUtils"
import {
  ClosePosition,
  DecreasePosition,
  IncreasePosition,
  LiquidatePosition,
} from "../generated/schema"

export function handleClosePosition(event: ClosePositionEvent): void {
  let entity = new ClosePosition(event.params.key)
  entity.key = event.params.key
  entity.realisedPnl = event.params.realisedPnl
  entity.markPrice = event.params.markPrice
  entity.feeUsd = event.params.feeUsd

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleDecreasePosition(event: DecreasePositionEvent): void {
  let entity = new DecreasePosition(event.params.key)
  entity.key = event.params.key
  entity.account = event.params.account
  entity.indexToken = event.params.indexToken
  entity.isLong = event.params.isLong
  entity.posId = event.params.posId
  entity.realisedPnl = event.params.realisedPnl
  entity.posData = event.params.posData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleIncreasePosition(event: IncreasePositionEvent): void {
  let entity = new IncreasePosition(event.params.key)
  entity.key = event.params.key
  entity.account = event.params.account
  entity.indexToken = event.params.indexToken
  entity.isLong = event.params.isLong
  entity.posId = event.params.posId
  entity.posData = event.params.posData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidatePosition(event: LiquidatePositionEvent): void {
  let entity = new LiquidatePosition(event.params.key)
  entity.key = event.params.key
  entity.realisedPnl = event.params.realisedPnl
  entity.markPrice = event.params.markPrice
  entity.feeUsd = event.params.feeUsd

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}