// Tribonacci Sequence
// Link to Kata: https://www.codewars.com/kata/556deca17c58da83c00002db

// Solution:

function tribonacci(signature, n) {
  let seq = [];
  if (n === 0) {
    return seq;
  } else if (n < 4) {
    for (let i = 0; i < n; i++) {
      seq.push(signature[i]);
    }
    return seq;
  } else {
    seq = signature;
    for (let i = 3; i < n; i++) {
      seq[i] = seq[i - 1] + seq[i - 2] + seq[i - 3];
    }
    return seq;
  }
}
