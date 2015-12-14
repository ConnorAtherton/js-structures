let assert = require('assert')
let anagram = require('../../dist/strings/anagram')

describe('reverse', function() {
  let anagramNoSpaces = ['cinema', 'iceman']
  let notAnagram = ['two', '']
  let notAnagramLength = ['two', 'six']
  let anagramSpaces = ['cinema the', 'iceman het']

  it('returns false for non-anagrams where the lengths differ', function() {
    assert.equal(anagram(...notAnagram), false)
  })

  it('returns false for non-anagrams where the lengths are the same', function() {
    assert.equal(anagram(...notAnagramLength), false)
  })

  it('returns true for anagrams without spaces', function() {
    assert.equal(anagram(...anagramNoSpaces), true)
  })

  it('returns true for anagrams with spaces', function() {
    assert.equal(anagram(...anagramSpaces), true)
  })
})

