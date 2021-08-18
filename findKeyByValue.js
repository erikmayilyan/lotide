const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return `Assertion Passed: ${actual} === ${expected}`
    }
    return `Assertion Failed: ${actual} !== ${expected}`
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
    let results = Object.keys(object);
    for(let key of results) {
        if(value !== " ") {
            if (object[key] === value) {
                return key;
            } 
        }
    }
}
  
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));