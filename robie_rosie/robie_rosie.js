/*
function Game () {
    this.level = 0;
}

Game.prototype.play = function () {
    this.level ++;
    console.log ("Welcome to level " + this.level);
    this.unlock ();
}

Game.prototype.unlock = function () {
    if (this.level >= 42) {
        console.log ("You now have the laser beam capability!");
        Robot.prototype.deployLaser = function () {
            console.log (this.name + " is blasting you with laser beams!");
        }
    }
}
*/

function Robot (name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function () {
    console.log (this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function () {
    this.errorMessage = "I appear to have a short circuit!";
};
Robot.prototype.speak = function () {
    console.log ("How can I help you?");
};
Robot.prototype.makeCoffee = function () {
    console.log ("Prepare coffee!");
};
Robot.prototype.blinkLights = function () {
    console.log ("Blink lights!");
};

//Creating a SpaceRobot Constructor

function SpaceRobot (name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

//Assigning the Robot object to the SpaceRobot prototype

SpaceRobot.prototype = new Robot ();
SpaceRobot.prototype.speak = function () {
    console.log (this.name + " says Sir, if I may venture an opinion...");
};
SpaceRobot.prototype.pilot = function () {
    console.log (this.name + " says Thrusters? Are they important?");
};

var c3po = new SpaceRobot ("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log (c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot ("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();

/*
var robby = new Robot ("Robbie", 1956, "Dr. Morbius");
var rosie = new Robot ("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log ("Get coffee from Starbucks!");
};

rosie.cleanHouse = function () {
    console.log ("Clean the house!");
};

var game = new Game ();

while (game.level < 42) {
    game.play ();
}

rosie.deployLaser();
robby.deployLaser();

rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();

console.log (robby.hasOwnProperty("errorMessage"));
console.log (rosie.hasOwnProperty("errorMessage"));


console.log (robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log (rosie.name + " was mady by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
*/
