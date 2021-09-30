// Are they the "same"?
// Link to Kata: https://www.codewars.com/kata/550498447451fbbd7600041c

// Solution

function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  } else if (array1.length === 0 && array2.length === 0) {
    return true;
  } else {
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    const array1Squared = array1.map((el) => el ** 2);
    console.log(array1Squared, array2);

    let count = 0;
    let result = false;

    while (count < array1Squared.length) {
      if (array1Squared[count] === array2[count]) {
        result = true;
        count++;
      } else {
        result = false;
        break;
      }
    }
    return result;
  }
}
