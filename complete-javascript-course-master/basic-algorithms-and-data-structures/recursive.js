"use strict";

//// Factorial

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

const result = factorial(4);

const factorialWithFor = (n) => {
  if (n < 0) return -1;
  let result = n;
  for (let i = 1; i < n; i++) {
    result = i * result;
    console.log(`at i = ${i}, result = ${result}`);
  }
  return result;
};

const factorialWithWhile = (n) => {
  if (n < 0) return -1;
  let result = n;
  let counter = n - 1;
  while (counter > 0) {
    result = result * counter;
    counter--;
  }
  return result;
};

// console.log(factorialWithWhile(4));
// console.log(4 * 3 * 2 * 1);

//// Fibonacci Sequence
// 1, 1, 2, 3, 5, 8, 13, 21
const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibResult = fibonacci(5);
console.log(fibResult);

//// Reverse String

const reverseString = function (str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
};
const reversedString = reverseString("cat");
//console.log(reversedString);
