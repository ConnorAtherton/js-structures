import assert from 'assert'
import curry from '../../dist/functional/curry'

describe('curry', function() {
  it('curries the function at least once', function() {
    var add = curry(function(a, b) {
      return a + b
    })

    assert.equal(add(1, 2), 3)
  })

  it('allows passing some inital args to the curry function', function() {
    var add = curry(function(a, b, c) {
      return a + b + c
    }, 2, 3)

    assert.equal(add(1), 6)
  })

  it('curries the function until the arguments needed are given at least once', function() {
    var add = curry(function(a, b, c) {
      return a + b + c
    })

    assert.equal(add(1, 2)(3), 6)
  })


  it('curries the function until the arguments needed are given mutliple times', function() {
    var add = curry(function(a, b, c) {
      return a + b + c
    })

    assert.equal(add(1)(2)(3), 6)
  })

  it("doesn't share state between calls", function() {
    var add = curry(function(a, b, c) {
      return a + b + c
    })

    assert.equal(add(1)(2)(3), 6)
    assert.equal(add(2)(3)(4), 9)
  })
})
