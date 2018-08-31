function Coffee (roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        var size = this.ounces;
        if (size === 8) {
            return "small";
        } else if (size === 12) {
            return "medium";
        } else if (size === 16) {
            return "large";
        }
    };
    this.toString = function () {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    };
}

var houseBlend = new Coffee ("House Blend", 12);
console.log (houseBlend.toString());

var darkRoast = new Coffee ("Dark Roast", 16);
console.log (darkRoast.toString());
