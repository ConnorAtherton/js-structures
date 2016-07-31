import assert from 'assert'
import BinarySearchTree, { BinarySearchTreeNode } from '../../dist/trees/BinarySearchTree'

xdescribe('BinarySearchTree', () => {
  let tree = null

  // TODO: Use monodraw to draw a representation of this tree
  beforeEach(() => {
    tree = new BinarySearchTree(10, 'twelve')
  })

  afterEach(() => tree = null)

  describe('Initialization', function() {
    it('sets the root node correctly', function() {
      assert.equal(tree.root.value, 'twelve')
    })
  })

  describe('Operations', function() {
    beforeEach(() => {
      tree.insert(5, 'five')
      tree.insert(2, 'two')
      tree.insert(9, 'nine')
      tree.insert(18, 'eighteen')
      tree.insert(15, 'fifteen')
      tree.insert(17, 'seventeen')
      tree.insert(19, 'nineteen')
    })

    describe('insert', function() {
      it('inserts as the root for empty trees', function() {
        const emptyTree = new BinarySearchTree()

        assert.equal(emptyTree.root, null)

        const returnNode = emptyTree.insert(1, 'one')

        assert.equal(returnNode instanceof BinarySearchTreeNode, true)
        assert.equal(emptyTree.root.value, 'one')
      })

      it('inserts smaller nodes correctly', function() {
        assert.equal(tree.root.left.value, 'five')
      })

      it('inserts larger nodes correctly', function() {
        assert.equal(tree.root.right.value, 'eighteen')
      })
    })

    describe('iterate', function() {
      it('lists the nodes in the correct order', function() {
        assert.equal(tree.bfs(), [12, 5, 18, 2, 9, 15, 19, 13, 17])
      })
    })

    describe('sort', function() {
      it('can return a sorted array', function() {
        assert.equal(tree.sort(), [2, 5, 9, 12, 13, 15, 17, 18, 19])
      })
    })

    describe('remove', function() {
    })

    describe('search', function() {
      it('returns the node if the key is found', function() {
        assert.equal(tree.search(18).key, 18)
      })

      it('returns null if the key is not found', function() {
        assert.equal(tree.search(1000), null)
      })
    })
  })
})
