/*
Dynamic Programming

optimization technique using cache
a way to solve problems by breaking them down into sub problems

DP - Divide and conqure + memoization

MEMOIZATION

Caching is a way to store values for later on to be able to use data faster 
a way to remember a solution to a sub problem

STEPS
1. can be divide into sub problems
2. recursive solution
3. Are there repetitive sub problems?
4. memoize subproblems
5. Demaind a raise from your boss
*/

function addTo80(n) {
	return n + 80;
}

addTo80(5);

function memoizedAddTo80(n) {
	let cache = {};
	return function (n) { // using a closure
		if (n in cache) {
			return cache[n];
		} else {
			cache[n] = n + 80;
			return cache[n];
		}
	};
}
const memoized = memoizedAddTo80();

memoized(5);
