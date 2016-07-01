/**
 * Binary Search
 *
 * Returns the array index of the number if found.
 * Returns null if the value isn't found.
 *
 * @time  O(log n)
 * @space O(1)
 *
 * If there are duplicates, the first one found is returned, and this is not guaranteed to be the
 * smallest or largest item.
 *
 */

/**
 *  By using binary search, finds a value from this array which meets
 *  the given condition in O(log n) where n is the size of the array.
 *
 *  - the block returns false for any element whose index is less than
 *    i, and
 *  - the block returns true for any element whose index is greater
 *    than or equal to i.
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

  return value < list[middle]
    ? recursive(list, value, low, middle - 1)
    : recursive(list, value, middle + 1, high)
}

export function loop(file, val) {
  let low = 0
  let high = file.length - 1
  let mid = null
  let res = null

  while (low <= high) {
    mid = (low + high) / 2
    res = val > mid

    if (val === mid) {
      return mid
    } else if (res === false) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}

