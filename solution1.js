// Solution for Take a 10 Minute Walk Kata
// Link to Kata: https://www.codewars.com/kata/54da539698b8a2ad76000228

// Solution:

function isValidWalk(walk) {
  let vertical = 0;
  let horizontal = 0;
  if (walk.length !== 10) {
    return false;
  } else {
    for (let direction of walk) {
      if (direction === "n") {
        vertical += 1;
      } else if (direction === "s") {
        vertical -= 1;
      } else if (direction === "w") {
        horizontal += 1;
      } else {
        horizontal -= 1;
      }
    }
  }
  if (vertical === 0 && horizontal === 0) {
    return true;
  }
}
