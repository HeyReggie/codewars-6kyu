// Does my number look big in this?
// Link to Kata: https://www.codewars.com/kata/5287e858c6b5a9678200083c

// Solution

function narcissistic(value) {
  const str = `${value}`;
  if (str.length === 1) {
    return true;
  } else {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i] ** str.length);
    }
    return sum === value ? true : false;
  }
}
