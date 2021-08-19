const eqArrays = function(one, two) {
    if (one.length !== two.length) {
        return false;
    }
    for (let i = 0; i < one.length; i++){
    	if (one[i] !== two[i]) {
      	    return false;
    	}
    }
    return true;
}

const eqObjects = function(object1, object2) {
    let arr1 = Object.keys(object1);
    let arr2 = Object.keys(object2);
    let results = true;
    if (arr1.length !== arr2.length) {
        return false;
    } 
    for (let key of arr1) {
        if (Array.isArray(object1[key])) {
            if (eqArrays(object1[key], object2[key])) {
                return true;
            } else {
                return false;
            }
        }
    }
    return true;
};

const assertObjectsEqual = function(actual, expected) {
    
    const inspect = require('util').inspect;
    for (let key in actual){
    	if (eqObjects(actual, expected) === true) {
            return `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
    	}
    }
    console.log(`Example label: ${inspect(actual)}`);
    return `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};

const object1 = {
    a : 1,
    b : 2
}

const object2 = {
    a : 1,
    b : 2
}

console.log(assertObjectsEqual(object1, object2));