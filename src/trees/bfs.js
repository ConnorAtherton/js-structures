//
// Breadth-first search
//
import Queue from '../structures/Queue'

const iterative = (root, visit) => {
  const queue = new Queue

  queue.queue(root)

  while (!queue.empty) {
    let current = queue.dequeue()

    // do something with the value
    visit(current);

    // Doing this so we aren't limited to binary search trees
    for (let child of current.children()) {
      queue.enqueue(child)
    }
  }
}

const recursive = (root) => {

}

export {
  iterative,
  recursive
}
