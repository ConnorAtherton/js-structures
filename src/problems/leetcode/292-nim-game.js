import assert from 'assert'

const canWin = (n) => return n % 4 !== 0

assert.equal(canWin(4), false)
assert.equal(canWin(5), true)
