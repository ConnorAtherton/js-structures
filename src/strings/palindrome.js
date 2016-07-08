// Palindrome
//
// Returns true if a string and it's reversed
// version are the same. String capitalization
// is not counted.
//
// e.g. "Dot saw I was Tod"
const iterative = (str) => {
  let len = str.length
  let indexBound = len - 1
  // we don't want to consider the middle element
  let bound = ~~(len / 2)

  // our base case
  if (len === 0 || len === 1) { return true }

  for (let i = 0; i < bound; i++) {
    if (str[i].toLowerCase() !== str[indexBound - i].toLowerCase()) { return false }
  }

  return true
}

const recursive = (str) => {
  let len = str.length

  // a str is always equal to itself
  if (len === 1) { return true }
  if (len === 0 || str[0].toLowerCase() !== str[len - 1].toLowerCase()) { return false }

  // chop the letters from the beginning and end of the str
  return recursive(str.substr(1, len - 2))
}

//
// Write an efficient function that checks whether any permutation
// of an input string is a palindrome
//
// "civic" should return true
// "ivicc" should return true
//
// Our approach is to check that each character appears an even number of times,
// allowing for only one character to appear an odd number of times (a middle character).
//
const permuted = (str) => {
  const unpaired = new Set()

  for (let ch of str) {
    unpaired.has(ch) ? unpaired.delete(ch) : unpaired.add(ch)
  }

  // The string can only be considered a palindrome if it
  // has one or zero chars without a pair
  return unpaired.size < 2
}

export {
  iterative,
  recursive,
  permuted
}
