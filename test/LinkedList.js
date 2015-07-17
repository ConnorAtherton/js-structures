var assert = require('assert')
var LinkedList = require('../dist/LinkedList')
var Node = require('../dist/helpers/node')

describe('Linked list', function() {
  var llist
  var node

  describe('starting empty', function() {
    beforeEach(function() {
      llist = new LinkedList
    })

    it ('should have 0 length', function() {
      assert.equal(llist.length, 0)
    })

    it ('tail and head should be null', function() {
      assert.equal(llist.tail, null)
      assert.equal(llist.head, null)
    })
  })

  describe('passing node to the constructor', function() {
    beforeEach(function() {
      node = new Node(1)
      llist = new LinkedList(node)
    })

    it('should have correct size', function() {
      assert.equal(llist.length, 1)
    })

    it('should have correct head and tail', function() {
      assert.equal(llist.tail, node)
      assert.equal(llist.head, node)
    })
  })

  describe('list operations', function() {
    beforeEach(function() {
      llist = new LinkedList(node)
      node = new Node(1)
    })

    it('appends', function() {
      llist.append(2)
      assert.equal(llist.length, 2)
      assert.equal(llist.tail.value, 2)
    })

    it('prepends', function() {
      llist.prepend(2)
      assert.equal(llist.length, 2)
      assert.equal(llist.head.value, 2)
    })

    it('chains prepends and append', function() {
      llist.prepend(2).append(3).prepend(4)
      assert.equal(llist.length, 4)
      assert.equal(llist.tail.value, 3)
      assert.equal(llist.head.value, 4)
    })

    it('pops', function() {
      var node = llist.append(2).pop()
      assert.equal(llist.length, 1)
      assert.equal(node.value, 2)
    })

    it('lpops', function() {
      var node = llist.append(2).lpop()
      assert.equal(llist.length, 1)
      assert.equal(node.value, 1)
    })

    it('knows when its empty', function() {
      llist.pop()
      assert.equal(llist.empty(), true)
    })
  })

  describe('iteration', function() {
    beforeEach(function() {
      llist = new LinkedList(node)
      llist.append(2).append(3).append(4)
    })

    it('iterates over all elements', function() {
      var result = []

      for (var obj of llist) {
        result.push(obj.value)
      }

     assert.equal(this.current, this.tail)
      assert.deepEqual(result, [1, 2, 3, 4])
    })

    it('resets correctly is the iteration breaks', function() {
      var result = []
      var counter = 0

      for (var obj of llist) {
        if (counter === 2)
          break;

        result.push(obj.value)
        counter++
      }

     assert.equal(this.current, this.head)
     assert.deepEqual(result, [1, 2])
    })

  })
})
