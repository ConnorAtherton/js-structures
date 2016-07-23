import LinkedList from './LinkedList'
import Node from '../helpers/node'

export default class DoublyLinkedList extends LinkedList {
  constructor(node) {
    super(node)

    this.tail = this.head
  }

  clear() {
    this.head = null
    this.tail = null
    this.length = 0

    return this
  }

  push(val) {
    const node = (val instanceof Node) ? val : new Node(val)

    if (this.empty) {
      this.head = node
      this.tail = node
    } else {
      const oldTail = this.tail
      oldTail.next = node

      node.previous = oldTail
      node.next = null

      this.tail = node
    }

    this.length++

    return this
  }

  pop() {
    // Cannot pop an empty this
    if (this.empty) { return null }

    let oldNode = this.tail
    let newTail = this.tail.previous

    if (newTail) {
      newTail.next = null
    }

    this.length--

    return oldNode
  }

  unshift(node) {
    super.unshift(node)

    if (this.length === 1) {
      this.tail = this.head
    }

    return this
  }

  union(list) {
    this.tail.next = list.head
    list.head.previous = this.tail
    this.tail = list.tail

    return this
  }

  findNodeFromEnd(n) {
    if (n === 0) return this.tail
    if (n < 0 || n > this.length - 1) return null

    let node = this.tail

    while (n--) {
      node = node.previous
    }

    return node
  }

  toString() {
    let str = ''

    if (this.empty) {
      return str
    }

    for (let node of this.nodesForward()) {
      str += `${node.value} <-> `
    }

    str += 'null'

    return str
  }

  //
  // Generators, used to iterate over the list.
  //
  * nodesForward() {
    yield* this.nodes()
  }

  * nodesBackward() {
    let current = this.tail

    while (current !== null) {
      yield current
      current = current.previous
    }
  }

  //
  // Helper methods to make supporting the Deque structure easier
  //
  removeFirst() {
    this.head = this.head.next
    return this
  }

  removeLast() {
    this.tail = this.tail.previous
    return this
  }

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

  remove(node) {
    this.excise(node)
    this.length--

    return this
  }

  moveToHead(node) {
    this.excise(node)
    node.next = this.head
    this.head = this.current = node

    return this
  }

  reverse() {
    let tmp = null
    let node = this.head

    while (node) {
      tmp = node.previous
      node.previous = node.next
      node.next = tmp
      node = node.previous
    }

    // swap the references
    tmp = this.head
    this.head = this.tail
    this.tail = tmp

    return this
  }
}
