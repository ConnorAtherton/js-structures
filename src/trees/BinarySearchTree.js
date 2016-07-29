import BinaryTreeNode from './BinaryTree'

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
export default class BinarySeachTreeNode extends BinaryTreeNode {
  static comparators = {
    'default': (a, b) => a >= b
  }

  static build(...values) {

  }

  insert() {

  }

  search(value) {
    let currentNode = this

    while (currentNode) {
      if (currentNode) {
        return true
      }

      value > currentNode.value
        ? currentNode = currentNode.right
        : currentNode = currentNode.left
    }

    return false
  }

  delete() {

  }

  //
  // BinaryTreeNode searches `inorder` by default
  //
  sort() {
    return super.defs()
  }
}
