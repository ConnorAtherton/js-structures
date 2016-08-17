import Tree, { TreeNode } from './Tree'
import Stack from '../structures/Stack'

//
// External storage structure, such as a stack, a queue, or the call stack if we are using recusion,
// will require space proportional to the maximum number of nodes at a given depth. This can be as
// much as the total number of nodes / 2.
//
// A full binary tree.is a binary tree in which each node has exactly zero or two children.
// A complete binary tree is a binary tree, which is completely filled, with the possible exception
// of the bottom level, which is filled from left to right.
//
// Use trees because they:
// - reflect structural relationships in the data
// - are used to represent hierarchies
// - provide an efficient insertion and searching
// - are very flexible data, allowing to move subtrees around with minumum effort
//
export default class BinaryTree extends Tree {
  constructor(key, value) {
    super()

    this.root = key ? new BinaryTreeNode(key, value) : null
  }

  //
  // Switches all nodes around the middle axis. Assumes the given node is the root.
  //
  // http://stackoverflow.com/questions/9460255/reverse-a-binary-tree-left-to-right
  // http://www.egr.unlv.edu/~larmore/Courses/CSC477/bfsDfs.pdf
  //
  reverse(node = this.root) {
    if (node === null) return

    const swapChildren = (node) => {
      const tmp = node.left
      node.left = node.right
      node.right = tmp
    }

    let current = node
    let stack = []

    while (current || stack.length !== 0) {
      // Go left
      if (current) {
        stack.push(current)
        current = current.left

      // Go back up the tree
      } else {
        current = stack.pop()

        // Process the node
        swapChildren(current)

        current = current.right
      }
    }
  }

  dfs(fn, type = 'inorder') {
    return super.dfs(fn, type)
  }

  toString() {
    return this.bfs().join(' -> ')
  }

  //
  // Returns true if both trees have the same structure and the same values for the nodes
  //
  equal(otherTreeRoot, ourRoot = this.root) {
     // both are empty...
     if (ourRoot === null && otherTreeRoot === null) {
       return true
     }

     // both have values...
     if (ourRoot !== null && otherTreeRoot !== null) {
       // and both of those values are the same
       return (ourRoot.value === otherTreeRoot.value)
         && this.equal(ourRoot.left, otherTreeRoot.left)
         && this.equal(ourRoot.right, otherTreeRoot.right)
     }

     return false
  }

  //
  // PERFORMS ITERATIVE INORDER
  //
  dfsIterativeInorder(fn = val => val) {
    const stack = []

    let current = this.root

    while(stack.length !== 0 || current) {
      if (current) {
        stack.push(current)
        current = current.left
      } else {
        current = stack.pop()

        fn(current)

        current = current.right
      }
    }
  }

  //
  // PERFORMS ITERATIVE preorder
  //
  dfsIterativePreorder(fn = val => val) {
    if (this.empty) {
      return null
    }

    let stack = new Stack
    let results = []
    let current = null

    stack.push(this.root)

    while (!stack.empty) {
      current = stack.pop()

      fn(current)

      // We want to visit the left node before the right node
      if (!!current.right)
        stack.push(current.right)

      if (!!current.left)
        stack.push(current.left)
    }
  }

  //
  // PERFORMS ITERATIVE postorder
  //
  dfsIterativePostorder(fn = val => val) {
    if (this.empty) {
      return null
    }

    let stack = new Stack
    let lastNode = null
    let peekNode = null
    let current = this.root

    while (!stack.empty || current !== null) {
      if (current) {
        stack.push(current)
        current = current.left
      } else {
        peekNode = stack.peek()

        //
        // Always going to the left first so we want to check that a right
        // branch exists and that we haven't already visited it
        //
        if (!!peekNode.right && lastNode !== peekNode.right) {
          current = peekNode.right
        } else {
          lastNode = stack.pop()
          fn(lastNode)
        }
      }
    }
  }
}

export class BinaryTreeNode extends TreeNode {
  constructor(...args) {
    super(args)

    let [key, value] = args

    this.key = key
    this.value = value || key
    this.left = null
    this.right = null
  }

  children() {
    return [this.left, this.right].filter(node => !!node)
  }

  // In a search tree, inorder retrieves the values in sorted order.
  * _inorder() {
    if (this.left) yield* this.left._inorder()

    yield this.value

    if (this.right) yield* this.right._inorder()
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

  insertLeft(key, value) {
    this.left = new BinaryTreeNode(key, value)
    return this.left
  }

  insertRight(key, value) {
    this.right = new BinaryTreeNode(key, value)
    return this.right
  }
}
