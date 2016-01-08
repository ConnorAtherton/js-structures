// Anagram
//
// Given two strings, return whether the second
// string is an anagram of the first.
//
// Definition: a word, phrase, or name formed by rearranging the letters of another
// Exmaple: cinema <=> iceman.
//
// The problem involves counting, so a hash
// would be a suitable data structure.
export default function isAnagram(first, second) {
  // We could also store this in an array where the character code
  // represents the index but I'll keep it as a hash to work with
  // extended character sets too
  let table = {}

  // replace all whitespace
  first = first.replace(/\s/g, '')
  second = second.replace(/\s/g, '')

  // short circuit. If the strings are not of equal lengths
  // then they can't be anagrams
  if (first.length !== second.length) { return false }

  // increase counts for the first word
  for (let i = 0, len = first.length; i < len; i++) {
    let chr = first[i]
    if (!table[chr]) { table[chr] = 0 }
    table[chr] = table[chr] + 1
  }

  // decrease counts for the second word
  for (let j = 0, len = second.length; j < len; j++) {
    let chr = second[j]
    // if (!table[chr]) { table[chr] = 0 }
    // if we have to create a new table entry then we know we
    // don't have an anagram
    if (!table[chr]) { return false }
    table[chr] = table[chr] - 1
  }

  // return if any of the keys are not 0
  // NOTE: for..of does not work with objects
  for (var key of Object.keys(table)) {
    if (table[key] !== 0) { return false }
  }

  return true
}
