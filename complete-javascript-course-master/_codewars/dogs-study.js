"use strict";

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

/*const checkDogs = function (ages1, ages2) {
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
console.log(newTest1);*/

const dogAges = [
  [5, 2, 4, 1, 15, 8, 3],
  [16, 6, 10, 5, 6, 1, 4],
];

/*const calcAverageHumanAge = function (agesOfDogs) {
  const humanAgesOfAdults = agesOfDogs
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18);
  return (
    humanAgesOfAdults.reduce((totalAge, age) => totalAge + age, 0) /
    humanAgesOfAdults.length
  );
};*/

const calcAverageHumanAge = (agesOfDogs) =>
  agesOfDogs
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((totalAge, age, i, arr) => totalAge + age / arr.length, 0);

console.log(calcAverageHumanAge(dogAges[0]));
console.log(calcAverageHumanAge(dogAges[1]));
