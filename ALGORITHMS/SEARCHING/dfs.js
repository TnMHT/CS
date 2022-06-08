/*
DEPTH FIRST SEARCH

- Follows one branch of the tree as many levels as possible down until target or end is reached
- Contines at the nearest ancestor 
- lower memory requirement than BFS

BFD VS DFS:
Time complexity is the same, traversal is 0(n)

PROS
- less memory required
- does the path exist?

CONS
- can get slow if the tree of graph is deep
 */
// IN ORDER

// PRE ORDER
// POST ORDER

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

	DFSInOrder() {
		return traverseInOrder(this.root, []);
	}
	DFSPostOrder() {
		return traversePostOrder(this.root, []);
	}
	DFSPreOrder() {
		return traversePreOrder(this.root, []);
	}
}

function traverseInOrder(node, list) {
	if (node.left) {
		traverseInOrder(node.left, list);
	}
	list.push(node.value);
	if (node.right) {
		traverseInOrder(node.right, list);
	}
	return list;
}

function traversePreOrder(node, list) {
	list.push(node.value);
	if (node.left) {
		traversePreOrder(node.left, list);
	}
	if (node.right) {
		traversePreOrder(node.right, list);
	}
	return list;
}

function traversePostOrder(node, list) {
	if (node.left) {
		traversePostOrder(node.left, list);
	}
	if (node.right) {
		traversePostOrder(node.right, list);
	}
	list.push(node.value);
	return list;
}
