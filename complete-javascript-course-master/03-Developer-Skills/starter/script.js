// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
/*
const classmates = 5;
const pages = 5;

const calculateBlankPages = function (classmates, pages) {
  //Option 1
  //   let totalPages;
  //   if (classmates > 0 && pages > 0) {
  //     totalPages = classmates * pages;
  //     return totalPages;
  //   } else {
  //     return 0;
  //   }
  //Option 2
  return classmates > 0 && pages > 0 ? classmates * pages : 0;
};

//Option 3
const calcPages = (n, m) => Math.max(0, n) * Math.max(0, m);

let pagesToCopy = calculateBlankPages(classmates, pages);
console.log(pagesToCopy);

let pagesToCopyForClass = calcPages(classmates, pages);
console.log(pagesToCopyForClass);
*/

//PROBLEM 1
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, -1, -5, 0, 'error', 10, 23, 16, 18, 11, 8, 3];

//1) Understanding the problem
// - what is temperature amplitude: difference between highest and lowest temp
// - how to compute the max and min temperatures
// - what's a sensor error and what to do when one occurs

//2) Breaking up into sub-problems
// - How to ignore errors?
// - How to find max temp in an array?
// - How to find min temp in an array?
// - Subtract min from max (amplitude) and return it

const calculateTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue; //here we abort the current iteration and proceed to the next one if the type of the temps[i] value is not a number
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

//const amplitude = calculateTempAmplitude(temperatures);
//console.log(amplitude);

//PROBLEM 2
// We now need this function to work with 2 arrays.

//Understanding the problem
// - With 2 arrays, do we need to implement the same functionality twice? No, just merge two arrays

//2) Breaking up into sub-problems
// - How to merge two arrays?

const calculateTempAmplitudeFromTwoSets = function (set1, set2) {
  let mergedSet = set1.concat(set2);
  let max = mergedSet[0];
  let min = mergedSet[0];
  for (let i = 0; i < mergedSet.length; i++) {
    const currentValue = mergedSet[i];
    if (typeof currentValue !== 'number') continue; //here we abort the current iteration and proceed to the next one if the type of the temps[i] value is not a number
    if (currentValue > max) max = currentValue;
    if (currentValue < min) min = currentValue;
  }
  return max - min;
};

const amplitude = calculateTempAmplitudeFromTwoSets(
  temperatures1,
  temperatures2
);
console.log(amplitude);
