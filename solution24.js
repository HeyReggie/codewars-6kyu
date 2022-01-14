// Format a string of names like 'Bart, Lisa & Maggie'.
// Link to Kata: https://www.codewars.com/kata/53368a47e38700bd8300030d/javascript

// Solution:

function list(names) {
  let str = "";
  if (names.length) {
    let last = names.pop();
    str = names
      .map((el, i, arr) => {
        if (i !== arr[arr.length - 1]) {
          return el.name;
        }
      })
      .join(", ");
    str += str !== "" ? " & " + last.name : last.name;
  }
  return str;
}
