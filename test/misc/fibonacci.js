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
})

