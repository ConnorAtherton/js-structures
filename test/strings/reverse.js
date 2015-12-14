let assert = require('assert')
let reverse = require('../../dist/strings/reverse')

describe('reverse', function() {
  var even = ''
  var odd = ''
  let evenExpected = 'sesuoh'
  let oddExpected = 'esuoh'

  beforeEach(function() {
    even = 'houses'
    odd = 'house'
  })

  context('iterative', function() {
    it('reverses correctly', function() {
      assert.deepEqual(reverse.simple(even), evenExpected)
      assert.deepEqual(reverse.simple(odd), oddExpected)
    })
  })

  context('recursive', function() {
    it('reverses correctly', function() {
      assert.deepEqual(reverse.recursive(even), evenExpected)
      assert.deepEqual(reverse.recursive(odd), oddExpected)
    })
  })
})

