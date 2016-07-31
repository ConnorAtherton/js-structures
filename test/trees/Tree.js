import assert from 'assert'
import Tree, { TreeNode } from '../../dist/trees/Tree'

xdescribe('Tree', () => {
  let tree = null

  // TODO: Use monodraw to draw a representation of this tree
  beforeEach(() => {
    tree = new Tree(1, 1)

    tree.root.addChild(2, 2)
    tree.root.addChild(3, 3)
  })

  afterEach(() => tree = null)

  describe('Breadth-first search', function() {
    it('Works on a simple tree', () => {
      assert.deepEqual(tree.bfs(value => value), [1, 2, 3])
    })

    it('Works on a complex tree', () => {
      // TODO: Add more nodes

      assert.deepEqual(tree.bfs(node => node * 2), [2, 4, 6])
    })
  })

  describe('Depth-first search', function() {
    it('Visits all nodes using a stack', () => {
      assert.deepEqual(tree.dfs(value => value).length, 5)
    })

    it('Visits all nodes recursively', () => {
      assert.deepEqual(tree.dfsRecursive().length, 5)
    })

    it('Traverses preorder correctly', () => {
      assert.deepEqual(tree.dfs(value => value, 'preorder'), [1, 2, 3, 4, 5])
    })

    it('Traverses postorder correctly', () => {
      assert.deepEqual(tree.dfs(value => value, 'postorder'), [2, 3, 4, 5, 1])
    })
  })
})
