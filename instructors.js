// Given an array of instructors,

const instructors = ["Beryl", "Hunter", "Joe", "Jurgen", "Ben", "David"];
// Use map to create a new array that adds the string “ is awesome” to each array element.
// Sample output:
// [
//   'Beryl is awesome',
//   'Hunter is awesome',
//   'Joe is awesome',
//   'Jurgen is awesome',
//   'Ben is awesome',
//   'David is awesome',
// ]

const awesomeInstructors = instructors.map((instructor) => {
  return `${instructor} is awesome`;
});
console.log(awesomeInstructors);
