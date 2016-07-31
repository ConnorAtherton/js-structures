import BinaryTree, { BinaryTreeNode } from './BinaryTree'

//
// Extension of a binary tree with added constraints to make sure searching, insertion, and deletion
// are all efficient. They offer good guaranteed worst-case performance.
//
// All data stored in the nodes must be comparable and a suitable comparator function must be
// added to the *comparators* cache on the BinarySearchTreeNode class. To achieve this we need to
// make sure we always balance the tree after altering its structure, either by inserting a node or
// by removing a node.
//
// binary-search-tree-property:
//   If y is a node in the left subtree of x, then y.key <= x.key. If y is a node in the
//   right subtree of x, then y.key >= x.key.
//
// Visiting a BST inorder will give us an ordered collection.
//
export default class BinarySearchTree extends BinaryTree {
  static comparators = {
    'default': (a, b) => a >= b
  }

  constructor(key, value) {
    super()

    this.root = key ? new BinarySearchTreeNode(key, value) : null
  }

  get empty() {
    return this.root === null
  }

  //
  // We need to insert a node in the tree in such a way to ensure that the
  // binary-search-tree-property holds after the insertion.
  //
  insert(node, value) {
    if (!(node instanceof BinarySearchTreeNode)) node = new BinarySearchTreeNode(node, value)

    // Handle empty case
    if (this.empty) {
      this.root = node
      return this.root
    }

    //
    // Need to kleep a trailing pointer because when we find the node insertion position
    // (the null value), we are one step ahead of the parent pointer.
    //
    let parent = null
    let current = this.root

    // Find the parent node
    while (current) {
      parent = current

      node.key > current.key
       ? current = parent.right
       : current = parent.left
    }

    node.key > parent.key
     ? parent.right = node
     : parent.left = node

    return node
  }

  search(key) {
    let currentNode = this.root

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode
      }

      key > currentNode.key
        ? currentNode = currentNode.right
        : currentNode = currentNode.left
    }

    return null
  }

  searchRecursive(node = this.root, key) {
    if (!node || node.key === key) {
      return node
    }

    return key > node.key
      ? this.searchRecursive(node.right, key)
      : this.searchRecursive(node.left, key)
  }

  //
  // Both of these run in O(h) where h is the height of the tree.
  //
  max(node = this.root) {
    while (node.right) node = node.right

    return node
  }

  min(node = this.root) {
    while (node.left) node = node.left

    return node
  }

  //
  // 3 cases to consider here:
  // - 0 children
  // - 1 child
  // - 2 children
  //
  remove(node) {
    if (!node.left) {
      this._replace(node, node.right)
      return
    } else if (!node.right)  {
      this._replace(node, node.left)
      return
    }

    const replacement = this.min(node.right)

    //
    // Delete the node
    //
    if (replacement.parent !== node) {
      this.transplant(replacement, replacement.right)
      replacement.right = node.right
      replacement.right.parent = replacement
    }

    //
    // Replace the node, making sure to add parent references correctly.
    //
    this.transplant(node, replacement)
    replacement.left = node.left
    replacement.left.parent = replacement
  }

  //
  // Replaces the first node with the second
  //
  _replace(first, second) {
    // Handles the case where we are replacing the root
    if (!first.parent) {
      this.root = second
    } else if (first = first.parent.left) {
      first.parent.left = second
    } else {
      first.parent.right = second
    }

    if (second) {
      second.parent = first.parent
    }
  }

  //
  // BinaryTreeNode searches `inorder` by default
  //
  sort() {
    return super.dfs()
  }

  //
  // TODO: Not sure how to do this yet...
  //
  get height() {
    return this.root.size
  }
}

export class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(key, value) {
    super()

    this.key = key
    this.value = value
    this.size = 1
    this.parent = null
    this.left = null
    this.right = null

    return this
  }

  successor() {

  }

  predecessor() {

  }
}
