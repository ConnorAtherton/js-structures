//
// Mergesort
//
// Time: O(n lg n)
//
const sort = (arr, lower = 0, upper = arr.length - 1) => {
  // Base case when we have a single element
  if (lower >= upper) {
    return arr
  }

  const middle = Math.floor((lower + upper) / 2)

  // Divide step
  sort(arr, lower, middle)
  sort(arr, middle + 1, upper)

  // Combine results
  merge(arr, lower, middle, upper)
}

//
// This function merges two *sorted* sequences and acts as the combine step for
// the algorithm.
//
// We use a sentinel valye of Infinity to simplify the terminating logic in
// this function.
//
const merge = (arr, lower = 0, middle, upper = arr.length - 1) => {
  middle = middle || Math.floor((lower + upper) / 2)

  // NOTE: Adding 1 here to account for the 0 element
  const leftLength = middle - lower + 1
  const rightLength = upper - middle

  // Allocate enough storage to start
  const left = new Array(leftLength + 1)
  const right = new Array(rightLength + 1)

  // Populate left list
  for (let count = 0; count < leftLength; count++) {
    left[count] = arr[lower + count]
  }

  // Populate right list
  for (let count = 0; count < rightLength; count++) {
    right[count] = arr[middle + count + 1]
  }

  // Add sentinel values
  left[leftLength] = Infinity
  right[rightLength] = Infinity

  // console.log('\nOriginal:', arr.slice(lower, upper + 1))
  // console.log('Left:', left)
  // console.log('Right:', right)

  // Set tracker indicies for each list
  let leftIndex = 0
  let rightIndex = 0

  // Perform the sort selecting the lowest value from both list
  for (let i = lower; i <= upper; i++) {
    // console.log('-> choice', left[leftIndex], right[rightIndex])

    if (left[leftIndex] >= right[rightIndex]) {
      arr[i] = right[rightIndex]
      rightIndex++
    } else {
      arr[i] = left[leftIndex]
      leftIndex++
    }

    // console.log('= smallest', arr[i])
  }
}

export {
  sort,
  merge
}
