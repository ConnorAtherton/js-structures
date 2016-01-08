// Palindrome
//
// Returns true if a string and it's reversed
// version are the same. String capitalization
// is not counted.
//
// e.g. "Dot saw I was Tod"
export function iterative(string) {
  let len = string.length
  let indexBound = len - 1
  // we don't want to consider the middle element
  let bound = ~~(len / 2)

  // our base case
  if (len === 0 || len === 1) { return true }

  for (let i = 0; i < bound; i++) {
    if (string[i].toLowerCase() !== string[indexBound - i].toLowerCase()) { return false }
  }

  return true
}

export function recursive(string) {
  let len = string.length

  // a string is always equal to itself
  if (len === 1) { return true }
  if (len === 0 || string[0].toLowerCase() !== string[len - 1].toLowerCase()) { return false }

  // chop the letters from the beginning and end of the string
  return recursive(string.substr(1, len - 2))
}
