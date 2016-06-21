import Node from '../helpers/node'

//
// TODO
//
// -> Split into subclasses with doubly and singly linked and an a common interface for both.
//
// 1) Write a method that accepts a predicate as its only argument and
// removes any node where the value matches the predicate.
//
// 2) Write the above function again but instead return a list containing all
// nodes matching the predicate.
//
// 3) Test for a cycle in the list.
//
// 4) Select a random node.
//
// 5) Given a singly linked list, find the 3rd element from the end.
//

export default class LinkedList {
  constructor(node = null) {
    this.head = this.tail = (node instanceof Node) ? node : null
    this.length = node ? 1 : 0
    this.current = this.head
  }

  // Adds node to the end of the list
  append(node) {
    node = (node instanceof Node) ? node : new Node(node)

    if (this.empty()) {
      this.head = this.tail = this.current = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++

    return this
  }

  // Adds node to the start of the list
  prepend(node) {
    node = (node instanceof Node) ? node : new Node(node)

    if (this.empty()) {
      this.head = this.tail = this.current = node
    } else {
      this.head.previous = node
      node.next = this.head
      this.head = this.current = node
    }

    this.length++

    return this
  }

  // Removes node from the end of the list
  pop() {
    let node = this.tail

    if (this.tail.previous) {
      this.tail = this.tail.previous
      this.tail.next = null
    } else {
      this.tail = null
    }

    this.length--

    return node
  }

  // Removes node from the start of the list
  lpop() {
    let node = this.head

    if (this.head.next) {
      this.current = this.head = this.head.next
      this.head.previous = null
    } else {
      this.current = this.head = null
    }

    this.length--

    return node
  }

  moveToHead(node) {
    this.excise(node)
    node.next = this.head
    this.head = this.current = node

    return this
  }

  remove(node) {
    this.excise(node)
    this.length--

    return this
  }

  // Remove a node from a doubly linked list
  excise(node) {
    let previous = node.previous
    let next = node.next

    if (previous !== null) {
      previous.next = next
    }

    if (next !== null) {
      next.previous = previous
    }

    if (this.head === node) {
      this.head = this.current = next
    }

    if (this.tail === node) {
      this.tail = previous
    }

    return this
  }

  empty() {
    return this.length === 0
  }

  //
  // Joins the current list to another list in O(1) time.
  //
  // TODO: Duplicate the current object first?
  //
  union(list) {
    this.tail.next = list.head
    this.tail = list.tail

    return this
  }

  // Time Complexity : O(n)
  //   We have to traverse every element
  // Space Complexity : O(1)
  //   Only using two pointers
  //
  // Reverses a singly-linked list.
  reverse() {
    let previous = null
    let next = null
    let current = this.head

    while (current !== null) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.head = this.current = previous

    return this
  }

  toString() {
    let str = ''

    for (let node of this) {
      str += `${node.value} -> `
    }

    str += 'null'

    return str
  }

  [Symbol.iterator]() {
    return this
  }

  next() {
    let obj = null

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