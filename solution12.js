// Find The Parity Outlier
// Link to Kata: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// Solution

function findOutlier(integers) {
  const even = integers.filter((x) => x % 2 === 0);
  const odd = integers.filter((x) => x % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
