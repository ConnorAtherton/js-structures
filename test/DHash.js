var assert = require('assert')
var DHash = require('../dist/DHash')

describe('DHash', function() {
  var hash

  beforeEach(function() {
    hash = new DHash
  })

  it('should return a new instance of DHash', function() {
    assert.equal(hash instanceof DHash, true)
  });

  it('should start with an empty store', function() {
    assert.equal(Object.keys(hash.store).length, 0)
  });

  it('should set values', function() {
    hash.set('key', 'test')

    assert.equal(hash.get('key'), 'test')
  });

  it('should return undefined if the value is not stored', function() {
    assert.equal(hash.get('key'), undefined)
  });

  it('should destroy values after use', function() {
    hash.set('key', 'test')
    hash.get('key')

    assert.equal(hash.get('key'), undefined)
  });

  it('should override the key with setter if key does not already exist', function() {
    hash.get('key', function() {
      return 'value'
    })

    assert.equal(hash.get('key'), 'value')
  });

  it('should flush the store', function() {
    hash.set('key', 'test')
    hash.set('key2', 'test2')

    hash.flush()

    assert.equal(Object.keys(hash.store).length, 0)
  });
});
