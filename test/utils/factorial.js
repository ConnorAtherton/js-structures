import assert from 'assert'
import * as factorial from '../../dist/utils/factorial'

describe('Factorial', () => {
  it('brute works', () => {
    assert.equal(factorial.brute(1), 1)
    assert.equal(factorial.brute(10), 3628800)
  })

  it('recursive works', () => {
    assert.equal(factorial.recursive(1), 1)
    assert.equal(factorial.recursive(10), 3628800)
  })

  it('tail recursive works', () => {
    assert.equal(factorial.recursive(1), 1)
    assert.equal(factorial.recursive(10), 3628800)
  })
})
