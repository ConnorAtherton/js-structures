let assert = require('assert')
let quick = require('../../dist/sort/quick')

describe('quicksort', function() {
  let expected = [1, 2, 3, 4, 5, 8]
  let file

  beforeEach(function() {
    file = [5, 1, 4, 2, 8, 3]
  })

  it('sorts using simple concats', function() {
    file = quick.simple(file)
    assert.deepEqual(file, expected)
  })

  it('sorts using simple partitiion', function() {
    quick.simpleSwap(file)
    assert.deepEqual(file, expected)
  })
})

