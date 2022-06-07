/*
MERGE SORT
- divide and conquer
- 0(n log n)
- one of the most efficient ways to sort a list


*/

const numbers = [2, 44, 55, 7, 22, 3, 45, 19, 78, 0];

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}
	// splitting the array into left and right
	const length = array.length;
	const middle = Math.floor(length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);
