//
// Depth-first search
//
import Stack from '../structures/Stack'

const iterative = (root, visit) => {
  const stack = new Stack

  // push initial element
  stack.push(root)

  while (!stack.empty) {
    let current = stack.pop()

    // do something with the value
    visit(current);

    // Doing this so we aren't limited to binary search trees
    for (let child of current.children()) {
      stack.push(child)
    }

    // current.left && stack.push(current.left)
    // current.right && stack.push(current.right)
  }
}

const recursive = (root) => {

}

export {
  iterative,
  recursive
}
