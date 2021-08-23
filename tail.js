const assertEqual = require('./assertEqual');

const tail = function(result) {
  return result.shift();
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));

module.exports = tail;