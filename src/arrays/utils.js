import { recursive as binarySearch } from '../search/binary'

// Turns an array into a Set
export function uniq(arr) {
  let hash = {}

  for (let i = 0, l = arr.length; i < l; i++) {
    hash[arr[i]] = true
  }

  return Object.keys(hash)
}

export function uniqBrute(arr) {
  let set = []
  let setLen = 0
  let arrLen = arr.length

  for (let i = 0; i < arrLen; i++) {
    let el = arr[i]
    let duplicate = false

    for (let j = 0; j < setLen; j++) {
      if (el !== set[j]) { continue }
      duplicate = true
      break
    }

    if (duplicate) { continue }
    set[setLen++] = el
  }

  return set
}

// ∪
//
// Returns an array of all distinct values in both arrays
export function union(arr1, arr2) {
  // TODO
}

// ∩
//
// Returns an array of element present in arr1 and arr2
// - The naive way is going to be compare each element to every other element. O(n^2)
// - a better way is to use hash tables O(M + N)
//
// TODO: is it better to use the smallest value in the has table or the largest
export function intersectionUnsorted(arr1, arr2) {
  let hash = {}
  let intersection = []

  // add all value to the hash table
  arr1.forEach(function(value) {
    hash[value] = true
  })

  // lookup each value O(1)
  arr2.forEach(function(value) {
    if (hash[value]) { intersection.push(value) }
  })

  return uniq(intersection)
}

// Uses binary search to look for values
// of one array in another. This method
// requires that one of the arrays be sorted.
//
export function intersectionUnsortedBinary(arr1, arr2) {
  let intersection = []
  let [smaller, bigger] = (function(a, b) {
    return (a.length < b.length) ? [a, b] : [b, a]
  }(arr1, arr2))

  // NOTE: JS can't sort an array of numbers correctly because
  // it converts all values to a string first so we have to
  // pass a custom comparison function in
  smaller.sort((a, b) => a - b)

  bigger.forEach(val => {
    if (binarySearch(smaller, val) !== null) { intersection.push(val) }
  })

  return uniq(intersection)
}

// Intersection on sorted arrays
// we iterate through the smallest element
// and if the two pointers reference the same value
// then we can add it to the intersection
//
// O(M + N)
export function intersectionSorted(arr1, arr2) {
  let intersection = []
  let n = 0
  let m = 0

  while (n < arr1.length && m < arr2.length) {
    if (arr1[n] === arr2[m]) {
      intersection.push(arr1[n])
      n++
      m++
    } else if (arr1[n] < arr2[m]) {
      n++
    } else {
      m++
    }
  }

  return intersection
}

// export function intersectionCollection(...arr) {
//   return arr.reduce(function(a, b) {
//     return intersectionUnsortedBinary(a, b)
//   })
// }
