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

const letterPositions = function (occurance) {

    let results = {};

    for(let i = 0; i < occurance.length; i++) {
        if(occurance[i] !== " ") {
            if (results[occurance[i]]) {
                results[occurance[i]].push(i);
            } else {
                results[occurance[i]] = [i];
            }
        }
    }
    console.log(results);
    return results;

}

console.log(assertArraysEqual(letterPositions("lighthouse in the house").e, [1]));