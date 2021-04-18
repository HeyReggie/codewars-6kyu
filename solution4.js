// Duplicate Encoder
// Link to Kata: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// Solution:

function duplicateEncode(word) {
  let count = {};
  let elements = word.toLowerCase().split("");

  elements.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });

  return elements
    .map((element) => {
      return count[element] === 1 ? "(" : ")";
    })
    .join("");
}
