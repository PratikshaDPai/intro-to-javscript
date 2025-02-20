const nums = [1, 2, 3, 4, 5, 6, 7, 11, 13, 15, 33, 49, 75];

const fizz = nums.filter((num) => num % 3 === 0); //filter all nums divisible by 3
const buzz = nums.filter((num) => num % 5 === 0);
const fizzbuzz = nums.filter((num) => num % 3 === 0 && num % 5 === 0);

const fizzcnt = nums.reduce((cnt, num) => {
  //cnt= accumulator
  if (num % 3 === 0) cnt++;
  return cnt; //return accumulator
}, 0); //start iterating from 0

const buzzcnt = nums.reduce((cnt, nums) => {
  if (nums % 5 === 0) cnt++;
  return cnt; //don't forget to return accumulator
}, 0); //accumulator initial value

const fizzBuzzArray = nums.map((num) => {
  //new array with fizz, buzz etc replacing multiples of 3,5 etc.
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
});

console.log(`Initial array`, nums);
console.log(`Nums divisible by 3`, fizz, `Count`, fizzcnt);
console.log(`Nums divisible by 5`, buzz, `Count`, buzzcnt);
console.log(`Nums divisible by 3 and 5`, fizzbuzz);
console.log(`New mapped array`, fizzBuzzArray);
