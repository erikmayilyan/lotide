const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5])));
console.log(assertArraysEqual(middle([1, 2, 3, 4])));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6])));
console.log(assertArraysEqual(middle([1])));
console.log(assertArraysEqual(middle([1, 2])));