import assert from 'assert'
import BitSet from '../../dist/structures/BitSet'

xdescribe('BitSet', function() {
  let set

  beforeEach(function() {
    set = new BitSet
  })

  it('return correct string representation', function() {
    assert.equal(set.toString(), '00000000000000000000000000000000')
  });

  it('should set correctly', function() {
    assert.equal(set.set(), '00000000000000000000000000000000')
  });

  it('should get correctly', function() {
  });
})
