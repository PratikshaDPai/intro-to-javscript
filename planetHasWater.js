// Write a function named planetHasWater.
// It will have one parameter: planet.
// Print true to the console if the planet argument is either 'Earth' or 'Mars'; otherwise, log false.
// Invoke the function a few times to test it:

// planetHasWater('Earth');   // should print true
// planetHasWater('Venus');   // should print false
// planetHasWater('Mars');    // should print true
// planetHasWater('Jupiter'); // should print false

function planetHasWater(planet) {
  if (planet === "Earth") {
    console.log("true");
  } else if (planet === "venus") {
    console.log("false");
  } else if (planet === "Mars") {
    console.log("true");
  } else if (planet === "Jupiter") {
    console.log("false");
  }
}

planetHasWater("Earth");
planetHasWater("Jupiter");
