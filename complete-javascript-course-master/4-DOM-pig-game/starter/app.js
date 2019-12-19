/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var overallScores, roundScore, activePlayer;

init();

//var x = document.querySelector('#score-0').textContent; //this is a getter to get a value from an html element
//console.log(x);

//this is to process a click event upon clicking the roll dice button


//here we use an anonymous function (it's appropriate here as we use it just for handling the click event), which is also a callback function
//because it will be called for us by the addEventListener method that will be listening for a click event in the element of btn-roll class

document.querySelector('.btn-roll').addEventListener('click', function() { 

    // 1. Random number

    //this is to assign randomizer to the dice variable
    var dice = Math.floor(Math.random() * 6) + 1; //Math.random gives a random between 0 and 1; multiplying by 6 => random between 0 and 5; Math.floor => skip decimals

    // 2. Display result
    var diceDOM = document.querySelector('.dice'); //here we assign an html element to a variable so that we can reuse it easily
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to global score
    overallScores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = overallScores[activePlayer];

    // Check if player won the game
    if (overallScores[activePlayer] >= 15) {
        //activePlayer won
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Next player
        nextPlayer();
    }

});

// here note how we call an existing function via the event listener, in which case we simply provie the function name without the initialization parentheses
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator for simple if statements
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); //adds or removes parameter to class in html document - if it's there - remove, if not add
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

//this is the init function that is used upon loading the game and when pressing the 'new game' button
function init() {
    overallScores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    //this is to be able to assign a round score value for the active player based on the dice value
    //document.querySelector('#current-' + activePlayer).textContent = dice; //this is a setter for placing text in HTML
    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //this is a setter for placing html code within HTML

    //this is to be able to hide the dice from the screen at the start of the game
    document.querySelector('.dice').style.display = 'none'; //changes value of a css element
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}