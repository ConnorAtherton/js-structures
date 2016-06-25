//
// Given a sorted array from 1 to n with
// missing values. Return a collection of arrays
// grouped together such that each value container
// a subset k to l where every number between k and
// l only differ by 1.
//
const group = (arr) => {
  let res = []
  let last = null
  let sequence = false

  arr.reduce((acc, val) => {
    sequence = last && (val - last === 1)

    sequence
      ? acc[acc.length - 1].push(val)
      : acc.push([val])

    last = val

    return acc
  }, res)

  return res
}

export default group
