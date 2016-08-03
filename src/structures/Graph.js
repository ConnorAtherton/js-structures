export default class Graph {
  fromMatrix() {

  }

  //
  // Better way to represent sparse graphs so usually a better choice. Consists of
  // an array of lists.
  //
  fromList(arr) {

  }

  //
  // TODO: Make this work with a list and a matrix
  //
  dfs(fn, startNode, goal) {
    const visited = []
    const stack = new Stack
    let currentNode = null

    stack.push(startNode)

    while (!stack.empty) {
      currentNode = stack.pop()

      if (currentNode === goal) {
        return true
      }

      // Search all paths...
      for (let i = 0; i < graph.adjascent(currentNode).length; i++) {
        if (graph.get(currentNode, i) && !visited[i]) {
          stack.push(i)
          visited[i] = true
        }
      }
    }

    return false
  }

  //
  // Basis for lots of graph algorithms, like:
  // - Prim's minimum-spanning algorithm
  // - Djikstra's single-source shortest path algorithm
  //
  // Returns the path between two nodes
  //
  bfs(fn, startNode = this.firstVertex) {
    var parents = [];
    var visited = [];
    var current;

    queue.push(startNode);
    parents[startNode] = null;
    visited[startNode] = true;

    while (queue.length) {
      current = queue.shift();

      if (current === targetNode) {
        return [...parents, current]
      }

      for (var i = 0; i < graph.length; i += 1) {
        if (i !== current && graph[current][i] && !visited[i]) {
          parents[i] = current;
          visited[i] = true;
          queue.push(i);
        }
      }
    }

    return null;
  }

  tsort() {

  }
}
