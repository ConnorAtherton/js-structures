import LinkedList from './LinkedList';
import Node from '../helpers/node'

export default class DoublyLinkedList extends LinkedList {
  constructor(node) {
    super(node)
  }

  union(list) {
    this.tail.next = list.head
    list.head.previous = this.tail
    this.tail = list.tail

    return this
  }

  toString() {
    let str = ''

    for (let node of this) {
      str += `${node.value} <-> `
    }

    str += 'null'

    return str
  }

  append(node) {
    node = (node instanceof Node) ? node : new Node(node)

    if (this.empty()) {
      this.head = this.tail = this.current = node
    } else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }

    this.length++

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
    this.head = this.current = this.tail
    this.tail = tmp

    return this
  }

}