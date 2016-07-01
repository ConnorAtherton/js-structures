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

  xdescribe('iterating', function() {
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

  xit('chains prepends and push', function() {
    llist.prepend(2).push(3).prepend(4)
    assert.equal(llist.length, 4)
    assert.equal(llist.head.value, 4)
  })


  // it('can remove a node', function() {
  //   var node2 = new Node(2)
  //   var result = []

  //   llist.push(node2).push(3)
  //   llist.remove(node2)

  //   for (var obj of llist) {
  //     result.push(obj.value)
  //   }

  //   assert.equal(llist.length, 2)
  //   assert.equal(result.indexOf(node2), -1)
  // })

  // it('can remove a node from the end', function() {
  //   var node2 = new Node(2)

  //   llist.push('re').push(node2).remove(node2)

  //   assert.equal(llist.length, 2)
  //   assert.equal(llist.head, node)
  // })

  // it('can remove a node from the start', function() {
  //   var node2 = new Node(2)

  //   llist.prepend(node2).remove(node2)

  //   assert.equal(llist.length, 1)
  //   assert.equal(llist.head, node)
  // })

  xit('can move a node to head', function() {
    var node2 = new Node(2)

    llist.push(node2).push(3)
    llist.moveToHead(node2)

    assert.equal(llist.head, node2)
  })

  xdescribe('.union', function() {
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

  xdescribe('reversing', function() {
    beforeEach(function() {
      llist = new LinkedList(node)
      llist.push(2).push(3).push(4)
    })

    it('Can print out the list correctly', function() {
      assert.equal(llist.toString(), '1 -> 2 -> 3 -> 4 -> null')
    })

    it('Can reverse a singly-linked list', function() {
      assert.equal(llist.reverse().toString(), '4 -> 3 -> 2 -> 1 -> null')
    })

  })

  describe('#findNodeFromEnd', function() {
    beforeEach(function() {
      llist = new LinkedList
      llist.push(1).push(2).push(3).push(4).push(5).push(6).push(7)
    })

    it('Can find the element correctly', function() {
      assert.equal(llist.findNodeFromEnd(2).value, 5)
    })
  })

  // describe('#remove', function() {
  //   beforeEach(function() {
  //     llist = new LinkedList
  //     let node = new Node(2)
  //     llist.push(1).push(2).push(3)
  //   })

  //   it('Can remove when given a node reference', function() {
  //     llist.remove(node)
  //     assert.equal(llist.toString(), '1 -> 3 -> null')
  //   })
  // })
})
