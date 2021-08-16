const assertEqual = function(actual, expected) {
  console.log(actual === expected);
};

const head = function(list) {
	return list[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");