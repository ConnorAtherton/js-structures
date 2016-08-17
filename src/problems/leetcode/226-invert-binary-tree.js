import assert from 'assert'
import BinaryTree from '../../trees/BinaryTree'

let tree = new BinaryTree(1)

tree.root.insertLeft(2)
tree.root.insertRight(3)
tree.root.left.insertLeft(4)
tree.root.right.insertLeft(5)
tree.root.right.left.insertRight(6)
tree.root.left.left.insertRight(7)

assert.equal(tree.toString(), '1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 6')
tree.reverse()
assert.equal(tree.toString(), '1 -> 3 -> 2 -> 5 -> 4 -> 6 -> 7')
