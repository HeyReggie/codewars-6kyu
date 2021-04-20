// Your order, please
// Link to Kata: https://www.codewars.com/kata/55c45be3b2079eccff00010f

// Solution

function order(words) {
  let array = words.split(" ");
  let correctOrder = [];
  let nextWord;
  for (let i = 1; i <= array.length; i++) {
    nextWord = array.find((el) => el.includes(i));
    correctOrder.push(nextWord);
  }
  return correctOrder.join(" ");
}
