//
// Given an array of numbers, return 2 numbers that form to a given sum, or null otherwise.
//

//
//
//
const brute = (arr) => {

}

//
// Loop through and store each entry into hash table
//
// Space: O(n)
// Time: O(n)
//
const hash = (arr) => {

}

//
// Hash, but assume duplicates are possible. We can count the duplcates as the hash
// key here.
//
// Space: O(n)
// Time: O(n)
//
//
const hashWithDuplicates = (arr) => {

}

//
// For large arrays, the above methods might be too costly as we have to every value
// twice: once in the original array, and another in a data structure used to count the
// occurence.
//
// Quicksort is an in-place sort, and usually not stable.
//
// Time: O(1)
// Storage: O(n)
//
//
const inPlace = (arr) => {

}

// EXTENSION
//
// Given an array of integers check whether there are 3 numbers that sum up to a given number
//
const threeNumbers = (arr) => {
  // Iterate through the array and use the approach for finding two numbers outlined above
}

export {
  brute,
  hash,
  hashWithDuplicates,
  inPlace,
  threeNumbers
}
