// Replace With Alphabet Position Kata
// Link: https://www.codewars.com/kata/546f922b54af40e1e90001da

// Solution:

function alphabetPosition(text) {
  return [...text]
    .map((x) => parseInt(x, 36) - 9)
    .filter((x) => x > 0)
    .join(" ");
}
