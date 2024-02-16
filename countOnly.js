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

module.exports = countOnly;