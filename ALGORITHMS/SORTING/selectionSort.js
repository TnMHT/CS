/*
SELECTION SORT

- elementary sorts
- starts from the 
*/

function selectionSort(array) {
	const length = array.length;
	for (let i = 0; i < length; i++) {
		// set current index as minimum
		let min = i;
		let temp = array[i];
		for (let k = i + 1; k < length; k++) {
			if (array[k] < array[min]) {
				// update minimum if current is lower that what we had previously
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}
