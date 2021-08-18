const assertArraysEqual = function(first, second) {
    for (let i = 0; i < first.length; i++){
    	if (first[i] !== second[i]) {
      	return `Assertion Failed: ${first} !== ${second}`
    	}
    }
    return `Assertion Passed: ${first} === ${second}`;
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));