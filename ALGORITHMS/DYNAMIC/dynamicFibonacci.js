/*
Divide and conqure + memoization
*/

let calculations = 0;
function fibonacci(n) {
	calculations++;
	if (n < 2) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
	// 0(n)
	let cache = {};
	return function fib(n) {
		if (n in cache) {
			return cache[n];
		} else {
			if (n < 2) {
				return n;
			} else {
				cache[n] = fib(n - 1) + fib(n - 2);
				return cache[n];
			}
		}
	};
}

function fibonacciMaster2(n) {
	let answer = [0, 1];
	for (let i = 2; i <= n; i++) {
		answer.push(answer[i - 2] + answer[i - 1]);
	}
	return answer.pop();
}
// drawback of increased space complexity

const fasterFib = fibonacciMaster();
