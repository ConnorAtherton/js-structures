import assert from 'assert'
import TupleMap from '../dist/tupleMap'

describe('TupleMap', () => {
  let tuple = null

  beforeEach(() => {
    tuple = new TupleMap()
  })

  it('initalizes with an empty store', () => {
    assert.deepEqual(tuple.values, [])
    assert.deepEqual(tuple.keys, [])
  })

  it('returns null if no key is found', () => {
    tuple.set('key', 'value')
    assert.equal(tuple.get('noKey'), null)
  })

  it('adds keys correctly', () => {
    tuple.set('key1', 'value1')
    assert.equal(tuple.get('key1'), 'value1')
  })

  it('overrides previously defined keys', () => {
    tuple.set('key1', 'value1')
    assert.equal(tuple.get('key1'), 'value1')
    tuple.set('key1', 'value2')
    assert.equal(tuple.get('key1'), 'value2')
  })

  it('knows when it has keys', () => {
    tuple.set('key1', 'value1')
    assert.equal(tuple.hasKey('key1'), true)
    assert.equal(tuple.hasKey('key2'), false)
  })

  it('stores the correct length', () => {
    tuple.set('key', 'value')
    assert.equal(tuple.length, 1)
  })

  it('can return all keys', () => {
    tuple.set('key1', 'value1')
    tuple.set('key2', 'value2')
    tuple.set('key3', 'value3')
    assert.deepEqual(tuple.keys, ['key1', 'key2', 'key3'])
  })

  it('can return all values', () => {
    tuple.set('key1', 'value1')
    tuple.set('key2', 'value2')
    tuple.set('key3', 'value3')
    assert.deepEqual(tuple.values, ['value1', 'value2', 'value3'])
  })

  it('can remove values added first', () => {
    tuple.set('key', 'value')
    assert.deepEqual(tuple.values, ['value'])
    tuple.deleteKey('key')
    assert.deepEqual(tuple.values, [])
  })

  it('can remove values added last', () => {
    tuple.set('key1', 'value1')
    tuple.set('key2', 'value2')
    tuple.deleteKey('key2')
    assert.deepEqual(tuple.values, ['value1'])
  })
})
