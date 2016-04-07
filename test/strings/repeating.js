let assert = require('assert')
let firstNonRepeated = require('../../dist/strings/repeating')

console.log(firstNonRepeated)

describe('repeated', function() {
  let string = 'eeerrrriooooppppe'

  it('runs', function() {
    assert.deepEqual(firstNonRepeated(string), 'i')
  })
})
