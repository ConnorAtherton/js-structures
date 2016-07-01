import OrderedHash from '../helpers/orderedHash'

//
// Find the first non-repeated character in a string.
//
// Notes:
//
// All solutions require us to scan through the full string at least
// or we couldn't be certain that a character has not been repeated.
//
// Time: O(n)
// Space: O(n)
//
// @returns
//   The first non-repeated character, if any. False otherwise.
export default function firstNonRepeated(str) {
  let hash = new OrderedHash
  let existing
  let newer

  // Populate the hash
  for (var i = 0, len = str.length; i < len; i++) {
    existing = hash.fetch(str[i])
    newer = existing === undefined ? 1 : ++existing
    hash.add(str[i], newer)
  }

  // Search the hash for the first value of 1
  for (var i = 0, len = hash.keys.length; i < len; i++) {
    let key = hash.keys[i]
    if (hash.fetch(key) === 1) { return key }
  }

  return false
}
