//
// Heapsort
//
// Time: O(n lg n)
//
import Heap from '../structures/Heap'

export default function heapsort(arr) {
  // Builds a max heap
  const heap = new Heap(arr)

  // display nice with test output
  // console.log('\nHeapsort ~')

  // This represents the node number, not the array index
  for (let end = heap.length; end > 0; end--) {
    // console.log('Sort step =', heap._array.slice(0, heap.heapSize))
    heap.swapNode(1, end)

    // Means we can't access end node in the heap
    heap.heapSize--

    heap.heapify(1)
  }

  return arr
}

