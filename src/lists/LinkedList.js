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

  // Removes node from the end of the list
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

    if (this.empty) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }

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

  // moveToHead(node) {
  //   this.excise(node)
  //   node.next = this.head
  //   this.head = this.current = node

  //   return this
  // }

  get empty() {
    return this.length === 0
  }

  //
  // Joins the current list to another list in O(1) time.
  //
  // TODO: Duplicate the current object first?
  //
  union(list) {
    this.tail.next = list.head

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
  findNodeFromEnd(n) {
    if (n < 0) {
      throw new Error('n must be a positive integer')
    }

    let slow = this.head
    let fast = this.head

    // Advanmce th fast pointer n numbers in from
    while (n--) {
      fast = fast.next
    }

    // iterate both pointers through until the fast [pointer is at the end
    while (fast && fast.next !== null) {
      slow = slow.next
      fast = fast.next
    }

    return slow
  }

  findValueFromEnd(n) {
    return findNodeFromEnd(n).value
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

    if (this.empty) {
      return str
    }

    for (let node of this.nodes()) {
      str += `${node.value} -> `
    }

    str += 'null'

    return str
  }
}
