import assert from 'assert'
import BitSet from '../../dist/structures/BitSet'

describe('BitSet', function() {
  let set

  beforeEach(function() {
    set = new BitSet(64)
  })

  it('return correct string representation', function() {
    assert.equal(set.toString(), '0000000000000000000000000000000000000000000000000000000000000000')
  });

  it('should set a single bit correctly', function() {
    set.set(2)

    assert.equal(set.toString(), '0000000000000000000000000000010000000000000000000000000000000000')
  });

  it('should get a single bit correctly', function() {
    set.set(2)

    assert.equal(set.get(33), false)
    assert.equal(set.get(2), true)
  });
})
