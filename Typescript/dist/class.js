/*notice for classes, take the properties in the constructore method as properties supplied
to that class from outside. the constructor acts as () for function i.e image a class written
like class(){} where what is in the constructor are d args supplied. the constructor
helps us map/attach args supplied from outside to the properties specified inside. Constructor
are need only when you intend varying the values of the properties inside the class, from the
instances.
*/
/* Notice that typeScript gives you the option to make propeties and methods in a class private or public.
By default it is public, meaning the properties and methods of a class are pulic to all its children
and instances. to make a method or property private, add the private keyword
*/
/* There is also a third option called protected, this allows props and method to only be open
to a class childeren.

you can also attach the readonly keyword to a property and this will make the property a constant
*/
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName; //here we assigned the firstName sent from the instance to the firstName property
        this.lastName = lastName; //here we assigned the lastName sent from the instance to the lastName property
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user1 = new User('sam', 'james').getFullName(); // notice here you only have access to the method and properties
console.log(user1);
var Car = /** @class */ (function () {
    function Car(name, colour) {
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour; //here we assigned the colour sent from the instance to the colour property
        this.unChangeableName = name;
    }
    Car.prototype.changeUnchangeableName = function () {
        // this.unChangeableName = 'sam'
    };
    Car.prototype.getDescription = function () {
        return "This ".concat(this.name, " is ").concat(this.colour, " in colour");
    };
    return Car;
}());
var bently = new Car('Bentley', 'Blue').getDescription(); // notice here you only have access to the method cause no private
console.log(bently);
/*Another keynote are static propeties. static properties are accessble only within the class
they are not accessible aside it to its instance.
*/
var Planes = /** @class */ (function () {
    function Planes(name, colour) {
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour; //here we assigned the colour sent from the instance to the colour property
    }
    Planes.prototype.getDescription = function () {
        return "This ".concat(this.name, " is ").concat(this.colour, " in colour");
    };
    Planes.maxAge = 23;
    return Planes;
}());
var booing = new Planes('Boeing', 'red').getDescription(); // notice here you only have access to the method cause no private
console.log(booing);
