function Car (params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.startEngine = function () {
        this.started = true;
    };
    this.stopEngine = function () {
        this.started = false;
    };
    this.driveCar = function () {
        if (this.started) {
            console.log (this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log ("Start the engine first.");
        }
    };
}

function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: true,
    mileage: 1021};
var chevy = new Car (chevyParams);

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892};
var cadi = new Car (cadiParams);

var taxiParams = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341};
var taxi = new Car (taxiParams);

var fiatParams = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000};
var fiat = new Car (fiatParams);

var testCarParams = {
    make: "Webville Motors",
    model: "Test Car",
    year: 2013,
    color: "marine",
    passengers: 2,
    convertible: true,
    mileage: 21};
var testCar = new Car (testCarParams);

var limoParams = {
    make: "Webville Motors", 
    model: "limo", 
    year: 1983, 
    color: "black", 
    passengers: 12, 
    convertible: true, 
    mileage: 21120};
var limo = new Car (limoParams);
var limoDog = new Dog ("Rhapsody In Blue", "Poodle", 40);

console.log (limo.make + " " + limo.model + " is a " + typeof limo);
console.log (limoDog.name + " is a " + typeof limoDog);

var cars = [chevy, cadi, taxi, fiat, testCar];

for (var i = 0; i < cars.length; i++) {
    cars[i].startEngine();
    cars[i].driveCar();
    cars[i].driveCar();
    cars[i].stopEngine();
}

if (cadi instanceof Car) {
    console.log ("Congrats, it's a Car!");
};
