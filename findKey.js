const assertEqual = function(actual, expected) {

    if (actual === expected) {
      return `Assertion Passed: ${actual} === ${expected}`
    }
    return `Assertion Failed: ${actual} !== ${expected}`
    
};

const findKey = function(object, callback) {

    for (const key in object) {
        if (callback(object[key])) {
            return key;
        }
    }

}

const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
console.log(assertEqual(result, "noma"));