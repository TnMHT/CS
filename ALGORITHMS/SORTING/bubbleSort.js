/*
BUBBLE SORT

- elementary sort
- simple but usually least efficient

 */

const numbers = [2, 44, 55, 7, 22, 3, 45, 19, 78, 0];

function bubbleSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		for (let k = 0; k < length; k++) {
			if (array[k] > array[k + 1]) {
				let temp = array[k];
				array[k] = array[k + 1];
				array[k + 1] = temp;
			}
		}
	}
}

bubbleSort(numbers);
console.log(numbers)