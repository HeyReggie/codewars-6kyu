// IQ Test
// Link to Kata: https://www.codewars.com/kata/552c028c030765286c00007d

// Solution

const iqTest = (numbers) => {
  let arr = numbers.split(" ");
  let oddNums = arr.filter((x) => x % 2 !== 0);
  let evenNums = arr.filter((x) => x % 2 === 0);
  return oddNums.length === 1
    ? arr.indexOf(oddNums.toString()) + 1
    : arr.indexOf(evenNums.toString()) + 1;
};
