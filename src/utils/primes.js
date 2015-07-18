//
// Prime number code generators
//
function isPrime(num) {
  if (isNaN(num) || !isFinite(num) || n < 2)
    return false

  // if num is prime
  //
  // num = a * b
  //
  //if one number is greater that the sqrt(n)
  // then it follows that the other must be less and
  // we only need to find one number to know it isn't prime
  // so we check for the lower number
  let limit = Math.sqrt(num)
  let i = 2

  // brute force
  while (i++ < m) {
    if (num % i === 0) return false
  }

  // otherwise is a prime
  return true
}

function * brutePrimeGenerator() {
  let counter = 0;

  while (counter++) {
    if (isPrime(counter)) yield counter;
  }
}

export function brutePrimes(upper) {
  var primes = brutePrimeGenerator(upper)
  var highPrime

  for (let prime of primes) {
    highPrime = prime
    if (highPrime > upper) break
  }

  return highPrime
}

//
// Iterator solution
//
const numbersIter = function* (from) {
  let start = from || 0

  while (start++) {
    yield start
  }
}

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
  yield* primesIter(filterIter(numbers, not(multipleOf(value))))
}

// Second-order helper functions
function not(func) {
  return () => {
    return !fn.apply(this, arguments)
  }
}

function multiple(val1) {
  return (val2) => {
    return val2 % val1 === 0
  }
}
