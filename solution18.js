// Highest Scoring Word
// Link to Kata: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// Solution

function high(x) {
  const score = (word) =>
    word.split("").reduce((a, c) => a + (parseInt(c, 36) - 9), 0);
  let highestWord = "";
  let highestScore = 0;
  x.split(" ").forEach((w) => {
    const scoreCheck = score(w);
    if (scoreCheck > highestScore) {
      highestWord = w;
      highestScore = scoreCheck;
    }
  });
  return highestWord;
}
