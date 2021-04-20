// Counting Duplicates
// Link to Kata: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// Solution

function duplicateCount(text) {
  const newArr = text.toLowerCase().split("");
  let checked = [];
  let duplicates = 0;

  for (let i = 0; i < newArr.length; i++) {
    let sliced = newArr.slice(0, i);

    if (checked.includes(newArr[i])) {
      i++;
    } else if (sliced.includes(newArr[i])) {
      checked.push(newArr[i]);
      duplicates++;
    }
  }
  return duplicates;
}
