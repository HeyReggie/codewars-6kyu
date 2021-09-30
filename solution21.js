// Detect Pangram
// Link to Kata: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// Solution

function isPangram(string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const letters = string
    .toLowerCase()
    .split("")
    .filter((letter) => alphabet.includes(letter));
  return alphabet.every((letter) => letters.includes(letter));
}
