"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 1) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencies = new Map(); // this is a built in HashTable
  }

  /**
   * Adds a new Vertex to the Graph Adjacency list
   * @param {any} value
   */
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencies.set(vertex, []);
    return vertex;
  }

  /**
   * Adds a new edge between vertices
   * @param {Vertex} startVertex
   * @param {Vertex} edgeVertex
   */
  addEdge(startVertex, endVertex, weight = 1) {
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex)) {
      let edges = this.adjacencies.get(startVertex); // []
      edges.push(new Edge(endVertex, weight));
    } else {
      throw new Error("Invalid input Vertex");
    }
  }

  /**
   * Returns a list of all neighboring Vertices of the input Vertex
   * @param {Vertex} Vertex
   */
  getNeighbors(vertex) {
    if (this.adjacencies.has(vertex)) {
      const edges = this.adjacencies.get(vertex);
      const neighbors = edges.map((edge) => edge.vertex);
      return neighbors;
    }
  }

  /**
   * Returns a list of all neighboring Edges of the input Vertex
   * @param {Vertex} Vertex
   */
  getEdges(vertex) {
    if (this.adjacencies.has(vertex)) {
      const edges = this.adjacencies.get(vertex);
      return edges;
    }
  }

  /**
   * Return all Nodes that are listed in the adjacency list
   */
  getNodes() {
    return this.adjacencies.keys();
  }

  /**
   * Returns the total number of nodes in the graph.
   */
  size() {
    return this.adjacencies.size;
  }
}

module.exports = Graph;
