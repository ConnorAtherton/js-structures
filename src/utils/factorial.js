//
// Factorial
//
export function recursive(num) {
  return (num < 2) ? num : num * recursive(num - 1)
}

export function tailRecursive(num, acc = 0) {
  return (num === 0 ) ? acc : tailRecursive(num - 1, (num * acc))
}

export function brute(num) {
  let acc = num

  while (num-- > 1) { acc *= num }

  return acc
}
