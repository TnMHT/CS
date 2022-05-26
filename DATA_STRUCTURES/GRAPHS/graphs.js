/*
GRAPHS

a set of values that are relation in a pair wide fashion
 good for real relationships and links


 DIRECTED VS UNDIRECTED GRAPHS

 CYCLIC VS ACYCLIC

 WEIGHTED VS UNWIEGHTED



*/

// EDGE LIST
// ADJACENCY LIST
// ADJACENCY MATRIX

class Graph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	}
	addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
	addEdge(node1, node2) {
        // undirected graph
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1);
    }

}

const myGraph = new Graph();
