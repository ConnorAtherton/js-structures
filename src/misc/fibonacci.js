//
// The Fibonacci sequence
//
export function recursive(n) {
  return n <= 2 ? 1 : recursive(n - 1) + recursive(n - 2)
}

export function iterative(n) {
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

//
// TODO: test and memoize
//
export const iterator = {
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

export function* infinite(n = null) {
  const infinite = n === null;
  let [current, next] = [0, 1]

  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}
