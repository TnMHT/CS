// A Hash table is a structure with key value pairs
// A hash function generates a value of fixed length of each input it gets
// Fast loopups, inserts and flexible keys(maps) however they are unordered and have slow key iteration
// insert, lookop, delete, search operations are all 0(1)
// hash collision is when two pieces of data share the same hash value
// fast access but more memory

let user = {
	name: "Tommy",
	age: 28,
	athlete: true,
	scream: function () {
		console.log("AHHHHHH!");
	},
};

// Javascript objects keys can only have one data type but Maps can have any data type as a key
const newMap = new Map();

class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	// the underscore here is meant to tell others this is a private method
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
			this.data[address].push([key, value]);
		}
		this.data[address].push([key, value]);
		// console.log(this.data)
		return this.data;
	}

	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
					// console.log(currentBucket[i][1]);
				}
			}
		}
		return undefined;
	}

    keys(){
        const keysArray = [];
        for(let i=0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }

}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 1000);

myHashTable.get("grapes");
