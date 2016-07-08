//
// Deque
//
// Allows items to be added and removed from both the front and back,
// acting as a combination of a Stack and Queue.
//
import DoublyLinkedList from '../lists/DoublyLinkedList'

export default class Deque {
  constructor() {
    this._list = new DoublyLinkedList()
  }

  pushFront(val) {

  }

  pushBack(val) {

  }

  popFront() {

  }

  popBack() {

  }

  //
  // Iterates in FIFO order, Queue order
  //
  eachForward(fn) {

  }

  //
  // Iterates in LIFO order, Stack order
  //
  eachBackward(fn) {

  }
}

