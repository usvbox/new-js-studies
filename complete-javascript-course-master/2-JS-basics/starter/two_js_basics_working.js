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

/*

//math operators
let now, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
*/

/*
let yearJohn = now - ageJohn;
let yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
*/

/*
//logical operators
let johnOlder = ageJohn > ageMark;
console.log(johnOlder);
*/

/*
//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
*/

/*

//operator precedence

let yearJohn = 1989;
let fullAge = 18;
let isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

let averageAgeJohnMark = (ageJohn + ageMark) / 2;
console.log(averageAgeJohnMark);

//multiple assignments
let x,y;
x = y = (3+5) *4 - 6; // 8 *4 - 6 // 32 - 6 // 26
console.log(x,y); //the assignment operator (=) works from right to left, therefore the x variable has a value of 26 in console.log

//more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

//coding challenge 1

let heightJohn, heightMark, massJohn, massMark, bmiJohn, bmiMark;
heightJohn = 1.8;
heightMark = 1.75;
massJohn = 79;
massMark = 78;
bmiJohn = massJohn / Math.pow(heightJohn,2);
bmiMark = massMark / Math.pow(heightMark,2);
let bmiJohnGreaterThanBmiMark = bmiJohn > bmiMark;
console.log('John\'s BMI: ' + bmiJohn, 'Mark\'s BMI: ' + bmiMark);
console.log('Is John\'s BMI greater than Mark\'s? ' + bmiJohnGreaterThanBmiMark);
*/


/*
//if / else statements

let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

let isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

let heightJohn, heightMark, massJohn, massMark, bmiJohn, bmiMark;
heightJohn = 1.8;
heightMark = 1.75;
massJohn = 100;
massMark = 78;
bmiJohn = massJohn / Math.pow(heightJohn,2);
bmiMark = massMark / Math.pow(heightMark,2);
let bmiJohnGreaterThanBmiMark = bmiJohn > bmiMark;
//console.log('John\'s BMI: ' + bmiJohn, 'Mark\'s BMI: ' + bmiMark);
//console.log('Is John\'s BMI greater than Mark\'s? ' + bmiJohnGreaterThanBmiMark);

if (bmiJohn > bmiMark) {
    console.log('John\'s BMI is greater than Mark\'s!');
} else {
    console.log('Mark\'s BMI is greater than John\'s!');
}
*/

/*

//boolean logic

let firstName = 'John';
let age = 25;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if ( age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

*/

//the ternary operator adn switch statements

let firstName = 'John';
let age = 17;

//ternary operator

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.'); //ternary uses three operators 

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18) {
    console.log(firstName + ' drinks beer.');
} else {
    console.log(firstName + ' drinks juice.');
}
*/

//switch statement

let job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'driver':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a yaoung man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}