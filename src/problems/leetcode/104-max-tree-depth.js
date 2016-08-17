import assert from 'assert'
import BinaryTree from '../../trees/BinaryTree'

const maxDepth = (node) => {
  if (!node) {
    return 0
  }

  let leftDepth = maxDepth(node.left)
  let rightDepth = maxDepth(node.right)

  return leftDepth > rightDepth
    ? leftDepth + 1
    : rightDepth + 1
}

let tree = new BinaryTree(1)

tree.root.insertLeft(2)
tree.root.insertRight(3)

tree.root.left.insertLeft(4)
tree.root.right.insertLeft(5)
tree.root.right.left.insertRight(6)
tree.root.right.left.right.insertRight(6)

assert.equal(maxDepth(tree.root), 5)

console.log(`Height of tree is ${maxDepth(tree.root)}`)
