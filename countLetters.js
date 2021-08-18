const assertEqual = function(actual, expected) {

    if (actual === expected) {
      return `Assertion Passed: ${actual} === ${expected}`
    }

    return `Assertion Failed: ${actual} !== ${expected}`

};

const countLetters = function (theString) {
    let results = {};
    for(const letter of theString) {
        if(letter !== " ") {
            if (results[letter]) {
                results[letter] += 1;
            } else {
                results[letter] = 1;
            }
        }
    }
    return results;
}

console.log(countLetters('LHL'));