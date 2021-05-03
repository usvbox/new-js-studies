'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 8;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
/*
    1. use Math.random() to generate a number from 0 to 1
    2. multiply the result by the upper limit
    3. round down the result to the lower integer using the Math.trunc() method
    4. as we round down to the lower integer, we need to add 1 at the end, otherwise, you'll be getting numbers between 0 and 19
*/

let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

let currentScore = 20;

/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess || guess === 0) {
    document.querySelector('.message').textContent = '🛑 Try between 1 and 20!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number!';
  } else if (guess > secretNumber) {
    if (currentScore > 0) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬇️ Try Lower!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
    }
  } else if (guess < secretNumber) {
    if (currentScore > 0) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬆️ Try Higher!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
    }
  }
});
 */

/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess === 0) {
    document.querySelector('.message').textContent = '🛑 Try between 1 and 20!';
  } else if (guess === secretNumber) {
    if (
      currentScore > 1 &&
      document.querySelector('.message').textContent !== '🎊 Correct Number!'
    ) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    } else if (
      currentScore > 1 &&
      document.querySelector('.message').textContent === '🎊 Correct Number!'
    ) {
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    }
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬇️ Try Lower!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '⬇️ Try Higher!';
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
      document.querySelector('.score').textContent = 0;
    }
  }
});
 */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess === 0) {
    document.querySelector('.message').textContent = '🛑 Try between 1 and 20!';
  } else if (guess === secretNumber) {
    if (
      currentScore > 1 &&
      document.querySelector('.message').textContent !== '🎊 Correct Number!'
    ) {
      currentScore--;
      document.querySelector('.score').textContent = currentScore;
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    } else if (
      currentScore > 1 &&
      document.querySelector('.message').textContent === '🎊 Correct Number!'
    ) {
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '🎊 Correct Number!';
    }
  } else if (guess !== secretNumber) {
    currentScore--;
    if (currentScore > 0) {
      document.querySelector('.score').textContent = currentScore;
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '⬇️ Try Lower!';
      } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '⬇️ Try Higher!';
      }
    } else {
      document.querySelector('.message').textContent =
        'The Secret 🕵🏻‍♀️ Stays Here! Try again 😃';
      document.querySelector('.score').textContent = 0;
    }
  }
});
