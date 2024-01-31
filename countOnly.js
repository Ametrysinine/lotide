const assertEqual = function(actual, expected) { // Import assertEqual

  const passMessage = `✔✔ Test passed ✔✔: ${actual} === ${expected}`;
  const failMessage = `❌ Test failed ❌: ${actual} !== ${expected}`;

  if (actual === expected) {
    console.log(passMessage);

  } else {
    console.log(failMessage);

  }
};

const countOnly = function(allItems, itemsToCount) {
  const stringCount = {};
  const keys = Object.keys(itemsToCount);
  const values = Object.values(itemsToCount);

  for (let i in keys) { // Create stringCount object with items to count listed
    if (values[i]) {
      stringCount[keys[i]] = 0;
    }
  }

  for (let i in allItems) {
    if (stringCount.hasOwnProperty(allItems[i])) {
      stringCount[allItems[i]] += 1; // Increment item-to-count by 1 once iterated in array
    }
  }

  for (let string in stringCount) { // Delete all items with count of zero
    if (stringCount[string] === 0) {
      delete stringCount[string];
    }
  }
  return stringCount;
};



const criteria = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

countOnly(firstNames, criteria);




const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);