let assert = require('assert')
let calculate = require('../../dist/misc/minimumCoins')

describe('Minimum coins', () => {
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

})
