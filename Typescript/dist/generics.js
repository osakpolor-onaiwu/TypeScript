var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj, age) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id, age: age });
};
var users = {
    name: 'jack'
};
var result = addId(users, 34);
var resultb = addId('samuel');
console.log('result---', result);
/*Notice <T> is used for defining generics. Generics is to almost specify that any
datatype is require. use it instead of any. however when we call the function,
we sent <UserInterface> meaning that the generic T must be an object that follows the UserInterface pattern.
it is adviced to specify what datatype T will be, just like we specified it should be UserInterface

ALso Notice i did name?:string, This means the name arg is optional. you can use ? even without interface.
*/
var addId2 = function (obj, age) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id, age: age });
};
var results = addId2(users, 34);
// const resultsb = addId2<string>('samuel') this won't work because T won' accept string
console.log('result---', results);
//notice because we make T extends object it means T can only accept objects.
//You can provide many generic
var practice = function (obj, age) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id, age: age });
};
var resp = practice(users, ['sam', "has"]);
console.log('result---', results);
