import Node from './helpers/node'

export default class LinkedList {
  constructor(node = null) {
    this.head = this.tail = (node instanceof Node) ? node : null;
    this.length = node ? 1 : 0;
    this.current = this.head
  }

  // Adds node to the end of the list
  append(node) {
    node = (node instanceof Node) ? node : new Node(node);

    if (this.empty()) {
      this.head = this.tail = this.current = node;
    } else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }

    this.length++

    return this
  }

  // Adds node to the start of the list
  prepend(node) {
    node = (node instanceof Node) ? node : new Node(node);

    if (this.empty()) {
      this.head = this.tail = this.current = node;
    } else {
      this.head.previous = node
      node.next = this.head
      this.head = node
      this.current = node
    }

    this.length++

    return this
  }

  // Removes node from the end of the list
  pop() {
    let node = this.tail

    if (this.tail.previous) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      this.tail = null
    }

    this.length--;

    return node
  }

  // Removes node from the start of the list
  lpop() {
    let node = this.head

    if (this.head.next) {
      this.current = this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.current = this.head = null;
    }

    this.length--;

    return node
  }

  moveToHead(node) {
    this.excise(node);
    node.next = this.head;
    this.head = this.current = node;

    return this
  }

  remove(node) {
    this.excise(node);
    this.length--

    return this
  }

  excise(node) {
    let previous = node.previous;
    let next = node.next;

    if (previous !== null) previous.next = next;
    if (next !== null)     next.previous = previous;

    if (this.head === node) this.head = this.current = next;
    if (this.tail === node) this.tail = previous;

    return this;
  }

  empty() {
    return this.length === 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    let obj = null;

    if (this.current === null) {
      return { done: true }
    } else {
      obj = { value: this.current, done: false }
      this.current = this.current.next
      return obj
    }
  }

  //
  // Called when the iterator ends prematurely (abruptly)
  // Caused by the following
  //
  // - break
  // - return
  // - throw
  // - continue (can act like a break if in outer loop)
  //
  reset() {
    this.current = this.head
  }

  return() {
    this.current = this.head
  }
}
