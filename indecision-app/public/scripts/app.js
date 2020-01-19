'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments)
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

var user = {
    name: 'Maphnew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + _this.city;
        });
    }
};

console.log(user.printPlacesLived());

// challenge area

var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply()); // [1,2,3] 2 [2,4,6]
