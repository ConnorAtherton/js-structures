import assert from 'assert'
import { swap } from '../../utils/swap'

//
// O(n) storage (for aux)
// O(n) time to look at each item
//
const moveZeroesBad = (arr) => {
  let numZeroes = 0
  const res = []

  arr.forEach(num => {
    if (num === 0) {
      numZeroes++
      return
    }

    res.push(num)
  })

  while (numZeroes--) {
    res.push(0)
  }

  return res
}

//
// O(1) since we are using already allocated memory
// O(n) time to look at each item
//
const moveZeroesDoublePointer = (arr) => {
  let lastEnteredIndex = 0
  let length = arr.length
  let currentElement

  // Overwrite all non-zero elements at the front of the array
  for (let i = 0; i < length; i++) {
    currentElement = arr[i]

    if (currentElement !== 0) {
      arr[lastEnteredIndex] = currentElement
      lastEnteredIndex++
    }
  }

  // Pad the end of the array with 0 elements
  for (let i = lastEnteredIndex; i < length; i++) {
    arr[i] = 0
  }

  return arr
}

//
// O(1) since we are using already allocated memory
// O(n) time to look at each item
//
// We just swap all non-0 values at the front to leave the end of the array
// with the remaining 0's.
//
const moveZeroesOptimal = (arr) => {
  let lastEnteredIndex = 0
  let length = arr.length
  let currentElement = null

  for (let i = 0; i < length; i++) {
    currentElement = arr[i]

    if (currentElement !== 0) {
      swap(arr, lastEnteredIndex++, i)
    }
  }

  return arr
}

assert.deepEqual(moveZeroesBad([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
assert.deepEqual(moveZeroesDoublePointer([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
assert.deepEqual(moveZeroesOptimal([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])

