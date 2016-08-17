import assert from 'assert'
import BinaryTree, { BinaryTreeNode } from '../../dist/trees/BinaryTree'

describe('BinaryTree', () => {
  let tree = null
  let left = null
  let right = null
  let results = []

  // TODO: Use monodraw to draw a representation of this tree
  beforeEach(() => {
    tree = new BinaryTree(1)

    tree.root.insertLeft(2)
    tree.root.insertRight(3)

    tree.root.left.insertLeft(4)
    tree.root.right.insertLeft(5)
    tree.root.right.insertRight(6)
  })

  afterEach(() => {
    tree = left = right = null
    results = []
  })

  describe('Returns child nodes correctly', function() {
    it('with no children', () => {
      tree.root.left = null
      tree.root.right = null

      assert.deepEqual(tree.root.children(), [])
    })

    it('with empty left child', () => {
      tree.root.left = null

      assert.deepEqual(tree.root.children(), [tree.root.right])
    })

    it('with empty right child', () => {
      tree.root.right = null

      assert.deepEqual(tree.root.children(), [tree.root.left])
    })

    it('with both children', () => {
      assert.deepEqual(tree.root.children(), [tree.root.left, tree.root.right])
    })
  })

  describe('Operations', function() {
    it('Knows when it is equal to another tree', () => {
      // empty
      let otherTree = new BinaryTree()

      // assert.equal(tree.equal(otherTree.root), false)

      // different structure, same values
      otherTree = new BinaryTree(1)
      otherTree.root.insertLeft(2)
      otherTree.root.insertRight(3)
      otherTree.root.left.insertLeft(4)
      otherTree.root.right.insertLeft(5)

      assert.equal(tree.equal(otherTree.root), false)

      // same structure, different values
      otherTree = new BinaryTree(1)
      otherTree.root.insertLeft(2)
      otherTree.root.insertRight(3)
      otherTree.root.left.insertLeft(4)
      otherTree.root.right.insertLeft(5)
      otherTree.root.right.insertRight(7)

      assert.equal(tree.equal(otherTree.root), false)

      // same structure and values
      otherTree = new BinaryTree(1)
      otherTree.root.insertLeft(2)
      otherTree.root.insertRight(3)
      otherTree.root.left.insertLeft(4)
      otherTree.root.right.insertLeft(5)
      otherTree.root.right.insertRight(6)

      assert.equal(tree.equal(otherTree.root), true)
    })
  })

  describe('Breadth-first search', function() {
    it('Visits all nodes using a queue', () => {
      assert.deepEqual(tree.bfs(value => value), [1, 2, 3, 4, 5, 6])
    })

    it('Works on a simple tree', () => {
      assert.deepEqual(tree.bfs(value => value * 2), [2, 4, 6, 8, 10, 12])
    })
  })

  describe('Depth-first search', function() {
    it('Visits all nodes', () => {
      assert.deepEqual(tree.dfs().length, 6)
    })

    it('Traverses inorder by default', () => {
      assert.deepEqual(tree.dfs(), [4, 2, 1, 5, 3, 6])
    })

    it('Traverses preorder correctly', () => {
      assert.deepEqual(tree.dfs(value => value, 'preorder'), [1, 2, 4, 3, 5, 6])
    })

    it('Traverses postorder correctly', () => {
      assert.deepEqual(tree.dfs(value => value, 'postorder'), [4, 2, 5, 6, 3, 1])
    })

    it('Traverses inorder by default', () => {
      assert.deepEqual(tree.dfs(), [4, 2, 1, 5, 3, 6])
    })

    it('Traverses preorder iteratively correctly ', () => {
      tree.dfsIterativePreorder(node => results.push(node.value))

      assert.deepEqual(results, [1, 2, 4, 3, 5, 6])
    })

    it('Traverses postorder iteratively correctly', () => {
      tree.dfsIterativePostorder(node => results.push(node.value))

      assert.deepEqual(results, [4, 2, 5, 6, 3, 1])
    })

    it('traverses inorder iteratively correctly', () => {
      tree.dfsIterativeInorder(node => results.push(node.value))

      assert.deepEqual(results, [4, 2, 1, 5, 3, 6])
    })
  })
})
