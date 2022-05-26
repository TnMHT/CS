/*
OPERATIONS ON DATA STRUCTURES

ACCESS - ACCESS DATA
INSERTION -  INSERTING AN ITEM
DELETION - DELETING AN ITEM
TRAVERSAL - ACCESS EACH DATA ITEM ONLY ONCE
SORTING - SORTING A COLLECTION IN SOME LOGICAL ORDER I.E. ASENDINHNG OR DECENDING
SEARCHING - FINDING THE LOCATION OF A DATA ITEM IF IT EXIST IN A CERTAIN COLLECTION
MERGING - COMBINING THE DATA OF TWO SORTED COLLECTIONS INTO ONE 

--- ARRAYS ---
ARRAYS ORGANIZE DATA SEQUENTIALY 
BEST FOR ONE BY ONE OPERATIONS

*/


const strings = ['a', 'b', 'c', 'd', 'e', 'f']

// INSERT
strings.push('g') // o(1)

// DELETE
strings.pop() // o(1)

// UNSHIFT - TRAVERSAL
strings.unshift('z') // o(n)

// SPLICE 
strings.splice(2,0, 'alien')


console.log(strings)


/*
STATIC VS DYNAMIC ARRAYS

STATIC ARRAYS ARE FIXED IN SIZE
DYNAMIC ARRAYS ALLOW FOR EXPANSION 
*/

// BUILD AN ARRAY

class MyArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index){
        const item = this.data[index]
        this.shiftItems()
    }
    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const newArray = new MyArray()

newArray.push(10)
newArray.push(20);
newArray.push(30);
newArray.push(40);
newArray.push(50);
newArray.delete(5)

console.log(newArray)
