'use strict';

const inputArray = [[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []];

const returnHomogeneousArrays = function (arrOfArrays) {
	let output = [];
	function compareElsForType(el1, el2) {
		return typeof el1 === typeof el2 ? true : false;
	}
	function checkIfHomogeneous(arr) {
		let trueFalseArr = [];
		for (let i = 0; i < arr.length - 1; i++) {
			let j = arr.length - 1;
			for (let k = j; k > i; k--) {
				const comparison = compareElsForType(arr[i], arr[k]);
				trueFalseArr.push(comparison);
			}
		}
		return trueFalseArr;
	}
	for (let m = 0; m < arrOfArrays.length; m++) {
		if (arrOfArrays[m].length === 1) {
			output.push(arrOfArrays[m]);
			continue;
		}
		if (arrOfArrays[m].length === 0) {
			continue;
		}
		if (checkIfHomogeneous(arrOfArrays[m]).includes(false)) {
			continue;
		} else {
			output.push(arrOfArrays[m]);
		}
	}
	return output;
};

const outputArray = returnHomogeneousArrays(inputArray);
console.log(outputArray);
