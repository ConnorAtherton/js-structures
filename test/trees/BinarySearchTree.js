import assert from 'assert'
import BinarySearchTree, { BinarySearchTreeNode } from '../../dist/trees/BinarySearchTree'

xdescribe('BinarySearchTree', () => {
  let tree = null

  // TODO: Use monodraw to draw a representation of this tree
  beforeEach(() => {
    tree = new BinarySearchTree(10, 'ten')
  })

  afterEach(() => tree = null)

  describe('Initialization', function() {
    it('sets the root node correctly', function() {
      assert.equal(tree.root.key, 10)
      assert.equal(tree.root.value, 'ten')
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
        assert.deepEqual(tree.bfs(), ['ten', 'five', 'eighteen', 'two', 'nine', 'fifteen', 'nineteen', 'seventeen'])
      })
    })

    describe('sort', function() {
      it('can return a sorted array', function() {
        assert.deepEqual(tree.sort(), ['two', 'five', 'nine', 'ten', 'fifteen', 'seventeen', 'eighteen', 'nineteen'])
      })
    })

    describe.only('remove', function() {
      let removeNode = null

      it('can handle having no children', function() {
        removeNode = tree.root.left.left

        tree.remove(removeNode)

        assert.equal(tree.root.left.left, null)
        assert.deepEqual(tree.bfs(), ['ten', 'five', 'eighteen', 'nine', 'fifteen', 'nineteen', 'seventeen'])
      })

      it('can handle having no left child', function() {
        tree.insert(3, 'three')
        removeNode = tree.root.left.left

        tree.remove(removeNode)

        assert.equal(tree.root.left.left.key, 3)
        assert.deepEqual(tree.bfs(), ['ten', 'five', 'eighteen', 'three', 'nine', 'fifteen', 'nineteen', 'seventeen'])
      })

      // it('can handle having no right child', function() {
          // tree.insert(1, 'one')
      //   removeNode = tree.root.left.left

      //   tree.remove(removeNode)
      //   assert.deepEqual(tree.bfs(), ['ten', 'five', 'eighteen', 'two', 'nine', 'fifteen', 'nineteen', 'seventeen'])
      // })

      // it('can handle having both children', function() {
      //   assert.deepEqual(tree.bfs(), ['ten', 'five', 'eighteen', 'two', 'nine', 'fifteen', 'nineteen', 'seventeen'])
      // })
    })

    describe('min', function() {
      it('can return the minimum element in the tree', function() {
        assert.equal(tree.min().value, 'two')
      })
    })

    describe('max', function() {
      it('can return the maximum element in the tree', function() {
        assert.equal(tree.max().value, 'nineteen')
      })
    })

    describe('search', function() {
      it('returns the node if the key is found', function() {
        assert.equal(tree.search(18).key, 18)
        assert.equal(tree.searchRecursive(18).key, 18)
      })

      it('returns null if the key is not found', function() {
        assert.equal(tree.search(1000), null)
        assert.equal(tree.searchRecursive(1000), null)
      })
    })
  })
})
