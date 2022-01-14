// Sort the odd
// Link to Kata: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript

// Solution:
function sortArray(array) {
  let sortedOdds = array.filter((el) => el % 2).sort((a, b) => a - b);
  let result = array.map((el) => (el % 2 ? sortedOdds.shift() : el));
  return result;
}
