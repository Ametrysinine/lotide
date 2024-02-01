const eqArrays = function(arrayOne, arrayTwo) { // Import eqArrays
  let arraysEqual = true;

  if (arrayOne.length !== arrayTwo.length) {
    arraysEqual = false;

  } else {
    for (let i in arrayOne) { // Compare each item in array
      if (arrayOne[i] !== arrayTwo[i]) {
        arraysEqual = false;
      }
    }
  }

  return arraysEqual;
};

const eqObjects = function(objectOne, objectTwo) { // eqObjects start
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) { // Length checker
    return false;
  }

  let keys = Object.keys(objectOne);

  for (let i = 0; i < keys.length; i++) {
    if (Array.isArray(objectOne[keys[i]])) { // Array checker
      if (!(eqArrays(objectOne[keys[i]], objectTwo[keys[i]]))) {
        return false;

      } else {
        continue;
      }
    }

    if (objectOne[keys[i]] !== objectTwo[keys[i]]) { // Primitive checker
      console.log(objectTwo[keys[i]]);
      return false;
    }
  }

  return true;
}; // eqObjects end


const objectWithArrays = {
  1: [2, 3, 4]
};
const object2WithArrays = {
  1: [2, 3]
};
console.log(eqObjects(objectWithArrays, object2WithArrays));

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false