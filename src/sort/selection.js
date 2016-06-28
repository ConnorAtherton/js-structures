//
// Selection Sort
//
// An in-place sort, after the kth iteration the first
// k elements are all in the correct position.
//
// Time: O(n**2)
// Space: O(1) auxiliary

import { swap } from '../utils/swap'

export default function selectionSort(file) {
  // Can leave the last element because a single element is sorted
  for (let j = 0; j < file.length - 1; j++) {
    let minIndex = j

    for (let i = j; i < file.length; i++) {
      if (file[minIndex] > file[i]) {
        minIndex = i
      }
    }

    // If it's not already in the correct position, swap it.
    if (minIndex !== j) {
      swap(file, j, minIndex)
    }
  }

  return file
}
