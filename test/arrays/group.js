import assert from 'assert'
import group from '../../dist/arrays/group'

describe('group', function() {
  let value = null

  it('runs', function() {
    const arr = [1, 3, 4, 5, 7, 9, 10]

    assert.deepEqual(group(arr), [
      [1],
      [3, 4, 5],
      [7],
      [9, 10]
    ])
  })
})
