import assert from 'assert'
import Heap from '../../dist/structures/Heap'

describe('Structures::Heap', function() {
  let heap
  let data

  beforeEach(function() {
    data = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
  })

  it('should build a heap with an empty array', function() {
    heap = new Heap()

    assert.equal(heap.length, 0)
    assert.equal(heap.heapSize, 0)
  });

  it('should do nothing in we try to keep max-heap property on root node', function() {
    heap = new Heap()
    let heapArray = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]

    heap._array = heapArray
    heap.heapSize = 10
    heap.heapify(1)

    assert.deepEqual(heap.values, heapArray)
  });

  it('should maintain the max-heap property', function() {
    heap = new Heap()

    heap._array = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]
    heap.heapSize = 10
    heap.heapify(2)

    assert.deepEqual(heap.values, [16, 14, 10, 8, 7, 9, 3, 2, 4, 1])
  });

  it('should build a heap with an unsorted array correctly', function() {
    heap = new Heap(data)

    assert.deepEqual(heap.values, [16, 14, 10, 8, 7, 9, 3, 2, 4, 1])
  });

  it('should return the maximum for a built heap', function() {
    heap = new Heap(data)

    assert.deepEqual(heap.next, 16)
  });

  it('should return the top element in a modified heap', function() {
    heap = new Heap(data)
    let max = heap.pop()

    assert.equal(max, 16)
    assert.deepEqual(heap.values, [14, 8, 10, 4, 7, 9, 3, 2, 1])
  });

  it('should insert new values and keep the heap constraints', function() {
    heap = new Heap(data)
    heap.insert(17)

    assert.equal(heap.next, 17)
    assert.deepEqual(heap.values, [17, 16, 10, 8, 14, 9, 3, 2, 4, 1, 7])

    heap.insert(11)
    assert.deepEqual(heap.values, [17, 16, 11, 8, 14, 10, 3, 2, 4, 1, 7, 9])
  });
})
