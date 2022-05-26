/*
TREES

Hierarchical Structure

Parent Child Relationship

*/

// Binary Trees
// Each node can only have one parent
// each node can only have 0-1-2 nodes
// Each node represents a different state
// Perfect Tree = Half of our nodes are on the bottom level
// O(log N)

// Binary Search Tree
// Great for searching or comparing
// preserves relationships - parent - child
// All nodes to the left should be higher in value,
// no 0(1) operations

// Balance vs UnBalanced BST
// unbalanced bst can lead to 0(n) operations

class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNdoe = new Node(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					// LEFT
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					//RIGHT
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	loopup(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				return currentNode;
			}
		}
		return false;
	}

}

// AVL TREES + RED BLACK TREES


// BINARY HEAPS
// good for comparison
// Priority Queue
// TRIE - specialized tree used for searching