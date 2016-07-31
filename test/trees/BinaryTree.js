import assert from 'assert'
import BinaryTreeNode from '../../dist/trees/BinaryTree'

// xdescribe('BinaryTree', () => {
//   let tree = null

//   // TODO: Use monodraw to draw a representation of this tree
//   beforeEach(() => {
//     tree = new BinaryTreeNode(1, 2, 3)
//   })

//   afterEach(() => tree = null)

//   describe('Returns child nodes correctly', function() {
//     it('with no children', () => {
//       tree.left = null
//       tree.right = null

//       assert.deepEqual(tree.children(), [])
//     })

//     it('with empty left child', () => {
//       tree.left = null

//       assert.deepEqual(tree.children(), [tree.right])
//     })

//     it('with empty right child', () => {
//       tree.right = null

//       assert.deepEqual(tree.children(), [tree.left])
//     })

//     it('with both children', () => {
//       assert.deepEqual(tree.children(), [tree.left, tree.right])
//     })
//   })

//   describe('Breadth-first search', function() {
//     it('Visits all nodes using a queue', () => {
//       assert.deepEqual(tree.bfs(value => value), [1, 2, 3])
//     })

//     it('Works on a simple tree', () => {
//       assert.deepEqual(tree.bfs(node => node * 2), [2, 4, 6])
//     })
//   })

//   describe('Depth-first search', function() {
//     it('Visits all nodes', () => {
//       assert.deepEqual(tree.dfs(value => value).length, 3)
//     })

//     it('Traverses inorder by default', () => {
//       assert.deepEqual(tree.dfs(value => value), [2, 1, 3])
//     })

//     it('Traverses preorder correctly', () => {
//       assert.deepEqual(tree.dfs(value => value, 'preorder'), [1, 2, 3])
//     })

//     it('Traverses postorder correctly', () => {
//       assert.deepEqual(tree.dfs(value => value, 'postorder'), [2, 3, 1])
//     })

//     it('traverses inorder using a stack solution', () => {
//       assert.deepEqual(tree.dfsIterative(), [2, 1, 3])
//     })
//   })
// })
