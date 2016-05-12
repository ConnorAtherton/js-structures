let assert = require('assert')
let helpers = require('../../dist/strings/helpers')

describe('helpers', function() {
  it('capitalizes', function() {
    assert.equal(helpers.capitalize('test'), 'Test')
  })

  it('camelizes', function() {
    assert.equal(helpers.camelize('test_test'), 'testTest')
  })

  it('classifies', function() {
    assert.equal(helpers.classify('test_test'), 'TestTest')
  })
})
