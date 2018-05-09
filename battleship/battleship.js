var view = {
	displayMessage: function (msg) {
    	var messageArea = document.getElementById("messageArea");
    	messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
    	var cell = document.getElementById(location);
    	cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
    	var cell = document.getElementById(location);
    	cell.setAttribute("class", "miss");
    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [
        { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["14", "24", "34"], hits: ["", "", ""] },
        { locations: ["00", "01", "02"], hits: ["", "", ""] }
        ],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess); //returns the index of guess            or -1 if no guess is outside the array
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my ship!");
                    this.shipsSunk++; //if sunk, then increases shipsSunk by 1
                }
                return true; //returns true for "hit"
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed!");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {

        }
    }
};

function parseGuess (guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops, please, enter a letter and a number on the board.");
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board"); 
        } else {
            return row + column;
        }
    }
    return null;
}

console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0"));
console.log(parseGuess("A7"));


model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");



/*
This explains how to get values from an array within an array and place a value in an array within an array
test
var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);

var ship3 = ships[2];
var hits = ship3.hits;
if (hits[0] === "hit") {
	console.log("Ouch, hit on the third ship at location one");
}

var ship1 = ships[0];
var hits = ship1.hits;
hits[2] = "hit";
console.log(hits[2]);
*/



