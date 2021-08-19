const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return `Assertion Passed: ${actual} === ${expected}`
    }
    return `Assertion Failed: ${actual} !== ${expected}`
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); 

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); 

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); 