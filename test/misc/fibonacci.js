let assert = require('assert')
let fibonacci = require('../../dist/misc/fibonacci')

describe('Fibonacci', function() {
  describe('recursive', function() {
    it('calculates base cases correctly correctly', () => {
      assert.equal(fibonacci.recursive(0), 1)
      assert.equal(fibonacci.recursive(1), 1)
    })

    it('calculates other cases correctly correctly', () => {
      assert.equal(fibonacci.recursive(2), 1)
      assert.equal(fibonacci.recursive(9), 34)
    })
  })

  describe('iterative', function() {
    it('calculates base cases correctly correctly', () => {
      assert.equal(fibonacci.iterative(0), 1)
      assert.equal(fibonacci.iterative(1), 1)
    })

    it('calculates other cases correctly correctly', () => {
      assert.equal(fibonacci.iterative(2), 1)
      assert.equal(fibonacci.iterative(9), 34)
    })
  })

  describe('infinite', function() {
    it('iterator produces infinite fibonacci sequence', () => {
      const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
      let acc = []

      for (let fib of fibonacci.infinite()) {
        if (fib > 1000) break

        acc.push(fib)
      }

      assert.deepEqual(acc, expected)
    })

    it('iterator produces finite fibonacci sequence with argument', () => {
      const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21]
      let acc = []

      for (let fib of fibonacci.infinite(9)) {
        acc.push(fib)
      }

      assert.deepEqual(acc, expected)
    })
  })
})

