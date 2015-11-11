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

//
// optimizations
//
// - only use odd integers in the arrar because, by definition, even
// numbers are known to be divisible by 2 and so are not prime.
export function sieveOfEratosthenes(max) {
  // we want one more than the max but
  let sieve = new Array(max + 1)
  let counter = 2

  // set all values
  sieve.map((flag, i) => i > 1 ? true : false)

  // iterate through all primes and sum through
  // the array crossing off multiples
  while (counter < Math.sqrt(max)) {
    // we start with counter * counter as the first multiple
    // because any k * prime, where k < prime, would have
    // already been crossed off in a prior iteration.
    for (var i = counter * counter; i < sieve.length; i += counter) {
      sieve[i] = false
    }

    // pick the next value that hasn't already been removed
    // from the sieve starting from the next consecutive number
    counter = counter + 1
    while (counter < sieve.length && !sieve[counter]) {
      counter++
    }

    // exit if we have reached the end of the sieve
    if (counter >= sieve.length) {
      break
    }
  }

  return sieve
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
