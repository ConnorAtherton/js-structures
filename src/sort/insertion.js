//
// Insertion sort
//
// A stable, in-place sorting algorithm efficient for small
// data sets. Is a quadratic sort like bubble and selection sort.
//
// Iterates through a list leaving a sorted sub-list behind it, similiar to
// selection sort except other than it doesn't guarantee that the sub-list is
// the smallest elements possible.
//
// Best case is that the list is already sorted and we can run in O(n). Also requires
// lot of writes to memory since we shift all elements across to make room if we
// aren't doing an in-place swap.
//
// Time: O(n**2)
// Space: O(1) auxiliary
//

import { swap } from '../utils/swap'

export default function insertionSort(file) {
  // Don't need to look at the first element since a single element will
  // trivially sorted but using the handy forEach function instead of rolling
  // a new loop and setting the initial counter to 1 instead of 0.
  file.forEach(function(val, i) {
    let j = i

    while (j > 0 && file[j - 1] > val) {
      swap(file, j - 1, j)
      j--
    }
  })

  return file
}
