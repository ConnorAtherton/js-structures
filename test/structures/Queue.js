import assert from 'assert'
import Queue from '../../dist/structures/Queue'

describe('Queue', function() {
  let queue

  beforeEach(function() {
    queue = new Queue
  })

  it('should start empty', function() {
    assert.equal(queue instanceof Queue, true)
    assert.equal(queue.size, 0)
    assert.equal(queue.dequeue(), undefined)
  });

  it('should enqueue correctly', function() {
    queue.enqueue(1).enqueue(2)
    assert.equal(queue.size, 2)
  });

  it('should dequeue correctly', function() {
    queue.enqueue(1).enqueue(2)
    assert.equal(queue.dequeue(), 1)
  });
})
