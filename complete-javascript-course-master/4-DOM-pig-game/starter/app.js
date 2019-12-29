/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
3 challenges
1. A player looses his ENTIRE score when he roles two 6 in a row. After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable).
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
(Hint: you can read that value with the .value property in Javascrip. This is a good opportunity to use
Google to figure this out)
3. Add another dice to the game, so that there are two dices now. The player looses his current score if one of them is a 1. 
(Hint: you will need CSS to position the second dice, so tak a look a the CSS code for the first one).


*/

/*
As a player 
I want to set the winner score before starting the game
So that I can enjoy the game as long as I want

Given that I started a new game
When I enter the winner score in the game settings
Then I can start playing until the winner score I've specified

1) After pressing New Game, I can see an active field for the winner score below the 'Hold' button
2) I can enter the desired winner score in the field
3) Upon the first 'Roll Dice' the Winner Score game becomes grayed out
4) Upon starting a new game using the 'New Game' button the Winner Score input field becomes active
5) Upon starting a new game using the 'New Game' button the Winner Score input field becomes is cleared from the previous Winner Score
6) When empty, the 'Winner Score' input field displays the 'Enter target' placeholder as a hint for the player 

*/ 

/*
DONE
Warn player if target Winner Score is empty upon game launch

Given the game is launched for the first time
    And the Winner Score field is empty
When the player rolls the dice
Then the player sees a warning to enter the target Winner Score

DONE
Warn player if target Winner Score is empty upon closing warning and rolling dice

Given the player sees the warning to enter the target Winner Score
When the player closes the warning
    And the player leaves the target Winner Score empty
    And the player rolls the dice
Then the player sees a warning to enter the target Winner Score

DONE
Warn player if target Winner Score is empty upon closing warning, starting new game and rolling dice

Given the player sees the warning to enter the target Winner Score
When the player closes the warning
    And the player presses New Game
    And the player leaves the target Winner Score empty
    And the player rolls the dice
Then the player sees a warning to enter the target Winner Score

DONE
Play game upon starting New Game after the previous one has finished

Given the game has finished
When the player presses New Game
    And the player indicates the target Winner Score
    And the player rolls the dice
Then the player sees the dice roll result

DONE
Play game after closing the warning to enter the target Winner Score and entering target Winner Score

Given the player sees the warning to enter the target Winner Score
When the player closes the warning
    And the player enters the target Winner Score
    And the player rolls the dice
Then the player sees the dice roll result

Play game after closing the warning to enter the target Winner Score and starting New Game

DONE
Given the player sees the warning to enter the target Winner Score
When the player closes the warning
    And the player presses New Game
    And the player indicates the target Winner Score
    And the player rolls the dice
Then the player sees the dice roll result

*/

var overallScores, roundScore, activePlayer, gamePlaying, winnerScore;

init();

var previousDice;
//var x = document.querySelector('#score-0').textContent; //this is a getter to get a value from an html element
//console.log(x);

//this is to process a click event upon clicking the roll dice button


//here we use an anonymous function to assign the score entered by the user to the winnerScore variable to track the winner score as the game progresses
//also, we gray out the Winner Score input field after the first click so that the users do not change the Winner Score during the game. 


document.querySelector('.btn-roll').addEventListener('click', function() {
    winnerScore = document.querySelector('.winner-score-input').value;
    //Undefined, 0, null or "" are coerced to false
    //Anything else is coerced to true
    if (document.querySelector('#name-' + activePlayer).textContent === 'Winner!') {
        gamePlaying = false;
    } else if (winnerScore) {
        gamePlaying = true;
        document.getElementById('winner-score-id').disabled=true;
        //winnerScore = document.querySelector('.winner-score-input').value;        
    } else {
        checkWinnerScoreUserInput();
    }


});

//here we use an anonymous function (it's appropriate here as we use it just for handling the click event), which is also a callback function
//because it will be called for us by the addEventListener method that will be listening for a click event in the element of btn-roll class

document.querySelector('.btn-roll').addEventListener('click', function() { 
    if(gamePlaying) {
        // 1. Random number
        //this is to assign randomizer to the dice variable
        var dice = Math.floor(Math.random() * 6) + 1; //Math.random gives a random between 0 and 1; multiplying by 6 => random between 0 and 5; Math.floor => skip decimals

        // 2. Display result
        var diceDOM = document.querySelector('.dice'); //here we assign an html element to a variable so that we can reuse it easily
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice === 6 && previousDice === 6) {
            //player loses ENTIRE score
            overallScores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if (dice !== 1) {
            //Add score 
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;          
        } else {
            nextPlayer();
        }
        previousDice = dice;
    }
});



document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to global score
        overallScores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = overallScores[activePlayer];

        // Check if player won the game
        if (overallScores[activePlayer] >= winnerScore) {
            //activePlayer won
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        } 
    }

});

// here note how we call an existing function via the event listener, in which case we simply provie the function name without the initialization parentheses
document.querySelector('.btn-new').addEventListener('click', init);


function checkWinnerScoreUserInput () {
    alert("Please, enter the target Winner Score to play the game");
    gamePlaying = false;
}

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator for simple if statements
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); //adds or removes parameter to class in html document - if it's there - remove, if not add
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    roundScore = 0;
}

//this is the init function that is used upon loading the game and when pressing the 'new game' button
function init() {
    overallScores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    winnerScore = 0;
    gamePlaying = true;

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
    document.querySelector('.player-0-panel').classList.remove('active'); //if you add a class to an html element by default then be sure to remove it first
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('winner-score-id').disabled=false; //here we enable the input field upon starting a new game round
    winnerScore = document.getElementById('winner-score-id').value = ''; //here we clear the Winner Score entered during the previous game
    
}


