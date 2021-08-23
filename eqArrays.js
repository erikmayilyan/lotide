const assertEqual = require('./assertEqual');

const eqArrays = function(one, two) {
    for (let i = 0; i < one.length; i++){
    	if (one[i] !== two[i]) {
      	return false;
    	}
    }
    return true;
}
  
// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

module.exports = eqArrays;