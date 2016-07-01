//
// Priority queue
//
// A Priority Queue is a data structure that behaves like a queue except that elements have an
// associated priority.
//
import Heap from './DHash'

export default class PriorityQueue {
  constructor() {
    this._heap = new Heap()
  }

  get length() {
    return this._heap.length
  }

  empty() {
    return this._heap.empty()
  }

  //
  // Returns the object with the next highest priority but
  // does not remove it.
  //
  peek() {
    return this._heap.first
  }

  pop() {
    return this._heap.pop()
  }

  push() {

  }
}
