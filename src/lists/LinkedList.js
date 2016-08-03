//
// Linked List
//
// An ordered collection, can also be thought of as a sequence.
//
// NOTE: We aren't storing the tail in this implementation.
//
// TODO
//
// 1) Write a method that accepts a predicate as its only argument and
// removes any node where the value matches the predicate.
//
// 2) Write the above function again but instead return a list containing all
// nodes matching the predicate.
//
// 6) Given two linked lists, return the intersection of the two lists: i.e. return a list
//    containing only the elements that occur in both of the input lists.
//
//

import Node from '../helpers/node'
import { randomFromRange } from '../utils/random'

export default class LinkedList {
  constructor(node = null) {
    this.head = (node instanceof Node) ? node : null
    this.length = node ? 1 : 0
  }

  // Adds node to the end of the list
  push(node) {
    node = (node instanceof Node) ? node : new Node(node)

    if (this.empty) {
      this.head = node
    } else {
      this.findNodeFromEnd(0).next = node
    }

    node.next = null
    this.length++

    return this
  }

  pop() {
    // Cannot pop an empty this
    if (this.empty) {
      return null
    }

    let newTail = this.findNodeFromEnd(1)
    let oldNode = null

    if (newTail) {
      oldNode = newTail.next
      newTail.next = null
      this.length--
    }

    return oldNode
  }

  // Adds node to the start of the list
  unshift(node) {
    node = (node instanceof Node) ? node : new Node(node)

    if (!this.empty) {
      node.next = this.head
    }

    this.head = node
    this.length++

    return this
  }

  // Removes node from the start of the list
  shift() {
    let node = this.head

    if (node.next) {
      this.head = this.head.next
    } else {
      this.head = null
    }

    this.length--

    return node
  }

  moveToHead(node) {
    this.remove(node)
    node.next = this.head
    this.head = node

    return this
  }

  get empty() {
    return this.length === 0
  }

  union(list) {
    this.findNodeFromEnd(0).next = list.head

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

    this.head = previous

    return this
  }

  //
  // Given a singly linked list, find the nth element from the end.
  //
  findNodeFromEnd(n) {
    if (n < 0 || n > this.length) {
      return null
    }

    let slow = this.head
    let fast = this.head

    // Advance the fast pointer n numbers in from the start
    while (n--) {
      fast = fast.next
    }

    // iterate both pointers through until the fast pointer is at the end
    //
    // Need the first condition in case the list is empty.
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next
    }

    return slow
  }

  nodeAtIndex(index) {
    return this.findNodeFromEnd(this.length - index - 1)
  }

  //
  // Since we can't look backwards this will be O(n)
  //
  remove(node) {
    let slow = this.head
    let fast = this.head

    while (fast !== null) {
      // Switch references
      if (fast == node) {
        // Remove node references
        fast == this.head
          ? this.head = this.head.next
          : slow.next = fast.next

        // mark it for deletion by GC
        fast = null
        this.length--

        break
      }

      fast = fast.next
    }

    return this
  }

  * nodes () {
    let current = this.head

    while (current !== null) {
      yield current
      current = current.next
    }
  }

  toString() {
    let str = ''

    if (this.empty) {
      return str
    }

    for (let node of this.nodes()) {
      str += `${node.value} -> `
    }

    str += 'null'

    return str
  }

  //
  // Returns true if a cycle is found in the list
  //
  // NOTE: How can we make this return the start node of the cycle?
  //
  hasCycle() {
    let slow = this.head
    let fast = this.head

    // Fast pointer reached the end so no cycle
    if (fast.next === null || fast.next.next === null) {
      return false
    }

    fast = fast.next.next

    while (slow && fast && fast.next) {
      // Found the cycle
      if (slow === fast) {
        return true
      }

      // Fast pointer moves twice as quick
      slow = slow.next
      fast = fast.next.next
    }
  }

  //
  // Returns a random node in the list
  //
  random() {
    const index = randomFromRange(0, this.length - 1)

    return this.nodeAtIndex(index)
  }

  //
  // There is linked list of millions of node and you do not know the length of it.
  // Write a function which will return a random node from the list.
  //
  // Knuth random sampling of stream
  //
  //
  randomWithoutLength() {
    if (this.empty) {
      return null
    }

    let currentElement = this.head
    let current = this.head
    let currentIndex = 1
    let randomNumber = null

    while (current.next !== null) {
      current = current.next
      currentIndex++

      randomNumber = randomFromRange(1, currentIndex)

      if (randomNumber === 1) {
        currentElement = current
      }
    }

    return currentElement
  }
}
