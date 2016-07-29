import assert from 'assert'
import HashMap from '../../dist/structures/HashMap'

// HashMap.has(key) always returns an integer
describe('HashMap', () => {
  let hash = null

  beforeEach(() => hash = new HashMap())
  afterEach(() => hash = null)

  it('is initialized correctly', () => {
    assert.equal(hash.maxSize, HashMap.maxSize)
    // assert.equal(hash.keys.length(), 0)
    // assert.equal(hash.keys.values(), 0)
  })

  it('returns false when a key is not present', () => {
    assert.equal(hash.hasKey('key'), false)
  })

  it('know whether a key is present', () => {
    hash.set('key', 'value')
    assert.equal(hash.hasKey('key'), true)
  })

  it('returns null if there is no value for a given key', () => {
    assert.equal(hash.get('key'), null)
  })

  it('can set and retrieve a primitive value', () => {
    hash.set('key', 'value')
    assert.equal(hash.get('key'), 'value')
  })

  it('can set and retrieve a reference value', () => {
    let val = {}
    hash.set('key', {})
    assert.deepEqual(hash.get('key'), val)
  })

  it('stores keys', () => {
    hash.set('key', {})
    hash.set('key1', {})
    assert.deepEqual(hash.keys, ['key', 'key1'])
  })

  it('stores values', () => {
    hash.set('key1', 'value1')
    hash.set('key2', 'value2')
    assert.deepEqual(hash.values(), ['value1', 'value2'])
  })

  it('replaces existing keys', () => {
    hash.set('key', 'value1')
    hash.set('key', 'value2')
    assert.deepEqual(hash.get('key'), 'value2')
  })

  it('deletes keys correctly', () => {
    hash.set('key', 'value')
    assert.equal(hash.get('key'), 'value')
    hash.deleteKey('key')
    assert.equal(hash.get('key'), null)
    assert.deepEqual(hash.keys, [])
  })

  //
  // TODO: test the distribution after getting the prime
  // number generator working.
  //

})

