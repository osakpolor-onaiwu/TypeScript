/* By using the implements keyword with the interface name, we mean that all class
that we use the WaterVehicle interface with (also with the implement keyword),
 must have the getDescription method and the method must return a string
 we made the getSpeed optional, hence it won't be required.*/
var Ship = /** @class */ (function () {
    function Ship(name, colour) {
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour; //here we assigned the colour sent from the instance to the colour property
    }
    Ship.prototype.getDescription = function () {
        return "This ".concat(this.name, " is ").concat(this.colour, " in colour");
    };
    return Ship;
}());
var titanic = new Ship('Titanic', 'red').getDescription(); // notice here you only have access to the method cause no private
console.log(titanic);
