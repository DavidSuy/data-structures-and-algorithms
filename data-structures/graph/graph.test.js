/*
Write tests to prove the following functionality:

Node can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all nodes can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between nodes included
The proper size is returned, representing the number of nodes in the graph
A graph with only one node and edge can be properly returned
*/

"use strict";

const Graph = require("./graph.js");

describe("Graph", () => {
  test("Node can be successfully added to the graph", () => {
    const g = new Graph();
    expect(g.size()).toBe(0);
    g.addVertex("A");
    expect(g.size()).toBe(1);
    g.addVertex("B");
    expect(g.size()).toBe(2);
  });

  test("An edge can be successfully added to the graph", () => {
    const g = new Graph();
    const A = g.addVertex("A");
    const B = g.addVertex("B");
    const C = g.addVertex("C");
    const D = g.addVertex("D");
    g.addEdge(A, B);
    g.addEdge(A, C);
    g.addEdge(A, D);
    const neighborsOfA = g.getNeighbors(A);
    expect(neighborsOfA.length).toBe(3);
  });

  test("A collection of all nodes can be properly retrieved from the graph", () => {
    const g = new Graph();
    const A = g.addVertex("A");
    const B = g.addVertex("B");
    const C = g.addVertex("C");
    const D = g.addVertex("D");
    const vertices = Array.from(g.getNodes());
    expect(vertices).toEqual(expect.arrayContaining([A, B, C, D]));
  });

  test("All appropriate neighbors can be retrieved from the graph", () => {
    const g = new Graph();
    const A = g.addVertex("A");
    const B = g.addVertex("B");
    const C = g.addVertex("C");
    const D = g.addVertex("D");
    g.addEdge(A, B);
    g.addEdge(A, C);
    g.addEdge(A, D);
    const neighbors = g.getNeighbors(A);
    expect(neighbors.length).toBe(3);
  });

  test("Neighbors are returned with the weight between nodes included", () => {
    const g = new Graph();
    const A = g.addVertex("A");
    const B = g.addVertex("B");
    const C = g.addVertex("C");
    const D = g.addVertex("D");
    g.addEdge(A, B, 1);
    g.addEdge(A, C, 2);
    g.addEdge(A, D, 3);
    const edgesOfA = g.getEdges(A);
    expect(edgesOfA.length).toBe(3);
    const weights = edgesOfA.reduce((acc, edge) => acc + edge.weight, 0);
    expect(weights).toBe(6);
  });

  test("The proper size is returned, representing the number of nodes in the graph", () => {
    const g = new Graph();
    expect(g.size()).toBe(0);
    g.addVertex("A");
    g.addVertex("B");
    expect(g.size()).toBe(2);
  });

  test("A graph with only one node and edge can be properly returned", () => {
    const g = new Graph();
    expect(g.size()).toBe(0);
    const A = g.addVertex("A");
    g.addEdge(A, A);
    expect(g.size()).toBe(1);
    const edgesOfA = g.getEdges(A);
    expect(edgesOfA.length).toBe(1);
  });

  test("A graph should not accept an edge from a vertex no in the graph itself", () => {
    const g1 = new Graph();
    const g2 = new Graph();
    const A = g1.addVertex("A");
    const B = g2.addVertex("B");
    expect(() => g2.addEdge(A, B)).toThrow();
  });
});
