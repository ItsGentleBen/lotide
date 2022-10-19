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

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", 2, "3"]);

