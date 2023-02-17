import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { ClosePosition } from "../generated/schema"
import { ClosePosition as ClosePositionEvent } from "../generated/VaultUtils/VaultUtils"
import { handleClosePosition } from "../src/vault-utils"
import { createClosePositionEvent } from "./vault-utils-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let key = Bytes.fromI32(1234567890)
    let realisedPnl = BigInt.fromI32(234)
    let markPrice = BigInt.fromI32(234)
    let feeUsd = BigInt.fromI32(234)
    let newClosePositionEvent = createClosePositionEvent(
      key,
      realisedPnl,
      markPrice,
      feeUsd
    )
    handleClosePosition(newClosePositionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClosePosition created and stored", () => {
    assert.entityCount("ClosePosition", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClosePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "key",
      "1234567890"
    )
    assert.fieldEquals(
      "ClosePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "realisedPnl",
      "234"
    )
    assert.fieldEquals(
      "ClosePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "markPrice",
      "234"
    )
    assert.fieldEquals(
      "ClosePosition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "feeUsd",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
