'use strict';

const inputArrays = [
	[
		[3, 5, 2, 12, 7],
		[4, 1, 15, 8, 3],
	],
	[
		[9, 16, 6, 8, 3],
		[10, 5, 6, 1, 4],
	],
];

const checkDogs = function (ages1, ages2) {
	const dogsOnly = ages1.slice();
	dogsOnly.splice(0, 1);
	dogsOnly.splice(-2);
	console.log([...dogsOnly, ...ages2]);
	[...dogsOnly, ...ages2].forEach((dog, index) => {
		if (dog < 3) {
			console.log(
				`Dog number ${index + 1} is still a puppy, and is ${dog} years old 🐶`
			);
		} else {
			console.log(
				`Dog number ${index + 1} is an adult, and is ${dog} years old`
			);
		}
	});
};

checkDogs(...inputArrays[0]);
checkDogs(...inputArrays[1]);

const test = [3, 5, 2, 12, 7];
const newTest = test.slice();
const newTest1 = [...test];
console.log(newTest.splice(1, newTest.length - 2));
console.log(newTest1.splice(-2));
console.log(newTest);
console.log(test);
console.log(newTest1);
