var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bikes = /** @class */ (function () {
    function Bikes(name, colour) {
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour; //here we assigned the colour sent from the instance to the colour property
    }
    Bikes.prototype.getDescription = function () {
        return "This ".concat(this.name, " is ").concat(this.colour, " in colour");
    };
    return Bikes;
}());
var bike1 = new Bikes('Suzuki', 'red').getDescription(); // notice here you only have access to the method cause no private
console.log(bike1);
var Scoot = /** @class */ (function (_super) {
    __extends(Scoot, _super);
    function Scoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scoot.prototype.setTyreNo = function (noOfTyres) {
        this.noOfTyres = noOfTyres;
    };
    Scoot.prototype.getTyreNo = function () {
        return "".concat(this.name, " ").concat(this.noOfTyres);
    };
    return Scoot;
}(Bikes));
/*Notice that if you want to be supplying a value from outside, you need to do this.propname = propname
in the method that is setting the property. */
var scoot = new Scoot('bus', 'blue');
console.log(scoot.setTyreNo('5'));
console.log(scoot.getTyreNo());
/*notice that Scoot class inherits all the properties of the parent class
i.e Bike. The Scoot class also has its own methods and properties*/ 
