import assert from 'assert'
import { swap, stringSwap } from '../../dist/utils/swap'

describe('Util::Swap', () => {
  context('Array', () => {
    it('no-ops when the index are identical', () => {
      assert.deepEqual(swap([1, 2, 3], 1, 1), [1, 2, 3])
    })

    it('swaps array elements correctly', () => {
      assert.deepEqual(swap([1, 2, 3], 0, 2), [3, 2, 1])
    })

    it('swaps array elements correctly and mutates the reference', () => {
      let arr = [1, 2, 3]
      swap(arr, 0, 2)
      assert.deepEqual(arr, [3, 2, 1])
    })
  })

  context('String', () => {
    it('swaps string elements correctly', () => {
      assert.deepEqual(stringSwap('two', 0, 2), 'owt')
    })
  })
})
