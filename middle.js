const eqArrays = function(one, two) {

    for (let i = 0; i < one.length; i++){
    	if (one[i] !== two[i]) {
      	return false;
    	}
    }
    
    return true;
}

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

const middle = function(array) {

    if(array.length === 1 || array.length === 0 || array.length === 2) {
        return [];
    }

    const isEven = (array.length % 2 === 0);

    if(isEven) {
        const rightIndex = array.length / 2 ;
        return [array[rightIndex-1],array[rightIndex]]; 
    }

    const middle = Math.round(array.length / 2);
    return [middle];

}

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1]));
console.log(middle([1, 2]));