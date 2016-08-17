import assert from 'assert'

//
// https://en.wikipedia.org/wiki/Digital_root
//
const addDigits = (num) => {
  num = num.split('')

  let res = ~~num[0] + ~~num[1]

  return res < 10 ? res : addDigits('' + res)
}

const addDigitsImproved = (num) => {
  return ~~num % 9
}

assert.equal(addDigits('38'), '2')
assert.equal(addDigits('22'), '4')

assert.equal(addDigitsImproved(38), 2)
assert.equal(addDigitsImproved(22), 4)
assert.equal(addDigitsImproved(2035), 1)
