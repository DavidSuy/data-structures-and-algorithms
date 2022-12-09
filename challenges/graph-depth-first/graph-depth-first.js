const Graph = require("../../data-structures/graph/graph");

class GraphWithTraversal extends Graph {
  depthFirstTraversal(node, fn) {
    const s = [node];
    const visited = { [node.value]: true };
    while (s.length > 0) {
      const node = s.pop();
      fn(node.value);
      const neighbors = this.getNeighbors(node);
      for (let neighbor of neighbors) {
        if (!(neighbor.value in visited)) {
          visited[neighbor.value] = true;
          s.push(neighbor);
        }
      }
    }
  }
}

module.exports = GraphWithTraversal;
