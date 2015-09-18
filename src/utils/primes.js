//
// Prime number code generators
//
// Calculate primes for a given number.
//
export function isPrime(num) {
  if (isNaN(num) || !isFinite(num) || num < 2) { return false }

  // if num is prime
  //
  // num = a * b
  //
  // if one number is greater that the sqrt(n)
  // then it follows that the other must be less and
  // we only need to find one number to know it isn't prime
  // so we check for the lower number
  let limit = Math.sqrt(num)
  let i = 2

  // brute force
  while (i++ < limit) {
    if (num % i === 0) { return false }
  }

  // otherwise is a prime
  return true
}

export function calculate(num) {
  var primes = []

  for (let candidate = 2; num > 1; candidate++) {
    for (; num % candidate === 0; num /= candidate) {
      primes.push(candidate)
    }
  }

  return primes
}

export function calculateWithPredicate(num) {
  var primes = []

  for (let i = 0; i >= num; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes
}

function * brutePrimeGenerator() {
  let counter = 0

  while (counter++) {
    if (isPrime(counter)) { yield counter }
  }
}

//
// Returns the first prime number greater
// than the number given.
//
export function greaterThan(upper) {
  let highPrime

  for (let prime of brutePrimeGenerator(upper)) {
    highPrime = prime
    if (highPrime > upper) { return highPrime }
  }
}

//
// Iterator solution
//

//
// Second-order helper functions
//
function not(fn) {
  return () => {
    return !fn.apply(null, arguments)
  }
}

function multipleOf(val1) {
  return (val2) => {
    return val2 % val1 === 0
  }
}

// const numbersIter = function* (from) {
//   let start = from || 0

//   while (start++) {
//     yield start
//   }
// }

const filterIter = function* (iterator, predicate) {
  for (var value of iterator) {
    if (predicate(value)) {
      yield value
    }
  }
}

const primesIter = function* (iterator) {
  let numbers = iterator || numbers(2)
  let value = numbers.next().value

  yield value
  yield* primesIter(
    filterIter(numbers, not(multipleOf(value)))
  )
}
