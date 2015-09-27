//
// Given a monetary amount in pennis, will calculate the minimum
// number of coins needed to combine to that amount.
//
// TODO: can we create a way to convert decimal places to
// accept all formats?
//
const coins = [200, 100, 50, 20, 10, 5, 2, 1]

export default function minimumCoins(val) {
  let results = {}
  let coinIndex = 0
  let coinValue

  val = Math.abs(val)

  while (val) {
    coinValue = coins[coinIndex++]

    // if the val is greater than the current denomination
    // we can update the results
    if (val >= coinValue) {
      results[coinValue] = Math.floor(val / coinValue)
      val = val % coinValue
    }
  }

  return results
}
