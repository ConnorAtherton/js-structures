//
// Time: O(n**2)
//
const brute = (arr) => {
  let duplicates = []

  for (const outer of arr) {
    for (const inner of arr) {
      if (outer === inner) {
        duplicates.push(outer)
        continue
      }
    }
  }

  return duplicates
}

//
// Time: O(n)
// Space: O(n)
//
const hash = (arr) => {
  let values = {}
  let duplicates = []

  for (const val of arr) {
    if (values[val] !== undefined) {
      values[val] = values[val]++
    } else {
      values[val] = 0
    }
  }

  Object.keys(values).forEach(key => {
    if (values[key] > 0) duplicates.push(values[key])
  })

  return duplicates
}

//
// If the input is small enough and the possible values are constrained enough
// then we can allocate a zeroed out array and mark each index value as 1 when we
// encounter it. If we see an index that is greater than 0, we can store it an
// auxiliiary storage and return.
//
// Or we can use a BitSet to mark the element as already having been seen ans store it as
// a duplicate.
//
const array = (arr) => {

}

//
// ...cheeky
//
const set = (arr) => {
  return Array.from(new Set(arr))
}

//
// eg: [1, 2, 3, 4, 5, 6
//
const singleMissingInKnownRange = (arr) => {

}

//
// mutable:
//   Switch the values at indicies.
//
const constantSpaceMutable = (arr) => {

}

//
// immutable:
//   Treat the values as an ordered graph and find the cycle, since there is guaranteed to
//   be a cycle if we have duplicates.
//
const constantSpaceImmutable = (arr) => {
}

export {
  brute,
  hash,
  array,
  set,
  singleMissingInKnownRange,
  constantSpace
}
