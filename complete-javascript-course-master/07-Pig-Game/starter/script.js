'use strict';

// Create game variables

let playerOneGameScore = 0;
let playerTwoGameScore = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let currentScore = 0;

// Create variables for the elements to be used in the code below

const diceEl = document.querySelector('.dice');
const playerOneGameScoreEl = document.querySelector('#score--0');
const playerTwoGameScoreEl = document.querySelector('#score--1');
const playerOneCurrentScoreEl = document.querySelector('#current--0');
const playerTwoCurrentScoreEl = document.querySelector('#current--1');
const rollDiceBtnEl = document.querySelector('.btn--roll');
const newGameBtnEl = document.querySelector('.btn--new');
const holdBtnEl = document.querySelector('.btn--hold');
const playerOneEl = document.querySelector('.player--0');
const playerTwoEl = document.querySelector('.player--1');
const activePlayerEl = document.querySelector('.player--active');
//const currentScoreEl = activePlayerEl.querySelector('.current-score');

// Create small reusable functions to manipulate the DOM elements

const hideElement = function (el) {
  el.classList.add('hidden');
};

const unhideElement = function (el) {
  el.classList.remove('hidden');
};

const setScoresToZero = function (score1, score2) {
  score1.textContent = 0;
  score2.textContent = 0;
};

const rollTheDice = function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  return dice;
};

// Set the game starting state

hideElement(diceEl);
setScoresToZero(playerOneGameScoreEl, playerTwoGameScoreEl);

// Roll the dice

// 1. select Roll Dice element and attach a click event listener to it that will call the rollTheDice function

rollDiceBtnEl.addEventListener('click', function () {
  const diceRoll = rollTheDice();
  unhideElement(diceEl);
  diceEl.setAttribute('src', `dice-${diceRoll}.png`);

  if (diceRoll > 1) {
    if (playerOneEl.classList.contains('player--active')) {
      playerOneScore += diceRoll;
      playerOneCurrentScoreEl.textContent = playerOneScore;
    } else if (playerTwoEl.classList.contains('player--active')) {
      playerTwoScore += diceRoll;
      playerTwoCurrentScoreEl.textContent = playerTwoScore;
    }
  } else {
    if (playerOneEl.classList.contains('player--active')) {
      playerOneScore = 0;
      playerOneCurrentScoreEl.textContent = playerOneScore;
      playerOneEl.classList.toggle('player--active');
      playerTwoEl.classList.toggle('player--active');
    } else if (playerTwoEl.classList.contains('player--active')) {
      playerTwoScore = 0;
      playerTwoCurrentScoreEl.textContent = playerTwoScore;
      playerOneEl.classList.toggle('player--active');
      playerTwoEl.classList.toggle('player--active');
    }
  }

  // if (diceRoll > 1) {
  //   currentScore += diceRoll;
  //   currentScoreEl.textContent = currentScore;
  // } else {
  //   currentScore = 0;
  //   currentScoreEl.textContent = currentScore;
  //   playerOneEl.classList.toggle('player--active');
  //   playerTwoEl.classList.toggle('player--active');
  // }
});
