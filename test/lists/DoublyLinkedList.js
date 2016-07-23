import assert from 'assert'
import DoublyLinkedList from '../../dist/lists/DoublyLinkedList.js'
import Node from '../../dist/helpers/node'

describe('Lists::DoublyLinkedList', function() {
  let llist
  let node

  beforeEach(function() {
    llist = new DoublyLinkedList
  })

  afterEach(function() {
    llist = null
  })

  describe('starting empty', function() {
    beforeEach(function() {
      llist = new DoublyLinkedList
    })

    it ('should have 0 length', function() {
      assert.equal(llist.length, 0)
    })

    it ('tail and head should be null', function() {
      assert.equal(llist.tail, null)
      assert.equal(llist.head, null)
    })

    it ('Should stringify to an empty string', function() {
      assert.equal(llist.toString(), '')
    })
  })

  describe('passing node to the constructor', function() {
    beforeEach(function() {
      node = new Node(1)
      llist = new DoublyLinkedList(node)
    })

    it('should have correct size', function() {
      assert.equal(llist.length, 1)
    })

    it('should have correct head and tail', function() {
      assert.equal(llist.tail, node)
      assert.equal(llist.head, node)
    })
  })

  describe('.clear', function() {
    it('resets all information to null', function() {
      llist.push(1).push(2).push(3)

      assert.equal(llist.length, 3)
      assert.equal(llist.head.value, 1)
      assert.equal(llist.tail.value, 3)

      llist.clear()

      assert.equal(llist.length, 0)
      assert.equal(llist.head, null)
      assert.equal(llist.tail, null)
    })
  })

  describe('#toString', function() {
    beforeEach(function() {
      llist = new DoublyLinkedList(node)
      llist.push(2).push(3).push(4)
    })

    it('Can print out the list correctly', function() {
      assert.equal(llist.toString(), '1 <-> 2 <-> 3 <-> 4 <-> null')
    })
  })

  describe('iterating', function() {
    beforeEach(function() {
      llist = new DoublyLinkedList().push(1).push(2).push(3)
    })

    it('#nodesForward', function() {
      let res = []

      for (let node of llist.nodesForward()) {
        res.push(node.value)
      }

      assert.deepEqual(res, [1, 2, 3])
    })

    it('#nodesBackward', function() {
      let res = []

      for (let node of llist.nodesBackward()) {
        res.push(node.value)
      }

      assert.deepEqual(res, [3, 2, 1])
    })
  })

  //
  // List operations
  //
  it('#push', function() {
    assert.equal(llist.toString(), '')

    llist.push(1).push(2)

    assert.equal(llist.toString(), '1 <-> 2 <-> null')
    assert.equal(llist.length, 2)
  })

  it('#pop', function() {
    llist.push(2).push(3).push(1)

    assert.equal(llist.length, 3)
    assert.equal(llist.toString(), '2 <-> 3 <-> 1 <-> null')

    const node = llist.pop()

    assert.equal(llist.length, 2)
    assert.equal(llist.toString(), '2 <-> 3 <-> null')
    assert.equal(node.value, 1)
  })

  it('#pop empty', function() {
    let node = llist.pop()

    assert.equal(llist.length, 0)
    assert.equal(node, null)
  })

  it('#pop single', function() {
    let node = llist.push(1).pop()

    assert.equal(llist.empty, true)
    assert.equal(node.value, 1)
  })

  it('#shift', function() {
    let node = llist.push(1).shift()

    assert.equal(llist.length, 0)
    assert.equal(node.value, 1)
  })

  it('#unshift', function() {
    llist.unshift(1).unshift(2)

    assert.equal(llist.length, 2)
    assert.equal(llist.head.value, 2)
    assert.equal(llist.toString(), '2 <-> 1 <-> null')
  })

  it('chains prepends and push', function() {
    llist.unshift(2).push(3).unshift(4)

    assert.equal(llist.length, 3)
    assert.equal(llist.head.value, 4)
    assert.equal(llist.toString(), '4 <-> 2 <-> 3 <-> null')
  })


    it('can move a node to head', function() {
      let node2 = new Node(2)

      llist.push(3).push(node2).push(5)
      llist.moveToHead(node2)

      assert.equal(llist.head, node2)
      assert.equal(llist.toString(), '2 <-> 3 <-> 5 <-> null')
    })

  describe('.union', function() {
    let llist2

    beforeEach(function() {
      llist = new DoublyLinkedList()
      llist.push(1).push(2).push(3).push(4)

      llist2 = new DoublyLinkedList()
      llist2.push(5).push(6).push(7)
    })

    it('Joins two lists together', function() {
      llist.union(llist2)
      assert.equal(llist.toString(), '1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7 <-> null')
    })

    it('returns the first list for chaining', function() {
      let res = llist.union(llist2)
      assert.equal(llist, res)
    })
  })

  describe('reversing', function() {
    it('Can reverse a singly-linked list', function() {
      llist.push(1).push(2).push(3).push(4)
      assert.equal(llist.reverse().toString(), '4 <-> 3 <-> 2 <-> 1 <-> null')
    })
  })

  describe('.findNodeFromEnd', function() {
    beforeEach(function() {
      llist.push(1).push(2).push(3).push(4).push(5).push(6).push(7)
    })

    it('Can find the element correctly', function() {
      assert.equal(llist.findNodeFromEnd(2).value, 5)
    })

    it('Can find the last element correctly', function() {
      assert.equal(llist.findNodeFromEnd(0).value, 7)
    })

    it('Can find the first element correctly', function() {
      assert.equal(llist.findNodeFromEnd(llist.length - 1), llist.head)
    })

    it('Returns null for elements out of the index range', function() {
      assert.equal(llist.findNodeFromEnd(-1), null)
      assert.equal(llist.findNodeFromEnd(Infinity), null)
    })
  })

  describe('#remove', function() {
    beforeEach(function() {
      llist.push(1).push(2).push(3)
    })

    it('chains', function() {
      let node = new Node(4)
      llist.push(node)

      assert.equal(llist.remove(node), llist)
    })

    it('from the end', function() {
      let node = new Node(4)

      llist.push(node)

      assert.equal(llist.length, 4)

      llist.remove(node)

      assert.equal(llist.length, 3)
      assert.equal(llist.toString(), '1 <-> 2 <-> 3 <-> null')
    })

    it('from the start', function() {
      let node = llist.head

      assert.equal(llist.length, 3)

      llist.remove(node)

      assert.equal(llist.length, 2)
      assert.equal(llist.toString(), '2 <-> 3 <-> null')
    })

    it('from the middle', function() {
      let node = new Node(4)

      llist.push(node).push(5)

      assert.equal(llist.length, 5)

      llist.remove(node)

      assert.equal(llist.length, 4)
      assert.equal(llist.toString(), '1 <-> 2 <-> 3 <-> 5 <-> null')
    })
  })
})
