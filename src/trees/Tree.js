import Queue from '../structures/Queue';

//
// Tree
//
// insert(value|node)
// delete()
// dfs()
// bfs()
//

export default class Tree {
  constructor(key, value) {
    this.root = key ? new TreeNode(key, value) : null
  }

  * _preorder() {
    yield this.value

    if (this.left) yield* this.left._preorder()
    if (this.right) yield* this.right._preorder()
  }

  * _postorder() {
    if (this.left) yield* this.left._postorder()
    if (this.right) yield* this.right._postorder()

    yield this.value
  }

  //
  // Traversal
  //
  // Preorder: visit each node before its children.
  // Postorder: visit each node after its children.
  // Inorder (for binary trees only): visit left subtree, node, right subtree.
  //

  //
  // DFS
  //
  dfs(fn = (value) => value, type = 'preorder') {
    const results = []

    for (let node of this[`_${type}`]()) {
      results.push(fn(node))
    }

    return results
  }

  // NOTE: This traverses in preorder
  dfsRecursive() {
    let results = [this.root.value]

    for (let childNode of this.root.children()) {
      results = [...results, ...childNode.dfsRecursive()]
    }

    return results
  }

  * _preorder() {
    yield this.root.value

    for (let childNode of this.root.children()) {
      yield* childNode._preorder()
    }
  }

  * _postorder() {
    for (let childNode of this.root.children()) {
      yield* childNode._postorder()
    }

    yield this.root.value
  }

  //
  // BFS
  //
  // Only one variation of breadth-first-search, levelorder traversal. This visits nodes top to
  // bottom and left to right.
  //
  bfs(fn = (value) => value) {
    let q = new Queue
    let currentNode = null
    let results = []

    q.enqueue(this.root)

    while (!q.empty) {
      currentNode = q.dequeue()

      results.push(fn(currentNode.value))

      for (let childNode of currentNode.children()) {
        q.enqueue(childNode)
      }
    }

    return results
  }
}

export class TreeNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.childNodes = []

    return this
  }

  children() {
    return this.childNodes
  }

  addChild(...args) {
    this.childNodes.push(new TreeNode(...args))
  }
}
