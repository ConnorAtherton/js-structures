import Queue from '../Queue';

//
// External storage structure, such as a stack, a queue, or the call stack if we are using recusion,
// will require space proportional to the maximum number of nodes at a given depth. This can be as
// much as the total number of nodes / 2
//
export default class BinaryTreeNode {
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
