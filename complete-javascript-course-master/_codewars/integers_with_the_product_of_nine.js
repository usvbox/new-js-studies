'use strict';

const rowOfIntegers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
];

const integersWithTheProductOfNine = function (arrayOfIntegers) {
	let results = {};
	function idEvenNumber(arr) {
		let evens = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				evens.push(arr[i]);
			} else {
				continue;
			}
		}
		return evens;
	}
	function idNumbersEndInFive(arr) {
		let numbersEndInFive = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 5 === 0) {
				numbersEndInFive.push(arr[i]);
			} else {
				continue;
			}
		}
		return numbersEndInFive;
	}
	function mergeArraysUniqueOnly(arr1, arr2) {
		for (let i = 0; i < arr2.length; i++) {
			if (!arr1.includes(arr2[i])) {
				arr1.push(arr2[i]);
			}
		}
		arr1.sort((a, b) => a - b);
		return arr1;
	}
	function removeElementFromArray(arr1, arr2) {
		for (let i = 0; i < arr2.length; i++) {
			if (arr1.includes(arr2[i])) {
				let a = arr1.indexOf(arr2[i]);
				arr1.splice(a, 1);
			} else {
				continue;
			}
		}
		return arr1;
	}
	function getLastDigit(number) {
		const numberAsString = number.toString();
		const lastDigitFromString = numberAsString.slice(-1);
		const lastDigit = Number(lastDigitFromString);
		return lastDigit;
	}
	function produceArrayOfLastDigits(arr) {
		let lastDigits = [];
		for (let i = 0; i < arr.length; i++) {
			lastDigits.push(getLastDigit(arr[i]));
		}
		return lastDigits;
	}
	function checkIfNumberEndsInNine(arr) {
		let resultingNumberParams = {};
		let resultingNumber = 1;
		for (let i = 0; i < arr.length; i++) {
			resultingNumber *= arr[i];
		}
		resultingNumberParams['number'] = resultingNumber;
		resultingNumberParams['lastDigit'] = getLastDigit(resultingNumber);
		return resultingNumberParams;
	}
	const evenNumbers = idEvenNumber(arrayOfIntegers);
	results['evenNumbers'] = evenNumbers;

	const numbersEndingInFive = idNumbersEndInFive(arrayOfIntegers);
	results['numbersEndingInFive'] = numbersEndingInFive;

	const mergedNumbers = mergeArraysUniqueOnly(
		evenNumbers,
		numbersEndingInFive
	);

	const howManyToRemove = mergedNumbers.length;
	results['howManyToRemove'] = howManyToRemove;

	const remainingNumbers = removeElementFromArray(
		arrayOfIntegers,
		mergedNumbers
	);
	results['remainingNumbers'] = remainingNumbers;

	const lastDigitsOfRemainingNumbers = produceArrayOfLastDigits(
		remainingNumbers
	);
	results['lastDigitsOfRemainingNumbers'] = lastDigitsOfRemainingNumbers;

	const uniqueLastDigits = lastDigitsOfRemainingNumbers.filter(function (
		el,
		index
	) {
		return lastDigitsOfRemainingNumbers.indexOf(el) === index;
	});
	results['uniqueLastDigits'] = uniqueLastDigits;

	const answer = checkIfNumberEndsInNine(remainingNumbers);
	results['answer'] = answer;

	return results;
};

let test = integersWithTheProductOfNine(rowOfIntegers);
console.log(test);

// let duplicatedArray = [1, 2, 1, 3, 5, 3];
// const testIndexOf = duplicatedArray.indexOf(1);
// console.log(testIndexOf);

// let uniqueArray = duplicatedArray.filter(function (el, index) {
// 	console.log(duplicatedArray.indexOf(el) === index);
// 	return duplicatedArray.indexOf(el) === index;
// });

// console.log(uniqueArray);
