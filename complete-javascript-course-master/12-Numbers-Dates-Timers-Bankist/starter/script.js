'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = 'noSorting') {
  containerMovements.innerHTML = '';
  let movs;
  if (sort === 'noSorting') {
    movs = movements;
  }
  if (sort === 'ascending') {
    movs = movements.slice().sort((a, b) => b - a);
  }
  if (sort === 'descending') {
    movs = movements.slice().sort((a, b) => a - b);
  }
  //const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const movementHtml = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov.toFixed(2)} €</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', movementHtml);
  });
};

const calculateDisplayBalance = function (account) {
  account['balance'] = account.movements.reduce((bal, mov) => bal + mov, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)}€`;
};

const calculateDisplaySummary = function (account) {
  const sumIn = account.movements
    .filter(mov => mov > 0)
    .reduce((total, mov) => total + mov, 0);
  labelSumIn.textContent = `${sumIn.toFixed(2)} €`;
  const sumOut = Math.abs(
    account.movements
      .filter(mov => mov < 0)
      .reduce((total, mov) => total + mov, 0)
  );
  labelSumOut.textContent = `${sumOut.toFixed(2)} €`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(mov => mov * (account.interestRate / 100))
    .filter((interest, i, arr) => {
      return interest >= 1;
    })
    .reduce((total, interest) => total + interest, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};

const updateAccountInfoUi = function (account) {
  displayMovements(account.movements);
  calculateDisplayBalance(account);
  calculateDisplaySummary(account);
};

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc['username'] = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.slice(0, 1))
      .join('');
  });
};

createUserNames(accounts);

let currentAccount;

// Event Listeners

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    updateAccountInfoUi(currentAccount);
    containerApp.style.setProperty('opacity', '1');
  }
  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();
});

btnTransfer.addEventListener('click', event => {
  event.preventDefault();
  const depositedAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amountToTransfer = +inputTransferAmount.value;
  if (
    depositedAccount &&
    amountToTransfer > 0 &&
    currentAccount.balance >= amountToTransfer &&
    depositedAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(amountToTransfer * -1);
    depositedAccount.movements.push(amountToTransfer);
    updateAccountInfoUi(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', event => {
  event.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  console.log(loanAmount);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateAccountInfoUi(currentAccount);
  }
  inputLoanAmount.value = '';
  inputTransferAmount.blur();
});

//let sorted = false;

btnSort.addEventListener('click', event => {
  event.preventDefault();
  //displayMovements(currentAccount.movements, !sorted);
  //sorted = !sorted;
  if (btnSort.textContent === 'SORT') {
    displayMovements(currentAccount.movements, 'ascending');
    btnSort.textContent = '↑ SORT';
  } else if (btnSort.textContent === '↑ SORT') {
    displayMovements(currentAccount.movements, 'descending');
    btnSort.textContent = '↓ SORT';
  } else {
    displayMovements(currentAccount.movements, 'noSorting');
    btnSort.textContent = 'SORT';
  }
});

btnClose.addEventListener('click', event => {
  event.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const accountToDelete = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(accountToDelete, 1);
    containerApp.style.setProperty('opacity', '0');
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);
// console.log(0.1 + 0.2 === 0.3);
// console.log(+'23');
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));
//
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));
//
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));
//
// console.log(Number.isFinite(23));
// console.log(Number.isFinite(23.0));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(23.9));
// console.log(Math.sqrt(25));
// console.log(8 ** (1 / 3));
// console.log(Math.max(1, '5'));
// console.log(Math.min(1, 5));
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);
//
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min)) + 1 + min;
//
// console.log(randomInt(9, 15));
//
// console.log(Math.trunc(23.9));
// console.log(Math.round(23.9));
// console.log(Math.round(23.5));
// console.log(Math.ceil('23.5'));
// console.log(Math.ceil(23.1));
// console.log(Math.floor(23.5));
// console.log(Math.floor(23.1));
//
// console.log(Math.trunc(-23.5));
// console.log(Math.floor(-23.1));
//
// const num = +(2.745).toFixed(2);
//
// console.log(typeof num);
// console.log(num);

// console.log(5 % 2);
//
// const isEven = n => n % 2 === 0;
// console.log(isEven(4));
//
// labelBalance.addEventListener('click', event => {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });
//
// console.log(2 ** 53 - 1);
// console.log(2 ** 53 + 3);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2724720471209487294721094712904712904712490712490n);
// console.log(BigInt(2724720471209487294721094712904712904712490712490n));
//
// console.log(10000n + 10000n);
//
// const huge = 203948204820284293482948n;
// const num = 23;
//
// console.log(huge * BigInt(num));
// console.log(20n > 15);
//
// console.log(20n == 20);
//
// console.log(huge + ' really big');
//
// console.log(Math.sqrt(16));
//
// console.log(10n / 3n);

// const now = new Date();
// console.log(now);
//
// console.log(new Date('Fri Aug 06 2021 18:54:43'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 57));
//
// console.log(new Date(2037, 10, 33, 15, 23, 57));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2021, 7, 6, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(1628252580000));
console.log(Date.now());
console.log(new Date(1628272008508).toISOString());

future.setFullYear(2030);
console.log(future);
