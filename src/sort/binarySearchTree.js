import BinarySeachTreeNode from '../trees/BinarySearchTree'

export default function sort(arr) {
  const tree = BinarySeachTreeNode.build(arr)

  return tree.sort()
}
