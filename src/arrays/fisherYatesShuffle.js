import { randomFromRange } from '../utils/random';

//
// Fisher-Yates shuffle
//
// An in-place array shuffle algorithm
//
// @space O(1)
// @time O(n)
//
export default function fisherYatesShuffle(array) {
  let length = array.length
  let lastIndex = length - 1
  var randomIndex
  var tmp

  if (length === 0 || length === 1) return array

  for (let index = 0; index < length; index++) {
    randomIndex = getRandomFromRange(index, lastIndex)

    // switch the values in place
    tmp = arr[index]
    array[index] = array[randomIndex]
    array[randomIndex] = tmp
  }

  return array
}
