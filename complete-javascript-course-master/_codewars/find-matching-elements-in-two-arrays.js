'use strict';

const arrayOne = ['7', 4, '7', 3, 9, 5, 5, 10, 'text'];
const arrayTwo = [3, 7, 1, 5, 5, 4, 6, 2, 25, 30];

const compareArrays = function (arr1, arr2) {
	function changeToNumber(arr) {
		let result = [];
		for (let i = 0; i < arr.length; i++) {
			console.log(Number(arr[i]));
			if (isNaN(Number(arr[i]))) {
				continue;
			} else {
				result.push(Number(arr[i]));
			}
		}
		return result;
	}
	const inputOneToNumber = changeToNumber(arr1);
	console.log(inputOneToNumber);
	const inputTwoToNumber = changeToNumber(arr2);
	console.log(inputTwoToNumber);

	let outputArray = inputOneToNumber.filter((el) =>
		inputTwoToNumber.includes(el)
	);
	// let outputArray = arr1.filter(function (el) {
	// 	return arr2.includes(el);
	// });
	outputArray = outputArray.filter(
		(el, index) => outputArray.indexOf(el) === index
	);
	return outputArray.sort((a, b) => a - b);
};

const output = compareArrays(arrayOne, arrayTwo);
console.log(output);

//const hasElement = (el, arr) => arr.includes(el);

//const elementIncluded = hasElement(10, arrayOne);
//console.log(elementIncluded);

console.log(NaN === NaN);
