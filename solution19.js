// Bit Counting
// Link to Kata: https://www.codewars.com/kata/526571aae218b8ee490006f4

// Solution

var countBits = function (n) {
  let binaryStr = n.toString(2);
  let ones = binaryStr.split("").filter((el) => el === "1");
  return ones.length;
};
