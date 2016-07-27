import Queue from '../Queue';

//
// TODO: Tests for tree traversals
//

//
// External storage structure, such as a stack, a queue, or the call stack if we are using recusion,
// will require space proportional to the maximum number of nodes at a given depth. This can be as
// much as the total number of nodes / 2.
//
export default class BinaryTreeNode {
  //
  // Switches all nodes around the middle axis. Assumes the given node is the root.
  //
  // http://stackoverflow.com/questions/9460255/reverse-a-binary-tree-left-to-right
  // http://www.egr.unlv.edu/~larmore/Courses/CSC477/bfsDfs.pdf
  //
  static reverse(root) {
    if (node === null) return

    const tmp = node.left
    node.left = node.right
    node.right = tmp

    // Recurse down the tree
    BinaryTreeNode.reverse(node.left)
    BinaryTreeNode.reverse(node.right)
  }

  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value)
    return this
  }

  * children() {
    return [this.left, this.right].filter(node => !!node)
  }

  //
  // DFS
  //
  dfs(fn, type = 'inorder') {
    for (let node of this[`_${type}`]()) {
      fn(node)
    }
  }

  * _preorder() {
    yield this
    yield* this.left.preorder()
    yield* this.right.preorder()
  }

  * _postorder() {
    yield* this.left.preorder()
    yield* this.right.preorder()
    yield this
  }

  // In a search tree, inorder retrieves the values in sorted order.
  * _inorder() {
    yield* this.left.preorder()
    yield this
    yield* this.right.preorder()
  }

  //
  // BFS
  //
  bfs(fn) {
    let q = new Queue
    let currentNode = null

    q.enqueue(this)

    while (!q.isEmpty) {
      currentNode = q.dequeue()

      fn(currentNode)

      if (currentNode.left !== null) {
        q.enqueue(currentNode.left)
      }

      if (currentNode.right !== null) {
        q.enqueue(currentNode.right)
      }
    }
  }
}
