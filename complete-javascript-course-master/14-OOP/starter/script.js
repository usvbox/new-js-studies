'use strict';

// Constructor Functions

/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(jonas instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();

console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapience';
console.log(jonas);
console.log(jonas.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
console.log(Person);
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
console.log(Person.prototype.constructor);

const arr = [1, 1, 2, 3, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(new Array(4, 5, 6, 7));

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

console.log(Array.prototype);

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);*/

////// OOP Challenge # 1

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.dir(Car);
console.log(car1);
console.log(car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.brake();*/

// car2.accelerate();
// car2.accelerate();
// car2.accelerate();
// car2.accelerate();

// ES6 Classes

// class expression
// const PersonCl = class {};

//class declaration
/*class PersonCl {
  constructor(firstName, birthYear, sex) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.sex = sex;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  addSalutation() {
    if (this.sex === 'male') this.salutation = 'Mr.';
    if (this.sex === 'female') this.salutation = 'Ms.';
  }
}*/

// PersonCl.prototype.addSalutation = function () {
//   if (this.sex === 'male') this.salutation = 'Mr.';
//   if (this.sex === 'female') this.salutation = 'Ms.';
// };

/*const pete = new PersonCl('Pete', 1988, 'male');
console.log(pete);
console.log(pete.__proto__);
console.log(PersonCl.prototype);
console.log(PersonCl.prototype.__proto__);

pete.addSalutation();
pete.calcAge();
console.log(pete);*/

/*const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear, sex) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.sex = sex;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  addSalutation() {
    if (this.sex === 'male') this.salutation = 'Mr.';
    if (this.sex === 'female') this.salutation = 'Ms.';
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const pete = new PersonCl('Pete Davis', 1988, 'male');

PersonCl.hey();

console.log(pete);
console.log(pete.age);
console.log(Array.from('123'));

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};*/

// Person.hey();

////// Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1992);
console.log(sarah);

////// OOP Challenge # 2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speedMi) {
    this.speed = speedMi * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 120;
console.log(ford.speed);

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95); */
