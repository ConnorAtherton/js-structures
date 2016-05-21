import assert from 'assert'
import calculate from '../../dist/misc/minimumCoins'

describe('minimumCoins', () => {
  let results

  beforeEach(() => {
    results = {}
  })

  it('works', () => {
    results = {
      100: 1
    }

    assert.deepEqual(calculate(100), results)
  })

  it('works with values larger than the greatest coin value', () => {
    results = {
      200: 1,
      20: 1,
      5: 1
    }

    assert.deepEqual(calculate(225), results)
  })
})
