import assert from 'assert'
import {
  loop,
  sort,
  single
} from '../../dist/arrays/difference'

describe('#difference', function() {
  let values

  beforeEach(function() {
    values = [1, 1, 3, 5, 9, 10, 3, 4]
  })

  it('works with a double loop', () => {
    assert.equal(loop(values), 9)
  })

  it('works sorting first', () => {
    assert.equal(sort(values), 9)
  })

  it('works recording values in a single pass', () => {
    assert.equal(single(values), 9)
  })
})
