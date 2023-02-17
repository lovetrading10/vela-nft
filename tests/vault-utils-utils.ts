import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ClosePosition,
  DecreasePosition,
  IncreasePosition,
  LiquidatePosition,
  SetDepositFee
} from "../generated/VaultUtils/VaultUtils"

export function createClosePositionEvent(
  key: Bytes,
  realisedPnl: BigInt,
  markPrice: BigInt,
  feeUsd: BigInt
): ClosePosition {
  let closePositionEvent = changetype<ClosePosition>(newMockEvent())

  closePositionEvent.parameters = new Array()

  closePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "realisedPnl",
      ethereum.Value.fromSignedBigInt(realisedPnl)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "markPrice",
      ethereum.Value.fromUnsignedBigInt(markPrice)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("feeUsd", ethereum.Value.fromUnsignedBigInt(feeUsd))
  )

  return closePositionEvent
}

export function createDecreasePositionEvent(
  key: Bytes,
  account: Address,
  indexToken: Address,
  isLong: boolean,
  posId: BigInt,
  realisedPnl: BigInt,
  posData: Array<BigInt>
): DecreasePosition {
  let decreasePositionEvent = changetype<DecreasePosition>(newMockEvent())

  decreasePositionEvent.parameters = new Array()

  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam("posId", ethereum.Value.fromUnsignedBigInt(posId))
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "realisedPnl",
      ethereum.Value.fromSignedBigInt(realisedPnl)
    )
  )
  decreasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "posData",
      ethereum.Value.fromUnsignedBigIntArray(posData)
    )
  )

  return decreasePositionEvent
}

export function createIncreasePositionEvent(
  key: Bytes,
  account: Address,
  indexToken: Address,
  isLong: boolean,
  posId: BigInt,
  posData: Array<BigInt>
): IncreasePosition {
  let increasePositionEvent = changetype<IncreasePosition>(newMockEvent())

  increasePositionEvent.parameters = new Array()

  increasePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "indexToken",
      ethereum.Value.fromAddress(indexToken)
    )
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam("posId", ethereum.Value.fromUnsignedBigInt(posId))
  )
  increasePositionEvent.parameters.push(
    new ethereum.EventParam(
      "posData",
      ethereum.Value.fromUnsignedBigIntArray(posData)
    )
  )

  return increasePositionEvent
}

export function createLiquidatePositionEvent(
  key: Bytes,
  realisedPnl: BigInt,
  markPrice: BigInt,
  feeUsd: BigInt
): LiquidatePosition {
  let liquidatePositionEvent = changetype<LiquidatePosition>(newMockEvent())

  liquidatePositionEvent.parameters = new Array()

  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam("key", ethereum.Value.fromFixedBytes(key))
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "realisedPnl",
      ethereum.Value.fromSignedBigInt(realisedPnl)
    )
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam(
      "markPrice",
      ethereum.Value.fromUnsignedBigInt(markPrice)
    )
  )
  liquidatePositionEvent.parameters.push(
    new ethereum.EventParam("feeUsd", ethereum.Value.fromUnsignedBigInt(feeUsd))
  )

  return liquidatePositionEvent
}

export function createSetDepositFeeEvent(fee: BigInt): SetDepositFee {
  let setDepositFeeEvent = changetype<SetDepositFee>(newMockEvent())

  setDepositFeeEvent.parameters = new Array()

  setDepositFeeEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return setDepositFeeEvent
}
