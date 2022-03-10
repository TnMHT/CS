

// key value pairs
// Key


// HASH FUNCTION-  given a certain input we'll get the same output

let user = {
    age: 25,
    name: 'Tommyy',
    athlete: true,
    shoot: function(){
        console.log('SHOOT');
    }
}




// COLLLISION - O(n/k) - k being the size of the hash tab;e



const newMap = new Map();


// IMPLEMENTING A HASH TABLE

class HashTable {
    constructor(size){
        this.data = new Array(size);
        // [[KEY, VALE]]
    }

    _hash(key){
        let hash = 0;
        for(let i=0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // SET 

    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    // GET

    get(key){
        let address = this._hash(key);
        const currentAddress = this.data[address];
        console.log(currentAddress);
    }



}

const table = new HashTable(10);


table.set('newKey', 'newValue');
table.get('newKey');
console.log(table);
