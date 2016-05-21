import assert from 'assert'
import firstNonRepeated from '../../dist/strings/repeating'

context('repeated', function() {
  let string = 'eeerrrriooooppppe'

  it('#firstNonRepeated', function() {
    assert.deepEqual(firstNonRepeated(string), 'i')
  })
})
