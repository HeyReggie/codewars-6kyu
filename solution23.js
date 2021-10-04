// Find the missing letter
// Link to Kata: https://www.codewars.com/kata/5839edaa6754d6fec10000a2

// Solution

function findMissingLetter(array) {
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
  const alphabetUpper = alphabet.map((letter) => letter.toUpperCase());

  const sectionToCompare = alphabet.includes(array[0])
    ? alphabet.slice(
        alphabet.indexOf(array[0]),
        alphabet.indexOf(array[array.length - 1])
      )
    : alphabetUpper.slice(
        alphabetUpper.indexOf(array[0]),
        alphabetUpper.indexOf(array[array.length - 1])
      );

  return sectionToCompare
    .filter((letter) => !array.includes(letter))
    .toString();
}
