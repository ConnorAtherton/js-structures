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
// 6) Given two linked lists, return the intersection of the two lists: i.e. return a list
//    containing only the elements that occur in both of the input lists.
//
// 7) There is linked list of millions of node and you do not know the length of it. Write
//    a function which will return a random number from the list.
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

  // moveToHead(node) {
  //   this.excise(node)
  //   node.next = this.head
  //   this.head = this.current = node

  //   return this
  // }

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

  //
  // Given a singly linked list, find the nth element from the end.
  //
  findElementFromEnd(n) {
    let slow = this.head
    let fast = this.head

    // Advanmce th fast pointer n numbers in from
    while (n--) {
      fast = fast.next
    }

    // iterate both pointers through until the fast [pointer is at the end
    while (fast.next !== null) {
      slow = slow.next
      fast = fast.next
    }

    return slow.value
  }

  // TODO: Support deleting by node reference of by value
  //
  // Since we can't look backwards this will be O(n)
  remove(node) {
    let slow = this.head
    let fast = this.head

    while (fast.next !== null) {
      // Switch references
      if (fast == node) {
        console.log('Found node', fast)

        if (fast == this.head) {
          this.head = this.head.next
        } else {
          slow.next = fast.next
        }

        // mark it for deletion by CG
        fast = null
        this.length--
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
