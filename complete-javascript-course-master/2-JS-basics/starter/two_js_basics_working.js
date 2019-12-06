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

/*

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

*/

/*
//arrays

//initialize new array
let names = ['John', 'Mark', 'Jane'];
let years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

//mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

let john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();
console.log(john.indexOf(1990));
console.log(john.indexOf(23));

let isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/



//---------------------------------------------------------------------------------------------------

//coding challenge 3

/*
Background:
    Given John uses the following tipping rules:
        | start_amount | end_amount | tip_size_% |
        | 0.01         | 50         | 0.2        |
        | 50.01        | 200        | 0.15       |
        | 200.01       |            | 0.1        |

Scenario Outline: Tip Calculator
    When John receives a bill of <bill_amount> from restaurant <restaurant>
        
        Examples:
            | restaurant  | bill_amount | tip_size | tip_amount | total_amount |
            | restaurant1 | 124         | 0.15     | 18.6       | 142.6        |
            | restaurant2 | 48          | 0.2      | 9.6        | 57.6         |
            | restaurant3 | 268         | 0.1      | 26.8       | 294.8        |
    
    Then John uses the tipsize <tip_size>
        And John calculates the tip to the tip amount <tip_amount>
        And John pays the total <total_amount>


*/

/*

let allTips = [];
let allTotalAmounts = [];
let restaurantBills = [124, 48, 268]

*/

/*
function returnTipAmountToAllTipsArray(restaurantBill) {
    let tipAmount;
    if (restaurantBill > 0.1 && restaurantBill <=50) {
        tipAmount = restaurantBill * 0.2;
    } else if (restaurantBill > 50 && restaurantBill <=200) {
        tipAmount = restaurantBill * 0.15;
    } else if (restaurantBill > 200) {
        tipAmount = restaurantBill * 0.1;
    } else {   
        tipAmount = 0.1;
    }
    return allTips.push(tipAmount);
}
*/


/*
function returnTipAmountToAllTipsArray(restaurantBill) {
    let tipPercentage;
    if (restaurantBill > 0.1 && restaurantBill <=50) {
        tipPercentage = 0.2;
    } else if (restaurantBill > 50 && restaurantBill <=200) {
        tipPercentage = 0.15;
    } else if (restaurantBill > 200) {
        tipPercentage = 0.1;
    }
    return allTips.push(restaurantBill * tipPercentage);
}

function returnTotalBillAmountToAllTotalAmountsArray (billAmount, tipAmount) {
    return allTotalAmounts.push(billAmount + tipAmount);
}

*/

/*
function calculateTip (restaurantBill) {
    let tipAmount;
    let tipPercentage;
    if (restaurantBill > 0.1 && restaurantBill <=50) {
        tipPercentage = 0.2;
    } else if (restaurantBill > 50 && restaurantBill <=200) {
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.1;
    }
    return tipAmount = restaurantBill * tipPercentage;
}

let tipAmount1 = calculateTip(restaurantBills[0]);
let tipAmount2 = calculateTip(restaurantBills[1]);
let tipAmount3 = calculateTip(restaurantBills[2]);
console.log(tipAmount1, tipAmount2, tipAmount3);
*/

/*

for (var i = 0; i < restaurantBills.length; i++) {
    let returnedTipAmount = returnTipAmountToAllTipsArray(restaurantBills[i]);
}

for (var j = 0; j < restaurantBills.length; j++) {
    let returnedTotalAmount = returnTotalBillAmountToAllTotalAmountsArray(restaurantBills[j],allTips[j]);
}

*/

//let returnedTipAmount1 = returnTipAmountToAllTipsArray(restaurantBills[0]);
//let returnedTipAmount2 = returnTipAmountToAllTipsArray(restaurantBills[1]);
//let returnedTipAmount3 = returnTipAmountToAllTipsArray(restaurantBills[2]);

//let returnedTotalAmount1 = returnTotalBillAmountToAllTotalAmountsArray(restaurantBills[0],allTips[0]);
//let returnedTotalAmount2 = returnTotalBillAmountToAllTotalAmountsArray(restaurantBills[1],allTips[1]);
//let returnedTotalAmount3 = returnTotalBillAmountToAllTotalAmountsArray(restaurantBills[2],allTips[2]);

/*

console.log(allTips);
console.log(allTotalAmounts);

*/

//---------------------------------------------------------------------------------------------------

/********************************************************************
* objects and properties
*/

//object literal

/*

let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax

let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/********************************************************************
* objects and methods
*/

/*
let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calculateAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calculateAge();
console.log(john);
*/

/********************************************************************
* coding challenge 4
*/

/*

let john = {
    fullName: "John Smith",
    mass: 79,
    height: 1.8,
    calculateBmi: function () {
        this.bmi = this.mass / Math.pow(this.height,2);
        return this.bmi;
    }
};

let mark = {
    fullName: "Mark Posh",
    mass: 79,
    height: 1.8,
    calculateBmi: function () {
        this.bmi = this.mass / Math.pow(this.height,2);
        return this.bmi;
    }
};

//if we call the methods directly in the function compareBmi then we don't have to call the methods separately as done below
//john.calculateBmi();
//console.log(john);
//mark.calculateBmi();
//console.log(mark);

function compareBmi (bmi1, name1, bmi2, name2) {
    if (bmi1 > bmi2) {
        console.log(name1 + ' has a higher BMI than ' + name2 + '.');
    } else if (bmi2 > bmi1) {
        console.log(name2 + ' has a higher BMI than ' + name1 + '.');
    } else {
        console.log(name1 + ' and ' + name2 + ' have the same BMI.');
    }
}

let whoseBmiHigher = compareBmi (john.calculateBmi(), john.fullName, mark.calculateBmi(), mark.fullName); //as the mothods also return bmi, we can call them directly in the function

*/

/********************************************************************
* loops and iterations
*/

//for loop

/*
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// i = 1, 1 <= 10 true, log i to console, i++
// i = 2, 2 <= 10 true, log i to console, i++
//...
// i = 11, 11 <= 10 false, exit the loop

for (var i = 1; i <= 10; i +=2) {
    console.log(i);
}

let john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while loop

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

*/

/*

//continue and break statements

let john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; //if condition is true, then break the current loop and continue to the next one
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; //if condition is true, then break exit the entire loop without continuing
    console.log(john[i]);
}

*/

/*

//looping backwards

let john = ['John', 'Smith', 1990, 'designer', false];

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/


/********************************************************************
* coding challenge 5
*/

/*
Background:
    Given the following tipping rules:
       | family  | start_amount | end_amount | tip_size_% |
       | John    | 0.01         | 50         | 0.2        |
       | John    | 50.01        | 200        | 0.15       |
       | John    | 200.01       |            | 0.1        |
       | Mark    |   0.01       | 100        | 0.2        |
       | Mark    |  100.01      | 300        | 0.1        |
       | Mark    |  300.01      |            | 0.25       |

Scenario Outline: Tip Calculator
    When <family></family> receives a bill of <bill_amount> from restaurant <restaurant>
        
        Examples:
          | family | restaurant  | bill_amount | tip_size | tip_amount | total_amount |
          | John   | restaurant1 | 124         | 0.15     | 18.6       | 142.6        |
          | John   | restaurant2 | 48          | 0.2      | 9.6        | 57.6         |
          | John   | restaurant3 | 268         | 0.1      | 26.8       | 294.8        |
          | John   | restaurant4 | 180         | 0.15     | 27         | 207          |
          | John   | restaurant5 | 42          | 0.2      | 8.4        | 50.4         |
          | Mark   | restaurant1 | 77          | 0.2      | 15.4       | 92.4         |  
          | Mark   | restaurant2 | 375         | 0.25     | 93.75      | 468.75       |  
          | Mark   | restaurant3 | 110         | 0.1      | 11         | 121          |            
          | Mark   | restaurant4 | 45          | 0.2      | 9          | 54           |  

    Then <family> uses the tipsize <tip_size>
        And <familty> calculates the tip to the tip amount <tip_amount>
        And <family> pays the total <total_amount>


*/

/*
Part 2

Mark's family also went on a holiday, going to 4 different restaurants. The bills were 77, 375, 110 and 45. 
Marks likes to tip 20% when the bill is less than 100, 10% when the bill is less than 300 and 25% if the bill is over 300. 

1. Implement the same functionality as before using Mark's rules. 
2. Create a function (not a method) to calculate average of a given array of tips. HINT: loop over the array,
and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the 
array, divide it by the number of elements in it. 
3. Calculate the average tip for each family. 
4. Log to the console which family paid the highest tips on average. 

*/


/*

//Variant when the tips and total amounts are calculated using object methods

let johnBillsAndTips = {
    fullName: 'John Smith',
    billValues: [124, 150, 268, 500, 500],
    tipRules: [0.2, 0.15, 0.1],
    calculateTip: function(billValue) {
        let tipPercentage;
        let tipAmount;
            if (billValue > 0.1 && billValue <= 50) {
                tipPercentage = this.tipRules[0];
            } else if (billValue > 50 && billValue <= 200) {
                tipPercentage = this.tipRules[1];
            } else {
                tipPercentage = this.tipRules[2];
            }
            return tipAmount = billValue * tipPercentage;
    },
    returnTipAmountToAllTipsArray: function() {
        this.allTips = [];
        for (var i = 0; i < this.billValues.length; i++) {
            this.allTips.push(Math.round(this.calculateTip(this.billValues[i])));
        }
    },
    returnTotalAmountToAllTotalAmountsArray: function() {
        this.allTotalAmounts = [];
        for (var i = 0; i < this.billValues.length; i++) {
            this.allTotalAmounts.push(Math.round(this.calculateTip(this.billValues[i]) + this.billValues[i]));
        }
    }
}

let markBillsAndTips = {
    fullName: 'Mark Posh',
    billValues: [77, 375, 110, 45],
    tipRules: [0.2, 0.1, 0.25],
    calculateTip: function(billValue) {
        let tipPercentage;
        let tipAmount;
            if (billValue > 0.1 && billValue <= 100) {
                tipPercentage = this.tipRules[0];
            } else if (billValue > 100 && billValue <= 300) {
                tipPercentage = this.tipRules[1];
            } else {
                tipPercentage = this.tipRules[2];
            }
            return tipAmount = billValue * tipPercentage;
    },
    returnTipAmountToAllTipsArray: function() {
        this.allTips = [];
        for (var i = 0; i < this.billValues.length; i++) {
            this.allTips.push(Math.round(this.calculateTip(this.billValues[i])));
        }
    },
    returnTotalAmountToAllTotalAmountsArray: function() {
        this.allTotalAmounts = [];
        for (var i = 0; i < this.billValues.length; i++) {
            this.allTotalAmounts.push(Math.round(this.calculateTip(this.billValues[i]) + this.billValues[i]));
        }
    }
}

johnBillsAndTips.returnTipAmountToAllTipsArray();
johnBillsAndTips.returnTotalAmountToAllTotalAmountsArray();
console.log(johnBillsAndTips.allTips);
console.log(johnBillsAndTips.allTotalAmounts);
markBillsAndTips.returnTipAmountToAllTipsArray();
markBillsAndTips.returnTotalAmountToAllTotalAmountsArray();
console.log(markBillsAndTips.allTips);
console.log(markBillsAndTips.allTotalAmounts);

*/

//variant when the tips and total amounts are calculated using functions to avoid code duplication

let johnBillsAndTips = {
    fullName: 'John Smith',
    billValues: [124, 150, 268, 500, 500],
    tipRules: [0.2, 0.15, 0.1],
    calculateTip: function(billValue) {
        let tipPercentage;
        let tipAmount;
            if (billValue > 0.1 && billValue <= 50) {
                tipPercentage = this.tipRules[0];
            } else if (billValue > 50 && billValue <= 200) {
                tipPercentage = this.tipRules[1];
            } else {
                tipPercentage = this.tipRules[2];
            }
            return tipAmount = billValue * tipPercentage;
    }
}

let markBillsAndTips = {
    fullName: 'Mark Posh',
    billValues: [77, 375, 110, 45],
    tipRules: [0.2, 0.1, 0.25],
    calculateTip: function(billValue) { //calculates a tip amount based on a bill value
        let tipPercentage;
        let tipAmount;
            if (billValue > 0.1 && billValue <= 100) {
                tipPercentage = this.tipRules[0];
            } else if (billValue > 100 && billValue <= 300) {
                tipPercentage = this.tipRules[1];
            } else {
                tipPercentage = this.tipRules[2];
            }
            return tipAmount = billValue * tipPercentage;
    }
}

//uses the Calculate Tip method of a Bills&Tips object to calculate tips amounts and puts the resulting tip amounts in the allTips array in the object
function returnTipAmountToAllTipsArray(billsAndTips) {
    let allTips = [];
    for (var i = 0; i < billsAndTips.billValues.length; i++) {
        allTips.push(Math.round(billsAndTips.calculateTip(billsAndTips.billValues[i])));
    }
    billsAndTips.allTips = allTips;
}

//uses the Calculate Tip method of a Bills&Tips object to calculate tips amounts, calculates total paid amounts and puts them in the allTotalAmounts array in the object
function returnTotalAmountToAllTotalAmountsArray(billsAndTips) {
    let allTotalAmounts = [];
    for (var i = 0; i < billsAndTips.billValues.length; i++) {
        allTotalAmounts.push(Math.round(billsAndTips.calculateTip(billsAndTips.billValues[i]) + billsAndTips.billValues[i]));
    }
    billsAndTips.allTotalAmounts = allTotalAmounts;
}


//calculates an average tip amount based on tip values provided in an array
function calculateAverageTipAmounts (tipAmounts) {
    let totalTipAmount = 0;
    let tipAmount;
    let averageTipAmount;
    for (var i = 0; i < tipAmounts.length; i++) {
        tipAmount = tipAmounts[i];
        totalTipAmount = totalTipAmount + tipAmount;
    }
    
    return averageTipAmount = totalTipAmount / tipAmounts.length;
}

//compares average tip amounts paid by two families
function compareAverageTipAmounts (averageTipAmount1, name1, averageTipAmount2, name2) {
    if (averageTipAmount1 > averageTipAmount2) {
        console.log('The ' + name1 + ' family paid the higher tip of ' + averageTipAmount1 + ' on average during the holidays than the ' + name2 + ' family.');
    } else if (averageTipAmount2 > averageTipAmount1) {
        console.log('The ' + name2 + ' family paid the higher tip of ' + averageTipAmount2 + ' on average during the holidays than the ' + name1 + ' family.');
    } else {
        console.log('The ' + name1 + ' family and the ' + name2 + ' family paid the same tip amount on average during the holidays.');
    }
}

//here we call the functions to calculate tip amounts and total paid amounts for the John family
returnTipAmountToAllTipsArray(johnBillsAndTips);
returnTotalAmountToAllTotalAmountsArray(johnBillsAndTips);
console.log('John\'s tips: ' + johnBillsAndTips.allTips + '; ' + 'John\'s total amounts: ' + johnBillsAndTips.allTotalAmounts);

//here we call the functions to calculate tip amounts and total paid amounts for the Mark family
returnTipAmountToAllTipsArray(markBillsAndTips);
returnTotalAmountToAllTotalAmountsArray(markBillsAndTips);
console.log('Mark\'s tips: ' + markBillsAndTips.allTips + '; ' + 'Mark\'s total amounts: ' + markBillsAndTips.allTotalAmounts);

//here we call the function to calculate average tip amounts for the John family and the Mark family
johnBillsAndTips.averageTip = calculateAverageTipAmounts(johnBillsAndTips.allTips);
markBillsAndTips.averageTip = calculateAverageTipAmounts(markBillsAndTips.allTips);
console.log('John\'s average tip: ' + johnBillsAndTips.averageTip + '; ' + 'Mark\'s average tip: ' + markBillsAndTips.averageTip);

//here we compare average tip amounts of the two families and figure out which family pays more in tips on average
compareAverageTipAmounts(johnBillsAndTips.averageTip, johnBillsAndTips.fullName, markBillsAndTips.averageTip, markBillsAndTips.fullName);

console.log(johnBillsAndTips);
console.log(markBillsAndTips);
