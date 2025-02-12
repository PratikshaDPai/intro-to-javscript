// Write a function named computeArea.
// It will have two parameters: width and height.
// It will compute the area of a rectangle (width * height) and return a string in the following form:
// The area of a rectangle with a width of __ and a height of __ is ___ square units.
// Invoke the function to test it:

// console.log(computeArea(5, 25));
// // Prints:
// The area of a rectangle with a width of 5
// and a height of 25 is 125 square units.

let computeArea = (width, height) => {
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${
    width * height
  } square units.`;
};

console.log(computeArea(5, 6));
