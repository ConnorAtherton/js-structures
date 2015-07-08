var assert = require('assert');
var memoize = require('../dist/memoize');

describe('memoize', function() {

  it('can handle a single argument', function() {
    var called = 0;
    var fib = memoize(function(n) {
      called++;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });

    fib(10);

    assert.equal(called, 11);
  });

  it('can handle named functions', function() {
    var called = 0;
    var fib = memoize(function toMemoize(n) {
      called++;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });

    fib(10);

    assert.equal(called, 11);
  });

  it('can handle function declerations', function() {
    var called = 0;
    var fib = null;

    function toMemoize(n) {
      called++;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    }

    fib = memoize(toMemoize)

    fib(10);

    assert.equal(called, 11);
  });

  it('can handle anonymous functions', function() {
    var called = 0;
    var fib = memoize(function(n) {
      called++;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });

    fib(2);

    assert.equal(called, 3);
  });

  it('can handle multiple arguments', function() {
    var called = 0;
    var fib = memoize(function(n, unused) {
      called++;
      if (n < 2) return n;
      return fib(n - 1, unused) + fib(n - 2, unused);
    });

    fib(10, 'x');
    fib(10, 'y');

    assert.equal(called, 22);
  })
})
