/*
function dogCatcher (obj) {
    if (obj instanceof Dog) {
        return true;
    } else {
        return false;
    }
}
*/

/*
function Cat (params) {
    this.name = params.name;
    this.breed = params.breed;
    this.weight = params.weight;
}

var meowParams = {
    name: "Meow",
    breed: "Siamese",
    weight: 10
}

var whiskersParams = {
    name: "Whiskers",
    breed: "Mixed",
    weight: 12
}

var meow = new Cat (meowParams);
var whiskers = new Cat (whiskersParams);
*/

//Dog Constructor

function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//Dog Prototype

Dog.prototype.species = "Canine";
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log (this.name + " says Woof!");
    } else {
        console.log (this.name + " says Yip!");
    }
};
Dog.prototype.run = function () {
    console.log ("Run!");
};
Dog.prototype.wag = function () {
    console.log ("Wag!");
};
Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log (this.name + " is already sitting");
    } else { 
        this.sitting = true;
        console.log (this.name + " is now sitting");
    }
};

//Creating a ShowDog constructor

function ShowDog (name, breed, weight, handler) {
    Dog.call (this, name, breed, weight);
    this.handler = handler;
}

//Assigning a new Dog instance to the ShowDog prototype property

ShowDog.prototype = new Dog ();

//Setting the ShowDog constructor property explicitly

ShowDog.prototype.constructor = ShowDog;

//Adding ShowDog prototype properties and methods

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
    console.log ("Stack");
};
ShowDog.prototype.bait = function () {
    console.log ("Bait");
};
ShowDog.prototype.gait = function (kind) {
    console.log (kind + "ing");
};
ShowDog.prototype.groom = function () {
    console.log ("Groom");
};

//Creating a ShowDog instance

var fido = new Dog ("Fido","Mixed", 38);
if (fido instanceof Dog) {
    console.log ("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log ("Fido is a ShowDog");
}

var scotty = new ShowDog ("Scotty", "Scottish Terrier", 15, "Cookie");

if (scotty instanceof Dog) {
    console.log ("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log ("Scotty is a ShowDog");
}

scotty.stack();
scotty.bark();
console.log (scotty.league);
console.log (scotty.species);

console.log ("Fido constructor is " + fido.constructor);
console.log ("Scotty constructor is " + scotty.constructor);


//Checking instanceof

/*
var fidoParams = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
}

var fluffyParams = {
    name: "Fluffy",
    breed: "Poodle",
    weight: 30
}

var spotParams = {
    name: "Spot",
    breed: "Chihuahua",
    weight: 10
}
*/


/*
var fluffy = new Dog (fluffyParams);
var spot = new Dog (spotParams);

spot.bark = function () {
    console.log (this.name + " says WOOF!");
};

var dogs = [meow, whiskers, fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    if (dogCatcher (dogs[i])) {
        console.log (dogs[i].name + " is a dog!");
    }
}

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

fido.sit();
fido.sit();
fido.sit();

console.log (spot.hasOwnProperty ("sitting")); 
spot.sitting = true;
console.log (spot.hasOwnProperty ("sitting"));
*/