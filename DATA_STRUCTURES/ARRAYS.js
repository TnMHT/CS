// ARRAYS

const chars = ['a', 'b', 'c', 'd'];     // 4*4 = 16 bytes of storage on a 32 bit system


/*
// PUSH
chars.push('e');    // O(1)

// POP
chars.pop();    // O(1)

// UNSHIFT
chars.unshift('x');     // O(n)

// SPLICE
chars.splice(2, 0, 'added');    // O(n)
 */


// HOW TO BUILD AN ARRAY 

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for (let i = index; i< this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

/*
const newArray = new MyArray();

newArray.push('first');
newArray.push('second');
newArray.push('third');

newArray.delete(0);


console.log(newArray);

*/

// set an empty string to be the new reversed string
// travese the input str from the last input and append each char to the new reversed string
// return the reversed string

function reverse(str) {
    // CHECK INPUT
    if(!str || str.length <2 || typeof str !== 'string'){
        return 'NOT A STRING';
    }
    const reversedString = [];
    for(let i = str.length -1; i >=0; i--) {
        reversedString.push(str[i]);
    }   
    // console.log(reversedString.join(''))
    return reversedString.join('');
}


console.log(reverse('hello'))
