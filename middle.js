const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;