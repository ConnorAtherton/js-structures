import assert from 'assert'
import { counting, sorting } from '../../dist/strings/anagram'

describe('anagram', function() {
  let anagramNoSpaces = ['cinema', 'iceman']
  let notAnagram = ['two', '']
  let notAnagramLength = ['two', 'six']
  let anagramSpaces = ['cinema the', 'iceman het']

  it('returns false for non-anagrams where the lengths differ', function() {
    assert.equal(counting(...notAnagram), false)
    assert.equal(sorting(...notAnagram), false)
  })

  it('returns false for non-anagrams where the lengths are the same', function() {
    assert.equal(counting(...notAnagramLength), false)
    assert.equal(sorting(...notAnagramLength), false)
  })

  it('returns true for anagrams without spaces', function() {
    assert.equal(counting(...anagramNoSpaces), true)
    assert.equal(sorting(...anagramNoSpaces), true)
  })

  it('returns true for anagrams with spaces', function() {
    assert.equal(counting(...anagramSpaces), true)
    assert.equal(sorting(...anagramSpaces), true)
  })
})

