import TreeNode from './Tree'

//
// External storage structure, such as a stack, a queue, or the call stack if we are using recusion,
// will require space proportional to the maximum number of nodes at a given depth. This can be as
// much as the total number of nodes / 2.
//
export default class BinaryTreeNode extends TreeNode {
  //
  // Switches all nodes around the middle axis. Assumes the given node is the root.
  //
  // http://stackoverflow.com/questions/9460255/reverse-a-binary-tree-left-to-right
  // http://www.egr.unlv.edu/~larmore/Courses/CSC477/bfsDfs.pdf
  //
  static reverse(node) {
    if (node === null) return

    const tmp = node.left
    node.left = node.right
    node.right = tmp

    // Recurse down the tree
    BinaryTreeNode.reverse(node.left)
    BinaryTreeNode.reverse(node.right)
  }

  constructor(value, left = null, right = null) {
    super()

    this.value = value
    this.left = left && new BinaryTreeNode(left)
    this.right = right && new BinaryTreeNode(right)
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value)
    return this.right
  }

  children() {
    return [this.left, this.right].filter(node => !!node)
  }

  dfs(fn, type = 'inorder') {
    return super.dfs(fn, type)
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

  // In a search tree, inorder retrieves the values in sorted order.
  * _inorder() {
    if (this.left) yield* this.left._inorder()

    yield this.value

    if (this.right) yield* this.right._inorder()
  }
}
