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
}

// instantiating the class
const myCar = new Car("Toyota", "Corolla", "Blue", 1995);

console.log(myCar, myCar.isAntique());
