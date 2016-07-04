import assert from 'assert'
import LinkedList from '../../dist/lists/LinkedList'
import Node from '../../dist/helpers/node'

describe('Linked list', function() {
  let llist
  let node

  beforeEach(function() {
    llist = new LinkedList
  })

  describe('starting empty', function() {
    it ('knows about its own size', function() {
      assert.equal(llist.length, 0)
      assert.equal(llist.empty, true)
    })

    it ('head should be null', function() {
      assert.equal(llist.head, null)
    })

    it ('should be represented by an empty string', function() {
      assert.equal(llist.toString(), '')
    })
  })

  describe('passing node to the constructor', function() {
    beforeEach(function() {
      node = new Node(1)
      llist = new LinkedList(node)
    })

    it('should have correct size', function() {
      assert.equal(llist.length, 1)
      assert.equal(llist.empty, false)
    })

    it('should have correct head', function() {
      assert.equal(llist.head, node)
    })
  })

  describe('iterating', function() {
    beforeEach(function() {
      llist = new LinkedList().push(1).push(2).push(3)
    })

    it('iterates through each node correctly', function() {
      let res = []

      for (let node of llist.nodes()) {
        res.push(node.value)
      }

      assert.deepEqual(res, [1, 2, 3])
    })
  })

  it('#push', function() {
    assert.equal(llist.toString(), '')

    llist.push(1).push(2)

    assert.equal(llist.toString(), '1 -> 2 -> null')
    assert.equal(llist.length, 2)
  })

  it('#pop', function() {
    llist.push(2).push(3).push(1)

    assert.equal(llist.toString(), '2 -> 3 -> 1 -> null')

    const node = llist.pop()

    assert.equal(llist.toString(), '2 -> 3 -> null')
    assert.equal(llist.length, 2)
    assert.equal(node.value, 1)
  })

  it('#pop empty', function() {
    let node = llist.pop()

    assert.equal(llist.length, 0)
    assert.equal(node, null)
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
    assert.equal(llist.toString(), '2 -> 1 -> null')
  })

  it('chains prepends and push', function() {
    llist.unshift(2).push(3).unshift(4)

    assert.equal(llist.length, 3)
    assert.equal(llist.head.value, 4)
    assert.equal(llist.toString(), '4 -> 2 -> 3 -> null')
  })

  it('can move a node to head', function() {
    let node2 = new Node(2)

    llist.push(1).push(node2).push(3)
    llist.moveToHead(node2)

    assert.equal(llist.head, node2)
  })

  describe('.union', function() {
    let llist2

    beforeEach(function() {
      llist = new LinkedList()
      llist.push(1).push(2).push(3).push(4)

      llist2 = new LinkedList()
      llist2.push(5).push(6).push(7)
    })

    it('Joins two lists together', function() {
      llist.union(llist2)
      assert.equal(llist.toString(), '1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null')
    })

    it('returns the first list for chaining', function() {
      let res = llist.union(llist2)
      assert.equal(llist, res)
    })
  })

  describe('reversing', function() {
    beforeEach(function() {
      llist = new LinkedList(node)
      llist.push(2).push(3).push(4)
    })

    it('Can reverse a singly-linked list', function() {
      assert.equal(llist.toString(), '1 -> 2 -> 3 -> 4 -> null')
      assert.equal(llist.reverse().toString(), '4 -> 3 -> 2 -> 1 -> null')
    })
  })

  describe('finding nodes', function() {
    beforeEach(function() {
      llist = new LinkedList
      llist.push(1).push(2).push(3).push(4).push(5).push(6).push(7)
    })

    it('Can find the element correctly', function() {
      assert.equal(llist.findNodeFromEnd(2).value, 5)
    })

    it('finds the last element', function() {
      assert.equal(llist.findNodeFromEnd(0).value, 7)
    })

    it('finds nodes at an index', function() {
      // first
      assert.equal(llist.nodeAtIndex(0).value, 1)

      // middle
      assert.equal(llist.nodeAtIndex(3).value, 4)

      // last
      assert.equal(llist.nodeAtIndex(llist.length - 1).value, 7)
    })
  })

  describe('#remove', function() {
    beforeEach(function() {
      llist = new LinkedList
      node = new Node(2)

      llist.push(1).push(node).push(3)
    })

    it('Can remove when given a node reference', function() {
      assert.equal(llist.toString(), '1 -> 2 -> 3 -> null')
      llist.remove(node)
      assert.equal(llist.toString(), '1 -> 3 -> null')
    })

    it('Leaves the list as is if the node is not present', function() {
      let notPresent = new Node(2)
      assert.equal(llist.toString(), '1 -> 2 -> 3 -> null')
      llist.remove(notPresent)
      assert.equal(llist.toString(), '1 -> 2 -> 3 -> null')
    })
  })

  describe('#findCycle', function() {
    let startNode
    let loopNode

    beforeEach(function() {
      llist = new LinkedList

      startNode = new Node(2)
      loopNode = new Node(2)

      llist.push(1).push(startNode).push(3).push(loopNode).push(5)

      loopNode.next = startNode
    })

    it('can detect a cycle', function() {
      assert.equal(llist.hasCycle(), true)
    })
  })

  describe('random nodes', function() {
    const values = [1, 2, 3, 4, 5]

    beforeEach(function() {
      llist = new LinkedList

      values.forEach(val => llist.push(val))
    })

    it('always selects an element from the list', function() {
      let selected = llist.random()

      assert.notEqual(values.indexOf(selected.value), -1)
    })
  })
})
