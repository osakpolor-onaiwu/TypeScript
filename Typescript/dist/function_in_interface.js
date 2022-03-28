//defining functions in an interface
/*notice how we created the function, the string in the right
means it should return a string. we could also specify the datatypes
each argument should be. note we made drive method optional*/
var car1 = {
    name: 'benz',
    color: 'red',
    move: function (km, time) {
        return "".concat(km, "/").concat(time);
    }
};
var makemove = car1.move(45, 's');
console.log(makemove);
