import assert from 'assert'
import HashSet from '../../dist/structures/HashSet'

// HashMap.has(key) always returns an integer
describe('HashSet', () => {
  let set = null

  beforeEach(() => set = new HashSet())
  afterEach(() => set = null)

  it('returns false if the value no present', function() {
    assert.equal(set.contains('test'), false)
  })

  it('inserts a value correctly', function() {
    set.insert('test')
    assert.equal(set.contains('test'), true)
  })

  it('returns false wheh trying to insert duplicate values', function() {
    set.insert('test')
    assert.equal(set.insert('test'), false)
  })

  it('can list all values in the set', function() {
    set.insert('test')
    set.insert('test2')
    set.insert('test2')
    set.insert('test3')

    assert.deepEqual(set.values(), ['test', 'test2', 'test3'])
  })
})
