/**
 * Binary Search
 *
 * Returns the array index of the number if found.
 * Returns null if the value isn't found.
 *
 * @time  O(log n)
 * @space O(1)
 *
 * @benefits
 * - quick
 *
 * @drawbacks
 * - only works on sorted arrays
 *
 */

export function iterative(list, value) {
  let startIndex = 0
  let stopIndex = list.length - 1
  let middle = Math.floor((stopIndex + startIndex) / 2)

  // loop with conditions
  while (list[middle] !== value && startIndex < stopIndex) {

    // adjust search area
    if (value < list[middle]) {
      stopIndex = middle - 1
    } else {
      startIndex = middle + 1
    }

    // recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2)
  }

  // make sure it's the right value
  return (list[middle] === value) ? middle : null
}

export function recursive(list, value, low = 0, high = list.length - 1) {
  let middle

  if (low > high) { return null }

  // recalculate middle
  middle = Math.floor((low + high) / 2)

  if (list[middle] === value) {
    return middle
  }

  return value < list[middle] ? recursive(list, value, low, middle - 1) : recursive(list, value, middle + 1, high)
}

