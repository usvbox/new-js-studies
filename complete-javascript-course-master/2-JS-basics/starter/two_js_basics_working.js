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

/*

//the ternary operator adn switch statements

let firstName = 'John';
let age = 17;

//ternary operator

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.'); //ternary uses three operators 

let drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

*/

/*
if (age >= 18) {
    console.log(firstName + ' drinks beer.');
} else {
    console.log(firstName + ' drinks juice.');
}
*/

/*

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

switch(true) { //note the conditional that you want to use in the switch
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

*/

/*
// truthy and falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN - result in false in an if/else statement
// truthy values: all not falsy values

let height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable is not defined.');
}

// equality operators

if (height === '23') {
    console.log('The == operator does type coercion.'); //so '23' will be converted to 23 when comparing the value in the height variable to the condition. 
}

*/


/*
// challenge 2

let johnTeamGame1 = 195;
let johnTeamGame2 = 94;
let johnTeamGame3 = 123;
let mikeTeamGame1 = 123;
let mikeTeamGame2 = 94;
let mikeTeamGame3 = 123;
let maryTeamGame1 = 123;
let maryTeamGame2 = 94;
let maryTeamGame3 = 123;
let johnTeamNumberOfGames = 3;
let mikeTeamNumberOfGames = 3;
let maryTeamNumberOfGames = 3;

let johnTeamThreeGameAvg = (johnTeamGame1 + johnTeamGame2 + johnTeamGame3) / johnTeamNumberOfGames;
console.log('The John Team three-game average is ' + johnTeamThreeGameAvg + '.');
let mikeTeamThreeGameAvg = (mikeTeamGame1 + mikeTeamGame2 + mikeTeamGame3) / mikeTeamNumberOfGames;
console.log('The Mike Team three-game average is ' + mikeTeamThreeGameAvg + '.');
let maryTeamThreeGameAvg = (maryTeamGame1 + maryTeamGame2 + maryTeamGame3) / maryTeamNumberOfGames;
console.log('The Mary Team three-game average is ' + maryTeamThreeGameAvg + '.');

if (mikeTeamThreeGameAvg > johnTeamThreeGameAvg && mikeTeamThreeGameAvg > maryTeamThreeGameAvg) {
    console.log('Mike\'s team has the highest average score of ' + mikeTeamThreeGameAvg + '.');
} else if (johnTeamThreeGameAvg > mikeTeamThreeGameAvg && johnTeamThreeGameAvg > maryTeamThreeGameAvg) {
    console.log('John\'s team has the highest average score of ' + johnTeamThreeGameAvg + '.');
} else if (maryTeamThreeGameAvg > mikeTeamThreeGameAvg && maryTeamThreeGameAvg > johnTeamThreeGameAvg) {
    console.log('Mary\'s team has the highest average score of ' + maryTeamThreeGameAvg + '.');
} else {
    console.log('Mike\'s team, John\'s team and Mary\'s team have a draw.');
}


switch(true) {
    case mikeTeamThreeGameAvg > johnTeamThreeGameAvg && mikeTeamThreeGameAvg > maryTeamThreeGameAvg:
        console.log('Mike\'s team has the highest average score of ' + mikeTeamThreeGameAvg + '.');
        break;
    case johnTeamThreeGameAvg > mikeTeamThreeGameAvg && johnTeamThreeGameAvg > maryTeamThreeGameAvg:
        console.log('John\'s team has the highest average score of ' + johnTeamThreeGameAvg + '.');
        break;
    case maryTeamThreeGameAvg > mikeTeamThreeGameAvg && maryTeamThreeGameAvg > johnTeamThreeGameAvg:
        console.log('Mary\'s team has the highest average score of ' + maryTeamThreeGameAvg + '.');
        break;
    default:
        console.log('Mike\'s team, John\'s team and Mary\'s team have a draw.');
}

*/


// functions, function declaration

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1994);
let ageJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
        
    } else {
        console.log(firstName + ' is retired.');
    }
    
}

yearsUntilRetirement(1945, 'John');

// functions, function expression

let whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('designer', 'Mary'));
console.log(whatDoYouDo('retired', 'Jane'));







