let assert = require('assert')
let utils = require('../../dist/arrays/utils')

describe('utils', function() {
  let value = null

  describe('.uniq', function() {
    it('removes duplicate items in array', function() {
      value = utils.uniq([1, 2, 3, 3, 4, 4, 5, 1])
      assert.deepEqual(value, [1, 2, 3, 4, 5])
    })
  })

  describe('.uniqBrute', function() {
    it('removes duplicate items in array', function() {
      value = utils.uniqBrute([1, 2, 3, 3, 4, 4, 5, 1])
      assert.deepEqual(value, [1, 2, 3, 4, 5])
    })
  })

  describe('.uniqIndexing', function() {
    it('removes duplicate items in array', function() {
      value = utils.uniqIndexing([1, 2, 3, 3, 4, 4, 5, 1])
      assert.deepEqual(value, [1, 2, 3, 4, 5])
    })
  })

  describe('.intersectionSorted', function() {
    it('handles edge cases correctly', function() {
      value = utils.intersectionSorted([], [])
      assert.equal(value.length, 0)
    })

    it('can calculate the intersection of sorted arrays', function() {
      value = utils.intersectionSorted([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
      assert.deepEqual(value, [3, 4, 5])
    })
  })

  describe('.intersectionUnsorted', function() {
    it('can calculate the intersection of unsorted arrays', function() {
      value = utils.intersectionUnsorted([1, 3, 5, 4, 2, 7], [3, 5, 8, 6, 7])
      assert.deepEqual(value, [3, 5, 7])
    })

    it('return a set', function() {
      value = utils.intersectionUnsorted([1, 3, 5, 3, 4, 2, 7], [3, 5, 7, 8, 6, 7])
      assert.deepEqual(value, [3, 5, 7])
    })
  })

  describe('.intersectionUnsortedBinary', function() {
    it('can calculate the intersection of unsorted arrays', function() {
      value = utils.intersectionUnsortedBinary([5, 4, 3, 2, 1], [3, 4, 5, 6, 7])
      assert.deepEqual(value, [3, 4, 5])
    })
  })

  describe('.remove', function() {
    it('removes a reference object from an array', function() {
      let el = [2]
      let arr = [[1], el, [3]]

      assert.deepEqual(utils.remove(arr, el), [[1], [3]])
    })
  })

  describe('.repeat', function() {
    it('repeats an array', function() {
      let arr = [1, 3, 2]

      assert.deepEqual(utils.repeat(arr, 2), [1, 1, 1, 2, 2, 2, 3, 3, 3])
    })
  })
})
