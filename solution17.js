// Array combinations
// Link to Kata: https://www.codewars.com/kata/59e66e48fc3c499ec5000103

// Solution

const solve = (arr) =>
  arr.map((x) => [...new Set(x)].length).reduce((a, c) => a * c);
