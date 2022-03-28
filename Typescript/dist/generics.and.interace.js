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
var addIds = function (obj, age) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id, age: age });
};
var test = {
    name: 'jack',
    data: {
        meta: 'jackson'
    }
};
var test2 = {
    name: 'sam',
    data: ['dam', 'jam']
};
var res = addIds(test);
console.log('result---', res);
