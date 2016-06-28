import assert from 'assert'
import sort from '../../dist/sort/selection'

describe('Sort::Selection', function() {
  let expected = [1, 2, 3, 4, 5, 8]
  let file

  beforeEach(function() {
    file = [5, 1, 4, 2, 8, 3]
  })

  it('sorts correctly', function() {
    assert.deepEqual(sort(file), expected)
  })
})
