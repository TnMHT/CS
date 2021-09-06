
const nemo = ['nemo'];
const {performance} = require('perf_hooks');
const large = new Array(10000).fill('nemo');

function findNemo(array) {
  let time0 = performance.now() 
  for (let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log('Found Nemo');
    }
  }
  let time1 = performance.now();

  console.log('TIME: ' + (time1 - time0));
}

// findNemo(large);

const people = [0,1,2,3,4];

function getFirstTwoElements(array){
    console.log(array[0]); // O(1)
    console.log(array[1]); // O(1)
}


// getFirstTwoElements(people); // O(2)


// O(n^2) or O(n *n)

const numbers = [1,2,3,4,5];

function logTwoPairs(array){
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j< array.length; j++){
            console.log(array[i], array[j]);
        }
    }

}

logTwoPairs(numbers);
