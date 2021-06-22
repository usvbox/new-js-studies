'use strict';

// const bookings = [];
// const defaultPrice = 199;

// const createBooking = function (
//   flightNum,
//   numOfPassengers = 1,
//   price = defaultPrice * numOfPassengers
// ) {
//   const booking = {
//     flightNum,
//     numOfPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 450);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jonas);

// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

const convertToOneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const convertFirstWordToUpperCase = function (str) {
  const [first, ...others] = str.toLowerCase().split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformString = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformString('JavaScript is the best!', convertFirstWordToUpperCase);
transformString('JavaScript is the best!', convertToOneWord);

const giveHighFive = function () {
  console.log('✋🏻');
};

document.body.addEventListener('click', giveHighFive);

['Jonas', 'Martha', 'Adam'].forEach(giveHighFive);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

const sayHey = greet('Hey');

sayHey('Jonas');

greet('Hello')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

const flightData = [583, 'George Scott'];
book.apply(lufthansa, flightData);
console.log(lufthansa);

book.call(eurowings, ...flightData);
console.log(eurowings);
