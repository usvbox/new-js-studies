'use strict';

// Create variables for the elements to be used in the code below

const diceEl = document.querySelector('.dice');
const playerOneScoreEl = document.querySelector('#score--0');
const playerTwoScoreEl = document.querySelector('#score--1');

// Create small reusable functions to manipulate the DOM elements

const hideElement = function (el) {
  el.classList.add('hidden');
};

const setScoresToZero = function (score1, score2) {
  score1.textContent = 0;
  score2.textContent = 0;
};

// Set the game starting state

hideElement(diceEl);
setScoresToZero(playerOneScoreEl, playerTwoScoreEl);
