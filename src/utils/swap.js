// Swap
//
// Primitives are passed by value, Objects are passed by "copy of a reference".
// We are mutating the object referenced by *arr* which is why we don't
// have to return anything here.

import stringReplace from '../strings/replace'

const swap = (arr, i, j = i + 1) => {
  if (i === j) { return arr }

  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp

  return arr
}

const stringSwap = (string, i, j = i + 1) => {
  let tmp = string[j]
  string = stringReplace(string, j, string[i])
  string = stringReplace(string, i, tmp)

  return string
}

export {
  swap,
  stringSwap
}
