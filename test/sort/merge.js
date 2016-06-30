import assert from 'assert'
import { sort, merge } from '../../dist/sort/merge'

describe('Sort::Merge', function() {
  let expected = [1, 2, 3, 4, 5, 8]
  let file

  beforeEach(function() {
    file = [5, 1, 4, 2, 8, 3]
  })

  it('merges small even arrays correctly', function() {
    let a = [5, 1]

    merge(a)

    assert.deepEqual(a, [1, 5])
  })

  it('merges small odd arrays correctly', function() {
    // Note: the two sub-arrays needs to be sorted for this to work
    let a = [1, 3, 4, 2, 5]

    merge(a)

    assert.deepEqual(a, [1, 2, 3, 4, 5])
  })

  it('sorts correctly for even collection', function() {
    sort(file)

    assert.deepEqual(file, expected)
  })

  it('sorts correctly for odd collection', function() {
    let file = [5, 1, 4, 10, 2, 8, 3]
    sort(file)

    assert.deepEqual(file, [1, 2, 3, 4, 5, 8, 10])
  })
})
