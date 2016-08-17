//
// Stack
//
// An unbounded stack
// last-in-first-out data structure
//
export default class Queue {
  constructor() {
    this.store = []
    this.size = 0
  }

  get empty() {
    return this.size === 0
  }

  pop() {
    if (this.size === 0) { return null }
    let val = this.store.pop()
    this.size--
    return val
  }

  peek() {
    return this.store[this.size - 1]
  }

  push(value) {
    this.store.push(value)
    this.size++
    return this
  }
}

