const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(result) {
  return result.shift();
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);