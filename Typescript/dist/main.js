var a = '1';
console.log(a);
var hello = "sam";
//functions
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName('jenni', 'sam'));
/* to use the interface above we can do the bellow. if age was not made optional,
 it mean we must provide age everytime*/
var user = {
    name: 'samuel',
    age: 23
};
var user2 = {
    name: 'Jason'
};
/*notice how we created the function, the string in the right
means it should return a string. we could also specify the datatypes
each argument should be. note we made drive method optional*/
var car1 = {
    name: 'benz',
    color: 'red'
};
