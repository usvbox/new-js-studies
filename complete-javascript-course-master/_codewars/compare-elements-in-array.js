'use strict';

const inputArray = [4, 3, 4, 3, 3, 5, 3];

const testAr = [...new Set(inputArray)];
console.log(testAr);

const findDuplicates = function (arr) {
	// let output = [];
	// for (let i = 0; i <= arr.length - 2; i++) {
	// 	let j = arr.length - 1;
	// 	for (let k = j; k > i; k--) {
	// 		if (arr[i] === arr[k]) {
	// 			output.push(arr[i]);
	// 		}
	// 	}
	// }
	const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
	return [...new Set(filtered)];
};

const outputArray = findDuplicates(inputArray);
console.log(outputArray);
