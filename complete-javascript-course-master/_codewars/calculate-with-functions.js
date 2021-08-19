"use strict";

const calculate = function (num1, op, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return Math.floor(num1 / num2);
      break;
  }
};

// function zero(arg) {
//   return arg ? calculate(...[0, ...arg]) : 0;
// }
// function one(arg) {
//   return arg ? calculate(...[1, ...arg]) : 1;
// }
// function two(arg) {
//   return arg ? calculate(...[2, ...arg]) : 2;
// }
// function three(arg) {
//   return arg ? calculate(...[3, ...arg]) : 3;
// }
// function four(arg) {
//   return arg ? calculate(...[4, ...arg]) : 4;
// }
// function five(arg) {
//   return arg ? calculate(...[5, ...arg]) : 5;
// }
// function six(arg) {
//   return arg ? calculate(...[6, ...arg]) : 6;
// }
// function seven(arg) {
//   return arg ? calculate(...[7, ...arg]) : 7;
// }
// function eight(arg) {
//   return arg ? calculate(...[8, ...arg]) : 8;
// }
// function nine(arg) {
//   return arg ? calculate(...[9, ...arg]) : 9;
// }
//
// function times(num) {
//   return ["*", num];
// }
// function minus(num) {
//   return ["-", num];
// }
// function plus(num) {
//   return ["+", num];
// }
// function dividedBy(num) {
//   return ["/", num];
// }

// function zero(arg) {
//   if (arg) {
//     return Math.floor(eval("0" + arg));
//   } else {
//     return "0";
//   }
// }

// console.log(seven(times(five())));
// console.log(seven(minus(five())));
// console.log(seven(plus(five())));
// console.log(seven(dividedBy(five())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));
// seven(minus(five()));
// seven(plus(five()));
// seven(dividedBy(five()));
// four(plus(nine()));
// eight(minus(three()));
// six(dividedBy(two()));

//console.log(seven(times(five())));

/*
1) The output of five() is the input to times()
2) The output of times() is the input to seven()
*/

const n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  };
};
const zero = n(0);
const one = n(1);
const two = n(2);
const three = n(3);
const four = n(4);
const five = n(5);
const six = n(6);
const seven = n(7);
const eight = n(8);
const nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}

console.log(five);
console.log(seven);
console.log(five());
console.log(seven());

console.log(times(five()));

console.log(seven(times(five())));
// console.log(seven(minus(five())));
// console.log(seven(plus(five())));
// console.log(seven(dividedBy(five())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));

module.exports = returnArrayDiff;

// const result = returnArrayDiff(inputA, inputB);
// console.log(result);
