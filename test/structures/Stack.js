import assert from 'assert'
import Stack from '../../dist/structures/Stack'

describe('Stack', function() {
  let stack

  beforeEach(function() {
    stack = new Stack
  })

  it('is empty to start with', function() {
    assert.equal(stack instanceof Stack, true)
    assert.equal(stack.size, 0)
    assert.equal(stack.pop(), undefined)
  });

  it('pops', function() {
    stack.push(1).push(2)
    assert.equal(stack.pop(), 2)
    assert.equal(stack.size, 1)
  });

  it('doesn\'t decrease size when popping empty stack', function() {
    stack.pop()
    assert.equal(stack.size, 0)
  });
})
