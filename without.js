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

const without = function(src, exclude){
    let result = [];

    for (const item of src) {
        if (!exclude.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));