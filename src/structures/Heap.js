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

  //
  // In an unsorted array we know that all elements above the middle
  // index will be leaf nodes so each is a trivial 1-element heap already.
  //
  build() {
    let middle = Math.floor(this.length / 2)

    while (middle > 0) {
      this.maxHeapify(middle)
      middle--
    }

    return this
  }

  maxHeapify(index = 0) {
    const leftIndex = this.leftIndex(index)
    const rightIndex = this.rightIndex(index)

    console.log(leftIndex, rightIndex)

    let largest = null
    const value = this.valueFor(index)

    if (this.leftValue(index) > value) {
      largest = left
    } else if (this.rightValue(index) > value) {
      largest = right
    } else {
      largest = index
    }

    console.log('started - largest ->', index, largest)

    // Means we need switched nodes keep the max-heap property
    // further down the heap
    if (largest !== index) {
      swap(this._array, index, largest)
      this.maxHeapify(largest)
    }

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
    return this._array[this.parentIndex(index)]
  }

  leftValue(index) {
    return this._array[this.leftIndex(index)]
  }

  rightValue(index) {
    return this._array[this.rightIndex(index)]
  }

  valueFor(index) {
    return this._array[index]
  }

  ifInHeap(index) {
    return index <= this.heapSize ? index : undefined
  }
}
