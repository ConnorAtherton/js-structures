let assert = require('assert')
let bubble = require('../../dist/sort/bubble')

describe('bubblesort', function() {
  let expected = [1, 2, 3, 4, 5, 8]
  let file

  beforeEach(function() {
    file = [5, 1, 4, 2, 8, 3]
  })

  it('sorts using a simple while loop', function() {
    file = bubble.whileLoop(file)
    assert.deepEqual(file, expected)
  })

  it('sorts using n - i loops', function() {
    file = bubble.simple(file)
    assert.deepEqual(file, expected)
  })

  it('sorts using n - i loops and short circuits', function() {
    file = bubble.simpleImproved(file)
    assert.deepEqual(file, expected)
  })

  it('sorts using remaining n - i passes', function() {
    file = bubble.remaining(file)
    assert.deepEqual(file, expected)
  })
})

