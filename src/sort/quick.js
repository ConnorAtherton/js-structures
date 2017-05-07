// Quicksort
//
// Chooses a pivot and sorts all other elements into side being lower or
// greater than the pivot. Repeat the sort of the sub files until we reach
// the base cases where the file consists of a single element.
//
// Time: O(n log n)
// Space: O(n) for temporary arrays
// Stable: not usually
//
// We can optimize this by running insertion sort on the array if it is less
// than a certain number of element.

import { swap } from '../utils/swap'
import { between } from '../helpers/random'
import insertionSort from './insertion'

export function simple(file, random = false) {
  if (file.length < 2) { return file }

  // Optimize for cases here there are a small number of elements...
  if (file.length <= 15) {
    return insertionSort(file)
  }

  // Pivot is either random of the first element
  //
  // NOTE: an improvement is to take the median of the first,
  // middle, and last elements as the pivot after they have been sorted
  // NOTE: let pivot = Math.floor((left + right + (arr.length / 2)) / 3);
  let pivot = random ? file[Math.floor(Math.random() * file.length)] : file[0]
  let left = []
  let eq = []
  let right = []

  for (var i = 0; i < file.length; i++) {
    if (file[i] < pivot) {
      left.push(file[i])
    } else if (file[i] === pivot) {
      eq.push(file[i])
    } else {
      right.push(file[i])
    }
  }

  return [...simple(left), eq, ...simple(right)]
}

export function simpleSwap(file, lower = 0, upper = file.length - 1) {
  if (lower >= upper) { return file }

  // console.log('\n', lower, upper)

  let pivotPos = lower
  let pivotIndex = between(lower, upper)

  // console.log(`inital val: ${file}`)
  // console.log(`lower is ${lower}, pivot value is ${file[pivotVal]}`)

  // move the pivot value to the first value to start
  swap(file, lower, pivotIndex)
  // console.log(`front swap: ${file}`)

  // start to partition. We want to keep track of the moving
  // pivot position so we can replace the pivot value.
  for (let i = lower + 1; i <= upper; i++) {
    // console.log(`in loop ${file[i]}`)
    if (file[i] < file[lower]) { swap(file, ++pivotPos, i) }
  }

  // console.log(`after loop ${file}`)

  // restore the pivot value
  swap(file, lower, pivotPos)

  // console.log(`replace pivot ${file} at ${pivotPos}`)

  // console.log('\n\n')

  // recursively sort the array less than and greater than
  // the pivot value
  simpleSwap(file, lower, pivotPos - 1)
  simpleSwap(file, pivotPos + 1, upper)
}

export function quick2(file, lower = 0, upper = file.length - 1) {
  // Sorted base case
  if (lower >= upper) { return file }

  // pivot in the correct place
  const pivot = partition2(file, lower, upper)

  // console.log('Pivot is:', pivot)
  // console.log('Arry:', file)

  // sort the two sub-arrays
  quick2(file, lower, pivot - 1)
  quick2(file, pivot + 1, upper)
}

const partition2 = (file, lower, upper) => {
  // Can choose a better pivot value than this
  let pivotVal = file[lower]

  // console.log('Pivot val:', pivotVal)

  while (true) {
    while (file[upper] > pivotVal) { upper-- }
    while (file[lower] < pivotVal) { lower++ }

    // console.log('First pass:', lower, upper)

    if (upper > lower) {
      swap(file, lower, upper)
    } else {
      // finished
      return upper
    }
  }
}
