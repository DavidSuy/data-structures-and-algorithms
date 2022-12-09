const Graph = require("./graph-depth-first");

const buildSampleGraph = () => {
  const g = new Graph();
  const A = g.addVertex("A");
  const B = g.addVertex("B");
  const C = g.addVertex("C");
  const D = g.addVertex("D");
  const E = g.addVertex("E");
  const F = g.addVertex("F");
  const G = g.addVertex("G");
  const H = g.addVertex("H");
  g.addEdge(A, B);
  g.addEdge(B, A);
  g.addEdge(A, D);
  g.addEdge(D, A);
  g.addEdge(B, D);
  g.addEdge(D, B);
  g.addEdge(B, C);
  g.addEdge(C, B);
  g.addEdge(D, E);
  g.addEdge(E, D);
  g.addEdge(D, H);
  g.addEdge(H, D);
  g.addEdge(D, F);
  g.addEdge(F, D);
  g.addEdge(F, H);
  g.addEdge(H, F);
  g.addEdge(C, G);
  g.addEdge(G, C);
  return {
    graph: g,
    nodes: [A, B, C, D, E, F, G, H],
  };
};

describe("Depth first traversal of graph", () => {
  test("should traverse all items in the graph", () => {
    const { graph, nodes } = buildSampleGraph();
    const A = nodes[0];
    const depthFirstList = [];
    graph.depthFirstTraversal(A, (n) => depthFirstList.push(n));
    expect(depthFirstList.length).toBe(8);
  });

  test("should traverse first node first", () => {
    const { graph, nodes } = buildSampleGraph();
    const A = nodes[0];
    const depthFirstList = [];
    graph.depthFirstTraversal(A, (n) => depthFirstList.push(n));
    expect(depthFirstList[0]).toBe(A.value);
  });

  test("should traverse one of the outer nodes last", () => {
    const { graph, nodes } = buildSampleGraph();
    const A = nodes[0];
    const depthFirstList = [];
    graph.depthFirstTraversal(A, (n) => depthFirstList.push(n));
    expect(
      ["G", "E", "H", "F"].includes(depthFirstList[depthFirstList.length - 1])
    ).toBe(true);
  });
});
