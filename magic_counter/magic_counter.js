function makeCounter () {
    var count = 0;
    function counter () {
        count = count + 1;
        return count;
    }
    return counter;
}
var doCount = makeCounter ();
console.log (doCount ());
console.log (doCount ());
console.log (doCount ());

function makePassword (password) {
    return function guessPassword (passwordGuess) {
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword ("secret");
console.log ("Guessing 'nope':" + tryGuess("nope"));
console.log ("Guessing 'secret':" + tryGuess("secret"));

function multN (n) {
    return function multiplier (number) {
        return number * n;
    };
}

var multBy3 = multN (3);
console.log ("Multiplying by 2:" + multBy3(2));
console.log ("Multiplying by 3:" + multBy3(3));
