'use strict';

const bookings = [];
const defaultPrice = 199;

const createBooking = function (
  flightNum,
  numOfPassengers = 1,
  price = defaultPrice * numOfPassengers
) {
  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 450);
createBooking('LH123', undefined, 1000);
