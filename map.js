const assertArraysEqual = function(first, second) {

    if (first.length !== second.length) {
        return `Assertion Failed: ${first} !== ${second}`;
    }
    
    for (let i = 0; i < first.length; i++){
    	if (first[i] !== second[i]) {
      	    return `Assertion Failed: ${first} !== ${second}`
    	}
    }
    
    return `Assertion Passed: ${first} === ${second}`;
}

const eqArrays = function(one, two) {

    for (let i = 0; i < one.length; i++){
    	if (one[i] !== two[i]) {
      	return false;
    	}
    }
    
    return true;
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

    const results = [];
    
    for (let item of array) {
        results.push(callback(item));
    }

    return results;
}

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));