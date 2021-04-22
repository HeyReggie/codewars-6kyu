// Playing with digits
// Link to Kata: https://www.codewars.com/kata/5552101f47fc5178b1000050

//Solution

function digPow(n, p) {
  const arr = n.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** p;
    p++;
  }
  const k = sum / n;
  return Number.isInteger(k) ? k : -1;
}
