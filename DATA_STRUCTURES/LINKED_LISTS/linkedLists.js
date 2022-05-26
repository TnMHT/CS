/*
LINKED LISTS


// fast insertion, deletion.
ordered and flexible in size

slow lookup &  use more memory
*/

// A pointer is a reference to another place in memory
const obj1 = { a: true };
const obj2 = obj1;

class Node {
	constructor(value) {
		(this.value = value), (this.next = null), (this.prev = null);
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	insert(index, value) {
		// check params
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = new Node(value);
		const leader = this.traverseToIndex(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

    remove(index){
        // check params
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList*

    }

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode != null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
		// console.log(array);
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(0);

myLinkedList.printList();
myLinkedList.insert(2, 99);

console.log(myLinkedList);


class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
            prev: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
        newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
        this.head.prev = newNode
		this.head = newNode;
		this.length++;
		return this;
	}
	insert(index, value) {
		// check params
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = new Node(value);

		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = newNode;
        newNode.prev = leader;
		newNode.next = follower;
        follower.prev = newNode;
		this.length++;
		return this.printList();
	}
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

    remove(index){
        // check params
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList

    }

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode != null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
		// console.log(array);
	}
}