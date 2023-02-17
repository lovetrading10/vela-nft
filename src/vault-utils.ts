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
  let entity = new ClosePosition(event.params.key.toHexString())
  entity.key = event.params.key.toHexString()
  let increasePositionEntity = IncreasePosition.load(event.params.key.toHexString())
  if (increasePositionEntity) {
    entity.account = increasePositionEntity.account
    entity.indexToken = increasePositionEntity.indexToken
    entity.isLong = increasePositionEntity.isLong
    entity.posId = increasePositionEntity.posId
  }
  entity.realisedPnl = event.params.realisedPnl
  entity.markPrice = event.params.markPrice
  entity.feeUsd = event.params.feeUsd
  entity.timestamp = event.block.timestamp.toI32()
  entity.transactionHash = event.transaction.hash.toHexString()
  entity.save()
}

export function handleDecreasePosition(event: DecreasePositionEvent): void {
  let entity = new DecreasePosition(event.params.key.toHexString())
  entity.key = event.params.key.toHexString()
  entity.account = event.params.account.toHexString()
  entity.indexToken = event.params.indexToken.toHexString()
  entity.isLong = event.params.isLong
  entity.posId = event.params.posId.toI32()
  entity.realisedPnl = event.params.realisedPnl
  entity.collateral = event.params.posData[0]
  entity.size = event.params.posData[1]
  entity.reserveAmount = event.params.posData[2]
  entity.entryFundingRate = event.params.posData[3]
  entity.averagePrice = event.params.posData[4]
  entity.markPrice = event.params.posData[5]
  entity.feeUsd = event.params.posData[6]
  entity.timestamp = event.block.timestamp.toI32()
  entity.transactionHash = event.transaction.hash.toHexString()
  entity.save()
}

export function handleIncreasePosition(event: IncreasePositionEvent): void {
  let entity = new IncreasePosition(event.params.key.toHexString())
  entity.key = event.params.key.toHexString()
  entity.account = event.params.account.toHexString()
  entity.indexToken = event.params.indexToken.toHexString()
  entity.isLong = event.params.isLong
  entity.posId = event.params.posId.toI32()
  entity.collateral = event.params.posData[0]
  entity.size = event.params.posData[1]
  entity.reserveAmount = event.params.posData[2]
  entity.entryFundingRate = event.params.posData[3]
  entity.averagePrice = event.params.posData[4]
  entity.markPrice = event.params.posData[5]
  entity.feeUsd = event.params.posData[6]
  entity.timestamp = event.block.timestamp.toI32()
  entity.transactionHash = event.transaction.hash.toHexString()

  entity.save()
}

export function handleLiquidatePosition(event: LiquidatePositionEvent): void {
  let entity = new LiquidatePosition(event.params.key.toHexString())
  entity.key = event.params.key.toHexString()
  let increasePositionEntity = IncreasePosition.load(event.params.key.toHexString())
  if (increasePositionEntity) {
    entity.account = increasePositionEntity.account
    entity.indexToken = increasePositionEntity.indexToken
    entity.isLong = increasePositionEntity.isLong
    entity.posId = increasePositionEntity.posId
  }
  entity.realisedPnl = event.params.realisedPnl
  entity.markPrice = event.params.markPrice
  entity.feeUsd = event.params.feeUsd
  entity.timestamp = event.block.timestamp.toI32()
  entity.transactionHash = event.transaction.hash.toHexString()
  entity.save()
}