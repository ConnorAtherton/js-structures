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

  //
  // Traversal
  //
  // A tree is a non-linear structure allowing multiple valid traversal
  // paths through its structure.
  //
  // DFS
  //
  // Preorder: visit each node before its children.
  // Postorder: visit each node after its children.
  // Inorder (for binary trees only): visit left subtree, node, right subtree.
  //
  dfs(fn = (value) => value, type = 'preorder') {
    const results = []

    for (let node of this.root[`_${type}`]()) {
      results.push(fn(node))
    }

    return results
  }

  dfsRecursive() {
    return this.root.dfsRecursive()
  }

  toString() {
    return this.dfs().join(' -> ')
  }

  //
  // NOTE: This traverses in preorder
  //
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

  dfsRecursive() {
    let results = [this.value]

    for (let childNode of this.children()) {
      results = [...results, ...childNode.dfsRecursive()]
    }

    return results
  }

  * _preorder() {
    yield this.value

    for (let childNode of this.children()) {
      yield* childNode._preorder()
    }
  }

  * _postorder() {
    for (let childNode of this.children()) {
      yield* childNode._postorder()
    }

    yield this.value
  }
}
