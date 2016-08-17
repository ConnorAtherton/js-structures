//
// Queue
//
// An unbounded queue
// first-in-first-out data structure
//
// To support a bounded queue, we can change the store to be a circular array and have two more
// instance variables recording the start and end positions. If the array needs more size we grow
// it by a factor of 2 every time.
//
export default class Queue {
  constructor() {
    this.store = []
    this.size = 0
  }

  get empty() {
    return this.size === 0
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
