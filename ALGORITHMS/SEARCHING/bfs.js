/*
BREADTH FIRST SEARCH

- Used for Trees and graphs
- Uses additional memory to track child nodes
- starting with the root node and move left to right across subsequent levels until node is found or tree ends

BFD VS DFS: 
PROS 
- best for finding the shortest path
- start with the root node and then the closest nodes from the parent

CONS
- more memory is required


 */

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

	breadthFirstSearch() {
		let currentNode = this.root;
		let list = [];
		let queue = [];
		queue.push(currentNode);

		while (queue.length > 0) {
			currentNode = queue.shift(); // returns the first item in the queue
			list.push(currentNode.value);
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		return list;
	}

	breadthFirstSearchR(queue, list) {
		if (!queue.length) {
			return list;
		}
		let currentNode = queue.shift();
        list.push(currentNode.value)
		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}
        return this.breadthFirstSearchR(queue, list)
	}
}
