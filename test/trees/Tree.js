import assert from 'assert'
import TreeNode from '../../dist/trees/Tree'

describe('Tree', () => {
  let tree = null

  // TODO: Use monodraw to draw a representation of this tree
  beforeEach(() => {
    tree = new TreeNode(1, 2, 3, 4, 5)
  })

  afterEach(() => tree = null)

  describe('Returns child nodes correctly', function() {
    it('with no children', () => {
      tree.childNodes = []

      assert.deepEqual(tree.children(), [])
    })
  })

  describe('Breadth-first search', function() {
    it('Visits all nodes', () => {
      assert.deepEqual(tree.bfs(value => value), [1, 2, 3, 4, 5])
    })

    it('Works on a simple tree', () => {
      assert.deepEqual(tree.bfs(node => node * 2), [2, 4, 6, 8, 10])
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
