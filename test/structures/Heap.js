import assert from 'assert'
import Heap from '../../dist/structures/Heap'

describe('Structures::Heap', function() {
  let heap

  it('should build a heap with an empty array', function() {
    heap = new Heap()

    assert.equal(heap.length, 0)
    assert.equal(heap.heapSize, 0)
  });

  // it('should maintain the max-heap property', function() {
  //   heap = new Heap()

  //   heap._array = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]
  //   heap.heapSize = 10
  //   heap.maxHeapify(2)

  //   assert.equal(heap._array, [16, 14, 10, 8, 7, 9, 3, 2, 4, 1])
  // });
})
