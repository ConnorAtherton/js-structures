import { swap } from '../utils/swap'

export default class Heap {
  constructor(array = []) {
    this._array = array
    this.heapSize = array.length

    this.build()
  }

  get length() {
    return this._array.length
  }

  get next() {
    return this.valueFor(1)
  }

  get values() {
    return this._array.slice(0, this.heapSize)
  }

  empty() {
    return this.heapSize === 0
  }

  //
  // In an unsorted array we know that all elements above the middle
  // index will be leaf nodes so each is a trivial 1-element heap already.
  //
  build() {
    let middle = Math.floor(this.length / 2)

    while (middle > 0) {
      this.heapify(middle)
      middle--
    }

    return this
  }

  heapify(index = 1) {
    const leftIndex = this.leftIndex(index)
    const rightIndex = this.rightIndex(index)
    const value = this.valueFor(index)
    let largest = null

    // console.log('\ninspecting node', index)

    // Find out the largest of this and the left
    if (this.leftValue(index) > value) {
      largest = leftIndex
    } else {
      largest = index
    }

    // Work out which one of those two is the largest and choose it
    if (this.rightValue(index) > this.valueFor(largest)) {
      largest = rightIndex
    }

    // Means we need switched nodes keep the max-heap property
    // further down the heap
    if (largest !== index) {
      this.swapNode(index, largest)

      // console.log('-> swap', index, largest)
      // console.log('= After swap', this._array)

      this.heapify(largest)
    }

    return this
  }

  //
  // Removes the first element and ensures we still retain
  // the heap property we started with.
  //
  pop() {
    const next = this.next

    this.swapNode(1, this.length)
    this.heapSize--
    this.heapify(1)

    return next
  }


  // Map onto correct array index
  swapNode(origNode, swapNode) {
    swap(this._array, origNode - 1, swapNode - 1)

    return this
  }

  parentIndex(index) {
    return this.ifInHeap(Math.floor(index / 2))
  }

  leftIndex(index) {
    return this.ifInHeap(2 * index)
  }

  rightIndex(index) {
    return this.ifInHeap((2 * index) + 1)
  }

  //
  // TODO need to check that this index is actually
  // present in the heapSize
  //

  parentValue(index) {
    return this.valueFor(this.parentIndex(index))
  }

  leftValue(index) {
    return this.valueFor(this.leftIndex(index))
  }

  rightValue(index) {
    return this.valueFor(this.rightIndex(index))
  }

  // Largest element:
  //   array index = 0
  //   node number = 1
  //   left child = 2
  //   right child = 3
  valueFor(nodeNumber) {
    return this._array[nodeNumber - 1]
  }

  ifInHeap(index) {
    return index <= this.heapSize ? index : undefined
  }
}
