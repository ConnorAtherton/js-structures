let assert = require('assert')
let palindrome = require('../../dist/strings/palindrome.js')

describe('palindrome', function() {
  context('iterative', function() {
    it('returns true for base cases', function() {
      assert.equal(palindrome.iterative(''), true)
      assert.equal(palindrome.iterative('a'), true)
    })

    it('works for single case palindromes', function() {
      assert.equal(palindrome.iterative('dot saw i was tod'), true)
    })

    it('works for mixed cases palindromes', function() {
      assert.equal(palindrome.iterative('Dot saw I was Tod'), true)
    })

    it('returns false for non-palindromes', function() {
      assert.equal(palindrome.iterative('saw war'), false)
    })
  })

  context('recursive', function() {
    it('returns false for non-palindromes', function() {
      assert.equal(palindrome.recursive('saw war'), false)
    })
  })
})
