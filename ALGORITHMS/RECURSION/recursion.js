/*
RECURSION

A function that refers to itself within the function

- Good for tasks that have repeated sub-tasks

- Stack overflow is a possible problem of recursion - When running out of memory
- Every function needs a base case & a Recursive case

STEPS
1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually having 2 returns
*/


let counter = 0;
function inception(){
    console.log(counter)
    if(counter > 3){
        console.log('done')
        return 'dODNE'
    }
    counter++ 
    return inception();
}

inception()