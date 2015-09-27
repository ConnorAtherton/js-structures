//
// Given a monetary amount in pennis, will calculate the minimum
// number of coins needed to combine to that amount.
//
// TODO: can we create a way to convert decimal places to
// accept all formats?
//
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = minimumCoins;
var coins = [200, 100, 50, 20, 10, 5, 2, 1];

function minimumCoins(val) {
  var results = {};
  var coinIndex = 0;
  var coinValue = undefined;

  val = Math.abs(val);

  while (val) {
    coinValue = coins[coinIndex++];

    // if the val is greater than the current denomination
    // we can update the results
    if (val >= coinValue) {
      results[coinValue] = Math.floor(val / coinValue);
      val = val % coinValue;
    }
  }

  return results;
}

module.exports = exports["default"];