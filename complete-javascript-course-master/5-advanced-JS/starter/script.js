///////////////////////// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
*/
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Object.create method

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    },
    married: true
};

//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1990;
//john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    })
    */


// Primitives vs Objects

/*
//Primitives
var a = 23;

var b = a;

a = 46;

console.log(a); //a = 46
console.log(b); //b = 23, because variables with primitives do not reference anything, they hold the assigned value inside. That's why when 'a' has been changed, 'b' still holds the assigned value, no reference to the changed value in 'a'. 

//Objects

var obj1 = {
    name: 'Jane',
    age: '26'
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // age = 30
console.log(obj2.age); // age = 30, because the created object is the same, the variables associated with the object simply reference the object, they do not hold it. 

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change (a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age); //still age = 27, because variables with primitives hold those primitives, they can't be referenced. 
console.log(obj.city);
*/

//////////////////////////////////  Lecture: Passing functions as arguments

/*

var years = [1990, 1965, 1935, 2005, 1998]

 function arrayCalc(arr, fn) {
     var arrRes = [];
     for (var i = 0; i < arr.length; i++) {
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calculateAge(el) {
     return 2016 - el;
 }

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.57 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

//////////////////////////////////  Lecture: Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you, please, explain what UX design is?');
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log(name + ', please, tell me what you do.');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');

*/

//////////////////////////////////  Lecture: Immediately Invoked Function Expressions (IiFE) - to create data privacy, i.e. make variables inside 
//IIFFE not accessible, IIFE runs just once as it is not stored anywhere.
//Paranthesys are used so that the parser treats IIFE as an expression and not a declarationъ

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

/*
(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(5);
*/

//////////////////////////////////  Lecture: Closure



//Pattern: use a generic function that you can then use for more specifica cases (e.g. calculateRetirementAge in general vs calculateRetirementAgeUS)
//Closures means that an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned, i.e. its execution stack is long gone. 
//The scope with the variables object, however, is still there in the memory. 

/*

function retirement(retirementAge) {            // the beauty of this function is that, e.g., you can use it to calculate retirement age for different countries instead of creating a separate function for each country
    var a = ' years late until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
//retirement(66)(1990);

var retirementGermany = retirement(65);
var retirmentIceland = retirement(67);

retirementGermany(1990);
retirmentIceland(1990);

/////// Challenge: rewrite the job interview function to use Closures

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you, please, explain what UX design is?');
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log(name + ', please, tell me what you do.');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');
*/

/*

//My version

function interviewQuestion(job) {
    var designerQuestion = ', can you, please, explain what UX design is?';
    var teacherQuestion = ', what subject do you teach?';
    var genericQuestion = ', please, tell me what you do?';
    var selectedQuestion = selectJobQuestion(job);
    
    function selectJobQuestion(job) {
        if (job === 'designer') {
            return designerQuestion;
        } else if (job === 'teacher') {
            return teacherQuestion;
        }   else {
            return genericQuestion;
        }
    }    

    return function(name) {
        console.log(name + selectedQuestion);
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Mark');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Tom');

var retiredQuestion = interviewQuestion('retired');
retiredQuestion('Jane');

//Teacher version

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you, please, explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log(name + ', please, tell me what you do.');
        }
    }
}

interviewQuestion('teacher')('Trenton');
*/

//////////////////////////////////  Lecture: Bind, Call and Apply Methods

/*
var john = {
    name: 'John',
    age: '26',
    job: 'teacher',
    presentOneself: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen. I\'m ' + this.name + ", I\'m a " + this.job + ', and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey, what\'s up? My name is ' + this.name + ", I\'m a " + this.job + ', and I\'m ' + this.age + ' years old. Have a great ' + timeOfDay +'.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentOneself('formal', 'morning');

john.presentOneself.call(emily, 'friendly', 'afternoon'); //the first argument sets the this variable to the emily object, which allows us to use john's presentOneself method

//john.presentOneself.apply(emily, ['friendly', 'afternoon']); //this is the same as above, but make sure that the borrowed function can accept an array as an argument

var johnFrienlyPresentation = john.presentOneself.bind(john, 'friendly'); //carrying - bind creates a copy of the borrowed function and allows us to use **preset** arguments, e.g. here we created a preset argument for 'style'

johnFrienlyPresentation('morning');
johnFrienlyPresentation('night');

var emilyFormalPresentation = john.presentOneself.bind(emily, 'formal');

emilyFormalPresentation('afternoon');

var years = [1990, 1965, 1935, 2005, 1998]

function arrayCalc(arr, fn) {
     var arrRes = [];
     for (var i = 0; i < arr.length; i++) {
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calculateAge(el) {
     return 2016 - el;
 }

function isFullAge(ageLimit, el) {
    return el >= ageLimit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

//1. Pass ages array to arrayCalc;
//2. Pass isFullAge function with '20' as a preset ageLimit argument to arrayCalc;
//3. Supply the next in turn array element as el argument to the isFullAge function in the arrayCalc function;
//4. Execute the isFullAge function;
//5. Add the function call result to the arrRes array;
//6. Repeat from 3. 
//7. Return arrRes array to fullJapan variable;

/*



--- Let's build a fun quiz game in the console! ---

DONE
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

DONE
2. Create a couple of questions using the constructor

DONE
3. Store them all inside an array

DONE
4. Select one random question 

DONE
5. Log the selected question into the console, together with the possible answers (each answer should have a number) 
(Hint: write a method for the Question objects for this task).

DONE
6. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as 
you displayed it on Task 4.

DONE
7. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

DONE
8. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't 
interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

*/




/*

/////////Teacher's version

(function () {
    function Question(question, answers, answer) {
        this.question = question;
        this.answers = answers;
        this.answer = answer;
    }

    Question.prototype.showSelectedQuestionAndAnswers = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
                console.log (i + ': ' + this.answers[i]);
            }
    }


    Question.prototype.checkAnswer = function(userAnswer) {    
        if (userAnswer === this.answer) {
            console.log('Great! This is correct.');
        } else {
            console.log('Sorry. Wrong answer. Try again.');
        }
    }

    var javascriptQuestion = new Question('Is javascript fun to learn?', ['Sure, it is.', 'It\'s horrible!', 'What is javascript?'], 0);
    var scrumQuestion = new Question('Is Scrum a methodology?', ['Sure, it is.', 'Scrum is a framework', 'Scrum is an Agile practice.'], 1);
    var agileQuestion = new Question('When was the Agile Manifesto born?', ['1990', '2004', '2017', '2001'], 3);

    var questions = [javascriptQuestion, scrumQuestion, agileQuestion];
    var questionNumber = Math.floor(Math.random()*questions.length);
    questions[questionNumber].showSelectedQuestionAndAnswers();
    var userAnswer = parseInt(prompt("Please, enter the number of the correct answer."));
    questions[questionNumber].checkAnswer(userAnswer);
})();

/////////

*/

/*
/////////My version

(function () {
    function Question(question, answers, answer) {
        this.question = question;
        this.answers = answers;
        this.answer = answer;
    }

    Question.prototype.showSelectedQuestionAndAnswers = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
                console.log (i + ': ' + this.answers[i]);
            }
    }

    Question.prototype.checkAnswer = function(userAnswer) {    
        if (userAnswer === this.answer) {
            console.log('Great! This is correct.');
        } else {
            console.log('Sorry. Wrong answer. Try again.');
        }
    }

    var getQuestions = function(question1, question2, question3) {
        var questions = [];
        questions.push(question1, question2, question3);
        return questions;
    }

    var javascriptQuestion = new Question('Is javascript fun to learn?', ['Sure, it is.', 'It\'s horrible!', 'What is javascript?'], 0);
    var scrumQuestion = new Question('Is Scrum a methodology?', ['Sure, it is.', 'Scrum is a framework', 'Scrum is an Agile practice.'], 1);
    var agileQuestion = new Question('When was the Agile Manifesto born?', ['1990', '2004', '2017', '2001'], 3);

    var questionList = getQuestions(javascriptQuestion, scrumQuestion, agileQuestion);

    var selectedQuestion = questionList[Math.floor(Math.random()*questionList.length)];

    selectedQuestion.showSelectedQuestionAndAnswers();

    var userAnswer = parseInt(prompt("Please, enter the number of the correct answer."));

    selectedQuestion.checkAnswer(userAnswer);
})();


////////
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this 
and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. 
In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

/*
/////////Extra - My version

(function () {
    function Question(question, answers, answer) {
        this.question = question;
        this.answers = answers;
        this.answer = answer;
    }

    Question.prototype.showSelectedQuestionAndAnswers = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
                console.log (i + ': ' + this.answers[i]);
            }
    }

    Question.prototype.checkAnswer = function(userAnswer) {    
        var result;
        if (userAnswer === this.answer) {
            result = 'correct';
            console.log('Great! This is correct.');
        } else if (userAnswer === 'exit') {
            result = 'exit';                   
        } else {
            result = 'incorrect';
            console.log('Sorry. Wrong answer. Try again.');
        }
        return result;
    }

    var getQuestions = function(question1, question2, question3) {
        var questions = [];
        questions.push(question1, question2, question3);
        return questions;
    }

    function getNextQuestion (questions) {
        var selectedQuestion = questions[Math.floor(Math.random()*questions.length)];
        selectedQuestion.showSelectedQuestionAndAnswers();
        return selectedQuestion;
    }

    function playRound (questions) {
        var randomQuestion = getNextQuestion(questions);
        var answer = prompt("Please, enter the number of the correct answer.");
        var gameResult = randomQuestion.checkAnswer(answer);        
        if (gameResult === 'correct') {
            score = score + 1;
            console.log('Your current score is: ' + score);
            playRound(questions);
        } else if (gameResult === 'incorrect') {
            console.log('Your current score is: ' + score);
            playRound(questions);
        } else if (gameResult === 'exit') {
            console.log('Your current score is: ' + score);
            console.log('Sorry to see you go.');
        }
    }

    var score = 0;
    var javascriptQuestion = new Question('Is javascript fun to learn?', ['Sure, it is.', 'It\'s horrible!', 'What is javascript?'], '0');
    var scrumQuestion = new Question('Is Scrum a methodology?', ['Sure, it is.', 'Scrum is a framework', 'Scrum is an Agile practice.'], '1');
    var agileQuestion = new Question('When was the Agile Manifesto born?', ['1990', '2004', '2017', '2001'], '3');
    var questionList = getQuestions(javascriptQuestion, scrumQuestion, agileQuestion);
    playRound(questionList);

})();



////////

*/

/////////Extra - teacher's verstion

(function () {
    function Question(question, answers, answer) {
        this.question = question;
        this.answers = answers;
        this.answer = answer;
    }

    Question.prototype.showSelectedQuestionAndAnswers = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
                console.log (i + ': ' + this.answers[i]);
            }
    }

    Question.prototype.checkAnswer = function(userAnswer,addScore) {    
        var result;
        if (userAnswer === this.answer) {
            result = addScore(true);
            console.log('Great! This is correct.');
        } else {
            result = addScore(false);;
            console.log('Sorry. Wrong answer. Try again.');
        }
        this.displayScore(result);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------');
    }


    var getQuestions = function(question1, question2, question3) {
        var questions = [];
        questions.push(question1, question2, question3);
        return questions;
    }

    function getNextQuestion (questions) {
        var selectedQuestion = questions[Math.floor(Math.random()*questions.length)];
        selectedQuestion.showSelectedQuestionAndAnswers();
        return selectedQuestion;
    }

    
    function getScore() {
        var score = 0;
        return function(correct) {
            if(correct) {
            score++;
            }
            return score;
        }
    }


    function playRound (questions) {
        var randomQuestion = getNextQuestion(questions);
        var answer = prompt("Please, enter the number of the correct answer.");
        if (answer !== 'exit') {
            randomQuestion.checkAnswer(parseInt(answer), keepScore);
            playRound(questions);
        }

    }

    var keepScore = getScore();
    var javascriptQuestion = new Question('Is javascript fun to learn?', ['Sure, it is.', 'It\'s horrible!', 'What is javascript?'], 0);
    var scrumQuestion = new Question('Is Scrum a methodology?', ['Sure, it is.', 'Scrum is a framework', 'Scrum is an Agile practice.'], 1);
    var agileQuestion = new Question('When was the Agile Manifesto born?', ['1990', '2004', '2017', '2001'], 3);
    var questionList = getQuestions(javascriptQuestion, scrumQuestion, agileQuestion);
    playRound(questionList);

})();

////////
