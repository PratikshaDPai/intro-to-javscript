// Define another class.
// Pick something like our car example above that would make sense to instantiate.
// You can pick anything you’d like, but we’ll use Airplane as an example.
//  Remember that the class name should be uppercase and singular.
// Code the class’ constructor method so that it creates at least two properties.
// Add at least two methods to the class. At least one of the methods you write should
//  interact with one or multiple of the properties you created above.
//  As you write your methods you might think of more properties you could add to the constructor - if you do, add them!
// Create a couple of new instances of the class you’ve built.

class Airplane {
  constructor(airline, model, color, year) {
    // this method attaches the properties to the new object
    this.airline = airline;
    this.model = model;
    this.color = color;
    this.year = year;
    this.isRunning = false;
    this.isOperational = () => {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year < 20; //airline uses aircraft only if <20 yrs old
    };
  }

  start() {
    this.isRunning = true;
    console.log("Plane Started!");
  }
  stop() {
    this.isRunning = false;
    console.log("Plane Stopped!");
  }
}

const myPlane = new Airplane("United", "Boeing 737", "blue", 2003);
console.log(myPlane, myPlane.isOperational());
