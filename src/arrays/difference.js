import { simpleSwap } from '../sort/quick'

//
// Given a single dimension array containing only integers, work
// out the biggest distance between 2 numbers
//
// Time: 0(n**2)
// Space: 0(n) only because we are manipulating the collection first.
//
const loop = (array) => {
  let highest = 0
  const entries = array.entries()

  for (const [outerKey, outerVal] of entries) {
    for (const [innerKey, innerVal] of entries) {
      let res = Math.abs(outerVal - innerVal)

      if (res > highest) highest = res
    }
  }

  return highest
}

//
// Sort the array then return the difference between the start and ene element
//
// Worst case: 0(n**2) same as quick
// Time: O(n log n)
//
const sort = (array) => {
  let len = array.length

  // This is in place
  simpleSwap(array)

  return array[len - 1] - array[0];
}

//
// O(n) time
// O(1) space
//
const single = (array) => {
  let low = array[0]
  let high = array[0]

  for (let val of array) {
    if (val < low) {
      low = val
      continue
    }

    if (val > high) {
      high = val
      continue
    }
  }

  return high - low
}


export {
  loop,
  sort,
  single
}
