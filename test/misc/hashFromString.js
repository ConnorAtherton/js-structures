let assert = require('assert')
let hashFromString = require('../../dist/misc/hashFromString')

describe('', function() {
  it('returns an empty hash', () => {
    let hash = hashFromString('', {}, function() {})
    assert.deepEqual(hash, {})
  })

  // it('returns a hash one level deep', () => {
  //   let hash = hashFromString('one.two', {}, function() {})
  //   assert.deepEqual(hash, { one: undefined })
  // })
})

