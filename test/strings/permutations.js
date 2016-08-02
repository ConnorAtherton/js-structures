import assert from 'assert'
import permutations from '../../dist/strings/permutations'

describe('permutations', function() {
  it('returns correct value for base cases', function() {
    assert.deepEqual(permutations(''), new Set)
    assert.deepEqual(permutations('a'), new Set(['a']))
  })

  it('returns correct value for simple cases', function() {
    assert.deepEqual(Array.from(permutations('ab')).sort(), ['ab', 'ba'].sort())
  })

  it('returns correct value for complex cases', function() {
    assert.deepEqual(Array.from(permutations('abc')).sort(), [
      'abc', 'bac', 'cab',
      'cba', 'bca', 'acb'
    ].sort())
  })
})
