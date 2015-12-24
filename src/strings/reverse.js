// Reverse
//
// Reverse a given string.
//
// Fastest is 0(n) time.

import { stringSwap as swap } from '../utils/swap'

// iterative. We need to identify whether this works
// for both odd and even strings.
export function iterative(string) {
  let len = string.length
  let indexBound = len - 1
  // we don't want to consider the middle element
  let bound = ~~(len / 2)

  for (let i = 0; i < bound; i++) {
    string = swap(string, i, indexBound - i)
  }

  return string
}

// tail recursive solution bringing the last character to the front
// and calling the function on the rest of the string
export function recursive(string) {
  let bound = string.length - 1
  return string.length < 2 ? string : string[bound] + recursive(string.substring(0, bound))
}
