//
// The Fibonacci sequence
//
const recursive = (n) => {
  return n <= 2 ? 1 : recursive(n - 1) + recursive(n - 2)
}

const tailRecursiveHelper = (first, second, n)  => {
  return n > 0 ? tailRecursive(second, first + second, n - 1) : first
}

const tailRecursive = (n) => tailRecursiveHelper(0, 1, n)

const iterative = (n) => {
  // base cases
  let first = 0
  let second = 1
  // end result
  // NOTE: we need to set it here for the base case to work
  // correctly as it won't enter the loop
  let result = first + second

  for (let i = 2; i <= n; i++) {
    // will set to 1 for the first iteration
    result = first + second
    // set the first to the combination of the previous value
    first = second
    // set the first to the combination of the previous two values
    second = result
  }

  return result
}

const betterIterative = (n) => {
  let [first, second] = [0, 1]

  while (n > 0) {
    let [first, second] = [second, first + second]
    n--
  }

  return first
}

//
// TODO: test and memoize
//
const iterator = {
  [Symbol.iterator]() {
    let first = 0
    let second = 1

    return {
      next() {
        let val = { done: false, value: first }

        console.log('->', val);

        [first, second] = [second, first + second];

        return val
      }
    }
  }
}

function* loop(n = null) {
  const infinite = n === null;
  let [current, next] = [0, 1]

  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

//
// https://en.wikipedia.org/wiki/Fibonacci_number#Recognizing_Fibonacci_numbers
//
const isFibonacci = (() => {
  const perfectSquare = (n) => {
    let s = Math.sqrt(n)
    return s * s === n
  }

  return (n) => {
    return perfectSquare(5 * n * n + 4) || perfectSquare(5 * n * n - 4)
  }
})

export default {
  recursive,
  tailRecursive,
  iterative,
  betterIterative,
  iterator,
  loop,
  isFibonacci
}
