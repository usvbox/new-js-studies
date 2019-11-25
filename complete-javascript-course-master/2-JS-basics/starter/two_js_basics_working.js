/*

//type coercion

let firstName = 'John';
let age = 28;
let job, isMarried;
job = 'teacher';
isMarried = false;
console.log (firstName + ' is a ' + age + ' year-old ' + job + '. Married: ' + isMarried + '.');

//variable mutation

job = 'driver';
age = 'twenty eight';
alert(firstName + ' is a ' + age + ' year-old ' + job + '. Married: ' + isMarried + '.');

let lastName = prompt('What is John\'s last name?')
console.log(firstName + ' ' + lastName);

*/

//math operators
let now, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
let yearJohn = now - ageJohn;
let yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
let johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);