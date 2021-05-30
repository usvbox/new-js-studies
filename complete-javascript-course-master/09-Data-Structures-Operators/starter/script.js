'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   openingHours: {
//     fri: { open: openHours, close: closeHours },
//   },
// } = restaurant;

// console.log(openHours, closeHours);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// let [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [l, , [m, n]] = nested;
// console.log(l, m, n);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Jonas';
console.log(str);
const letters = [...str, ' ', 'S.'];
console.log(letters);

console.log('J', 'o', 'n', 'a', 's');

console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];
// console.log(ingredients);

//restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
restaurant.test = 'test';
console.log(newRestaurant);
console.log(restaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Romantic';
console.log(restaurantCopy.name);
console.log(restaurant.name);
