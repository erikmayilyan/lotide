const assertEqual = function(actual, expected) {

    if (actual === expected) {
      return `Assertion Passed: ${actual} === ${expected}`
    }

    return `Assertion Failed: ${actual} !== ${expected}`

};

const firstNames = [ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe" ];
  

const countOnly = function(allItems, itemsToCount) {
    let results = {};
    for (const theItem of allItems) {
        if (itemsToCount[theItem]) {
            if (results[theItem]) {
                results[theItem] += 1;
            } else {
                results[theItem] = 1;
            }
        }
    }
    return results;
}

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);