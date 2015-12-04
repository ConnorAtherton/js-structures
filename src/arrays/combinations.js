// Given an array of integers,
// produce all possible combinations
// of a number in the list matched with
// every other number in the list
export default function combinations(array) {
  // stores combinations of the final array
  let results = []

  array.foreach(function(outer) {
    array.foreach(function(inner) {
      results.push([outer, inner])
    })
  })

  return results
}
