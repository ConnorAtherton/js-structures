// Bubble sort
//
// Type - Exchange Sort
// Stable - yes
// In-place - yes
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

export function simple(file) {
  let len = file.length

  console.log(`starting file: ${file}`)

  for (let i = 0; i < len - 1; i++) {
    for (let j = 1; j < len - i; j++) {
      if (file[j - 1] > file[j]) {
        swap(file, j - 1, j)
      }
    }

    console.log(`${i + 1}th iteration result: ${file}`)
  }

  return file
}

export function simpleImproved(file) {
  let len = file.length
  let clean = false

  console.log(`starting file: ${file}`)

  for (let i = 0; i < len - 1; i++) {
    // NOTE: If no swaps are made through one cycle of the outer loop then the
    // array is sorted.
    if (clean) { return file }
    clean = true

    for (let j = 1; j < len - i; j++) {
      if (file[j - 1] > file[j]) {
        swap(file, j - 1, j)
        clean = false
      }
    }

    console.log(`${i + 1}th iteration result: ${file}`)
  }

  return file
}

// ascending the descending because elements tended to group
// towards the end the belong
export function bubbleToggle(file, numElements = file.length) {

}
