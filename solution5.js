// Unique in Order
// Link to Kata: https://www.codewars.com/kata/54e6533c92449cc251001667

// Solution:
const uniqueInOrder = (arg) => {
  const uniqueElement = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] !== arg[i - 1]) {
      uniqueElement.push(arg[i]);
    }
  }
  return uniqueElement;
};
