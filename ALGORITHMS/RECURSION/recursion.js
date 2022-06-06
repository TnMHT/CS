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


Recursion vs Itteration
- anything that can be done recursibvely can be done itteratively
- Recursion can be DRY and readable
- Recursion can be more memory intensive with larger stacks

When to Use Recursion
- BFS + DFS (searching)
- Using a tree or converting something a tree, consider recursion

1. Divide into a number of subproblems that are smaller instanves of the same problem
2. each instance of the subproblem is identical in nature
3. The solutions of each subproblem can be combined to solve the problem at hand.
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