# Depth-first search (DFS) is an algorithm for traversing or
# searching a tree, tree structure, or graph. One starts at
# the root (selecting some node as the root in the graph case)
# and explores as far as possible along each branch before backtracking.
#
# A graph can be represented by its adjacency matrix G,
# where G[i][j] == 1 if there is an edge between
# vertices i and j and 0 otherwise.
#
# Below Graph in diagram http://i.imgur.com/sV1UzUn.png
G = [0,1,1,0,0,1,1], # A
    [1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
    [0,0,0,0,1,1,0],
    [0,0,0,1,0,1,1],
    [1,0,0,1,1,0,0],
    [1,0,0,0,1,0,0]  # G

LABELS = %w(A B C D E F G)

def dfs(vertex)
  # mark v as explored
  #
  # visit LABELS[vertex]
  print "#{LABELS[vertex]} "

  # nullify the row to mark the
  # vertex as visited
  G.size.times { |edge| G[vertex][edge] = 0 }

  # Find unexplored edges
  G.size.times do |edge|
    # not explored and not same vertex
    dfs(edge) if G[edge][vertex] != 0 && edge != vertex
  end
end

dfs(4)