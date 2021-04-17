// Persistent Bugger
// Link to Kata: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// Solution:

function persistence(num) {
  if (num < 10) return 0;
  const nextNum = `${num}`.split("").reduce((a, b) => a * b, 1);
  return 1 + persistence(nextNum);
}
