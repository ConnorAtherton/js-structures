import assert from 'assert'
import hashFromString from '../../dist/strings/hashFromString'

describe('hashFromString', function() {
  let hash

  it('returns an empty hash', () => {
    hash = hashFromString('', {}, function() {})
    assert.deepEqual(hash, {})
  })

  it('works with default parameters', () => {
    hash = hashFromString('one', {}, function() {})
    assert.deepEqual(hash, { one: null })
  })

  it('returns a hash one level deep', () => {
    hash = hashFromString('one', {}, function() {})
    assert.deepEqual(hash, { one: null })
  })

  it('sets the value of a function if it is given', () => {
    hash = hashFromString('one', {}, () => { return 1 })
    assert.deepEqual(hash, { one: 1 })
  })

  it('works 3 levels deep', () => {
    hash = hashFromString('one.two.three')
    assert.deepEqual(hash, { one: { two: { three: null } } })
  })

  it('passes the last element to the function', () => {
    hash = hashFromString('one.two.three', {}, key => key)
    assert.deepEqual(hash, { one: { two: { three: 'three' } } })
  })
})

