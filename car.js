//  You Do
// Add another property, and instantiate the class.
// Modify the Car class by adding a property named color.
//  Don’t forget to add a new parameter to the constructor method.
// Test it by instantiating another object of your choice.
// It should resemble the one below - you should add this line to your code as well;
// we’ll use it later in this lesson.
//  const mySubaru = new Car('Subaru', 'Crosstrek', 'blue')

// defining the class
class Car {
  constructor(make, model, color, year) {
    // this method attaches the properties to the new object
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
    this.isRunning = false;
    this.isAntique = () => {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year > 25;
    };
  }
  start() {
    this.isRunning = true;
    console.log("Running!");
  }
  stop() {
    this.isRunning = false;
    console.log("Stopped");
  }
  static about() {
    //only works for class, not instance
    console.log("I'm the Car class!");
  }
}

// instantiating the class
const myCar = new Car("Toyota", "Corolla", "Blue", 1995);

console.log(myCar, myCar.isAntique());

myCar.start();
console.log(myCar);

Car.about();
//myCar.about(); //throws error: TypeError: myCar.about is not a function

// Add another instance method.
// Define a stop method in the Car class.
// The stop method should set the isRunning property to false
// and log "Stopped!" to the console.

class ElectricCar extends Car {
  constructor(make, model, color, year, batteryCharge) {
    super(make, model, color);
    this.batteryCharge = batteryCharge;
  }
  start() {
    //trying method overriding
    if (this.batteryCharge > 0) {
      this.isRunning = true;
      console.log("Your electric car is running!");
    } else {
      this.isRunning = false;
      console.log("Time to recharge!");
    }
  }
}
const myLeaf = new ElectricCar("Nissan", "Leaf", "Gray", 2013, 90);
console.log(myLeaf);
myLeaf.start();
