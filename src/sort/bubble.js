// Bubble sort
//
// Type - Exchange Sort
//
// Loop through the file and interchange the position of
// two elements if they are not in proper order. The sort
// if complete was a full pass has been completed with no
// interchanges taking place.
//
// A file of n elements requires no more than n - 1 iterations
// because at least 1 element is placed into it's correct
// position during each iteration.

import swap from '../utils/swap'

// Naive solution looping through
export function bubble(file) {
  // stores whether an iteration changes elements
  var clean
  var tmp

  // n - 1 passes
  for (let i = 0, len = file.length; i < len - 1; i++) {
    // set it to true on each pass
    clean = true

    console.log(file[i], file[i + 1])

    // always compare each element
    if (file[i] > file[i + 1]) {
      clean = false
      swap(file, i, i + 1)
    }
  }

  return file
}

export function bubbleToggle(file, numElements = file.length) {

}
