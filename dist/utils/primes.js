//
// Prime number code generators
//
// Calculate primes for a given number.
//
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrime = isPrime;
exports.calculate = calculate;
exports.calculateWithPredicate = calculateWithPredicate;
exports.greaterThan = greaterThan;
var marked0$0 = [brutePrimeGenerator].map(regeneratorRuntime.mark);

function isPrime(num) {
  if (isNaN(num) || !isFinite(num) || num < 2) {
    return false;
  }

  // if num is prime
  //
  // num = a * b
  //
  // if one number is greater that the sqrt(n)
  // then it follows that the other must be less and
  // we only need to find one number to know it isn't prime
  // so we check for the lower number
  var limit = Math.sqrt(num);
  var i = 2;

  // brute force
  while (i++ < limit) {
    if (num % i === 0) {
      return false;
    }
  }

  // otherwise is a prime
  return true;
}

function calculate(num) {
  var primes = [];

  for (var candidate = 2; num > 1; candidate++) {
    for (; num % candidate === 0; num /= candidate) {
      primes.push(candidate);
    }
  }

  return primes;
}

function calculateWithPredicate(num) {
  var primes = [];

  for (var i = 0; i >= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

function brutePrimeGenerator() {
  var counter;
  return regeneratorRuntime.wrap(function brutePrimeGenerator$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        counter = 0;

      case 1:
        if (! counter++) {
          context$1$0.next = 7;
          break;
        }

        if (!isPrime(counter)) {
          context$1$0.next = 5;
          break;
        }

        context$1$0.next = 5;
        return counter;

      case 5:
        context$1$0.next = 1;
        break;

      case 7:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

//
// Returns the first prime number greater
// than the number given.
//

function greaterThan(upper) {
  var highPrime = undefined;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = brutePrimeGenerator(upper)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prime = _step.value;

      highPrime = prime;
      if (highPrime > upper) {
        return highPrime;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"]) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

//
// Iterator solution
//

//
// Second-order helper functions
//
function not(fn) {
  var _arguments = arguments;

  return function () {
    return !fn.apply(null, _arguments);
  };
}

function multipleOf(val1) {
  return function (val2) {
    return val2 % val1 === 0;
  };
}

// const numbersIter = function* (from) {
//   let start = from || 0

//   while (start++) {
//     yield start
//   }
// }

var filterIter = regeneratorRuntime.mark(function filterIter(iterator, predicate) {
  var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, value;

  return regeneratorRuntime.wrap(function filterIter$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion2 = true;
        _didIteratorError2 = false;
        _iteratorError2 = undefined;
        context$1$0.prev = 3;
        _iterator2 = iterator[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
          context$1$0.next = 13;
          break;
        }

        value = _step2.value;

        if (!predicate(value)) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 10;
        return value;

      case 10:
        _iteratorNormalCompletion2 = true;
        context$1$0.next = 5;
        break;

      case 13:
        context$1$0.next = 19;
        break;

      case 15:
        context$1$0.prev = 15;
        context$1$0.t0 = context$1$0["catch"](3);
        _didIteratorError2 = true;
        _iteratorError2 = context$1$0.t0;

      case 19:
        context$1$0.prev = 19;
        context$1$0.prev = 20;

        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }

      case 22:
        context$1$0.prev = 22;

        if (!_didIteratorError2) {
          context$1$0.next = 25;
          break;
        }

        throw _iteratorError2;

      case 25:
        return context$1$0.finish(22);

      case 26:
        return context$1$0.finish(19);

      case 27:
      case "end":
        return context$1$0.stop();
    }
  }, filterIter, this, [[3, 15, 19, 27], [20,, 22, 26]]);
});

var primesIter = regeneratorRuntime.mark(function primesIter(iterator) {
  var numbers, value;
  return regeneratorRuntime.wrap(function primesIter$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        numbers = iterator || numbers(2);
        value = numbers.next().value;
        context$1$0.next = 4;
        return value;

      case 4:
        return context$1$0.delegateYield(primesIter(filterIter(numbers, not(multipleOf(value)))), "t0", 5);

      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, primesIter, this);
});