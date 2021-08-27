'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function () {
    console.log(2037 - this.year);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(jonas instanceof Person);
