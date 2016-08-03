import assert from 'assert'
import housingRobber from '../../dist/problems/housingRobber'

console.log(housingRobber)

describe('Problems', function() {
  describe('housingRobber', function() {
    it('find the correct element with a housing list of length 0', function() {
      assert.equal(housingRobber([]), 0)
    })

    it('find the correct element with a housing list of length 1', function() {
      assert.equal(housingRobber([1]), 1)
    })

    it('find the correct element with a housing list of length 2', function() {
      assert.equal(housingRobber([1, 20]), 20)
    })

    it('find the correct element with a housing list of length 3', function() {
      assert.equal(housingRobber([1, 20, 18]), 20)
    })

    it('find the correct element with a housing list of length 5', function() {
      assert.equal(housingRobber([9, 20, 5, 15, 30]), 50)
    })
  })
})
