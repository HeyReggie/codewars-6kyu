// Vasya - Clerk
// Link to Kata: https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

// Solution

function tickets(peopleInLine) {
  let numOf25s = 0,
    numOf50s = 0,
    numOf100s = 0;
  let result;
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      numOf25s++;
      result = "YES";
    } else if (peopleInLine[i] === 50) {
      if (numOf25s > 0) {
        numOf25s--;
        numOf50s++;
        result = "YES";
      } else {
        result = "NO";
      }
    } else {
      if (numOf25s >= 1 && numOf50s >= 1) {
        numOf25s--;
        numOf50s--;
        numOf100s++;
        result = "YES";
      } else if (numOf25s >= 3) {
        numOf25s -= 3;
        numOf100s++;
        result = "YES";
      } else {
        result = "NO";
      }
    }
    if (result === "NO") {
      break;
    }
  }
  return result;
}
