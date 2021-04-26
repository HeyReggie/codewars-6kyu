// Find the unique number
// Link to Kata: https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// Solution

const findUniq = (arr) => {
  if (arr[0] === arr[1]) {
    return arr.find((el) => el !== arr[0]);
  } else {
    return arr[0] === arr[2] ? arr[1] : arr[0];
  }
};
