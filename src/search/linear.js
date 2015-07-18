/**
 * Linear search
 *
 * Finds an item in a list by sequentially checking until
 * the desired element is found.
 *
 * @time O(n)
 * @space O(n)
 *
 * @benefits
 * - easy to implement
 * - low on resources
 * - as a rough guide, okay to use on lists with 100 items or less
 *
 * @drawbacks
 * - inefficent for large lists
 */

export function brute(el, list) {
  if (list.length === 0) return null

  for (var i = 0, len = list.length; i < len; i++) {
    if (list[i] === el) return i;
  }

  return null;
}

export function recursive(el, list, index = 0) {
  if (list.length === 0) return null
  return (list[0] === el ? index : recursive(el, list.slice(1), ++index))
}

export function sentinel(el, list) {
  if (list.length === 0) return undefined

  var length = list.length
  var i = 1

  list[length] = el

  // need to check this but 0 is falsey in js
  if (list[0] === el) return 0

  // not bounded because it will definitely return when it
  // hits the sentinel value
  while (i++) {
    if (list[i] === el) break
  }

  return (length === i ? null : i)
}

export function reverse(el, list) {
  if (list.length === 0) return null

  var i = list.length - 1

  while (i-- && i !== 0) {
    if (list[i] === el) return i;
  }

  return null
}
