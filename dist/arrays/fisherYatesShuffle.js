'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = fisherYatesShuffle;

var _utilsRandom = require('../utils/random');

//
// Fisher-Yates shuffle
//
// An in-place array shuffle algorithm
//
// @space O(1)
// @time O(n)
//

function fisherYatesShuffle(array) {
  var length = array.length;
  var lastIndex = length - 1;
  var randomIndex;
  var tmp;

  if (length === 0 || length === 1) {
    return array;
  }

  for (var index = 0; index < length; index++) {
    randomIndex = (0, _utilsRandom.randomFromRange)(index, lastIndex);

    // switch the values in place
    tmp = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = tmp;
  }

  return array;
}

module.exports = exports['default'];