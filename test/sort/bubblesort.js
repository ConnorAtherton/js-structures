let assert = require('assert')
let bubble = require('../../dist/sort/bubblesort')

describe('bubblesort', function() {
  let expected = [1, 2, 4, 5, 8]
  let file

  beforeEach(function() {
    file = [5, 1, 4, 2, 8]
  })

  it('sorts using naive solution', function() {
    // file = bubble.bubble(file)
    // assert.deepEqual(file, expected)
  })

  it('sorts using n - 1 loops', function() {

  })

  it('sorts switching direction each time', function() {

  })
})

