const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }


};
const countLetters = function(inputStrings) {
  let output = {};
  for (let character of inputStrings) {
    if (character !== " ") {
      if (output[character]) {
        output[character] += 1;
      } else {
        output[character] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters("lightouse in the house"));

module.exports = countLetters;
