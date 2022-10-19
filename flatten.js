const eqArrays = function(firstArr, seconArr) {
  if (firstArr.length !== seconArr.length) {
    return false;
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== seconArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};

const flatten = function(nestedArrays) {
  let flatArray = [];
  for (const content of nestedArrays) {
    if (Array.isArray(content)) {
      for (const nestedContent of content) {
        flatArray.push(nestedContent);
      }
    } else flatArray.push(content);
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);