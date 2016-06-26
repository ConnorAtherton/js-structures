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
//
// NOTE: we can switch the sign in the if statement to reverse
// the sort order

import { swap } from '../utils/swap'

export function whileLoop(file) {
  let len = file.length
  // we haven't started sorting yet
  let sorted = false

  // console.log(`starting file: ${file}`)

  // not done until we have one full pass where
  // we don't switch any elements
  while (!sorted) {
    sorted = true

    for (let i = 0; i < len; i++) {
      if (file[i] > file[i + 1]) {
        sorted = false
        swap(file, i)
      }
    }

    // console.log(`iteration result: ${file}`)
  }

  return file
}

export function simple(file) {
  let len = file.length

  // console.log(`starting file: ${file}`)

  for (let i = 0; i < len - 1; i++) {
    for (let j = 1; j < len - i; j++) {
      if (file[j - 1] > file[j]) {
        swap(file, j - 1, j)
      }
    }

    // console.log(`${i + 1}th iteration result: ${file}`)
  }

  return file
}

export function simpleImproved(file) {
  let len = file.length
  let clean = false

  // console.log(`starting file: ${file}`)

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

    // console.log(`${i + 1}th iteration result: ${file}`)
  }

  return file
}

// ascending the descending because elements tended to group
// towards the end the belong
export function bubbleToggle(file, numElements = file.length) {

}

// takes advantage of the fact that the nth-largest numbers will
// always be in their position after the nth iteration
export function remaining(file) {
  // console.log(`starting file: ${file}`)

  for (let passesLeft = file.length - 1; passesLeft > 0; passesLeft--) {
    for (let i = 0; i < passesLeft; i++) {
      if (file[i] > file[i + 1]) { swap(file, i) }
    }

    // console.log(`${passesLeft - 1} passes left: ${file}`)
  }

  return file
}
