//
// Queue
//
// An unbounded queue
// first-in-first-out data structure
//
export default class Queue {
  constructor() {
    this.store = []
    this.size = 0
  }

  enqueue(value) {
    this.store.unshift(value)
    this.size++
    return this
  }

  dequeue() {
    let val = this.store.pop()
    this.size--
    return val
  }
}
