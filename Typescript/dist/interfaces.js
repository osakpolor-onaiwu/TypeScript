//interfaces
/* interfaces help define a structure that object should follow, what fields should be
mandatory and optional. we are creating a structure that all users must follow. adding ? after
the property name means that property is optioanal. Always start an interface with a Capital letter,
and add the interface face word to it e.g UserInterface, so its easy to differentiate it from class*/
/* to use the interface above we can do the bellow. if age was not made optional,
 it mean we must provide age everytime*/
var user = {
    name: 'samuel',
    age: 23
};
var user2 = {
    name: 'Jason'
};
