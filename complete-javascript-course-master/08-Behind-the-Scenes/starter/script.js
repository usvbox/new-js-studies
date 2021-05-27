'use strict';

//The Scope Chain

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      const output = 'NEW OUTPUT!';
    }
    //console.log(add(2, 3));
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(millenial);

testVar;
console.log(testVar);

var testVar = 5; */

//Hoisting

//Variables
/* console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991; */

//Functions
/* console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; */

//Example demonstrating the key pitfall of hoisting - a behavior we can get when not careful with using var-type variables

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var testVariable = 0;
// function checkFalsy(variable) {
//   if (variable) {
//     return 'var is not zero';
//   }
//   if (!variable) {
//     return 'var is zero';
//   }
// }

// console.log(checkFalsy(testVariable));

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

// this keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
f();
