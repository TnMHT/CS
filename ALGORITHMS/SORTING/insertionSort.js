/*
INSERTION SORT

- useful for time where the list is already almost sorted
- good for small data sets
*/

const numbers = [2, 44, 55, 7, 22, 3, 45, 19, 78, 0];

function insertionSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			// move number to the first position
			array.unshift(array.splice(i, 1)[0]);
		} else {
			// find out where the number should go
			for (let k = 1; k < i; k++) {
				if (array[i] > array[j - 1] && array[i] < array[k]) {
					// move the bumer to the right place
					array.splice(j, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}
}

insertionSort(numbers);
console.log(numbers);
