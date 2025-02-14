// In index.html, add a <p> tag below the <h1> and give it a class of "cool".

// Add some content inside the <p> tag. To do this quickly,
// try typing lorem, then hit Tab on your keyboard to insert placeholder text.

// Use document.querySelector() to select the <p> element with a class of cool
// and assign it to a variable named paragraphElement.

// Verify that the <p> element was selected by logging out paragraphElement.

const paragraphElement = document.querySelector(".cool");
console.log(paragraphElement);
let intro = document.createElement("h2");
intro.innerText = "Intro to the DOM";
document.querySelector("ol").appendChild(intro);

// Let’s get some practice adding some styles directly to a DOM element. Change
// the text color of the <p> element to a color of your choosing.

paragraphElement.style.color = "red";

// Try to select multiple elements in the DOM

// Use document.querySelectorAll() to select all <li> elements that are nested within the element with id comments.
//  Assign them to a variable named commentElements.
// console.log(commentElements) to verify your work.

const commentElements = document.querySelectorAll("#comments li");
console.log(commentElements);
commentElements.forEach((element) => {
  element.style.fontSize = "30px";
});
for (const li of commentElements) {
  li.style.fontSize = "20px"; //also trying for...of
  console.log(li.textContent);
}

// Test out the setAttribute() method.
// It accepts two arguments - the first is the name of the attribute we would like to change,
// and the second is the value we would like to change it to.
// Check out the documentation for setAttribute() for more support.

// Give the buttonElement we created above an id of 'submit'.

// Inspect the element in the DevTools to confirm that this was successful.

document.querySelector("p").appendChild(document.createElement("button")); //create button
const buttonElement = document.querySelector("button");
buttonElement.textContent = "Click Me!";
buttonElement.setAttribute("id", "submit");
if (buttonElement.hasAttribute("disabled") === true) {
  buttonElement.removeAttribute("disabled");
}

// Following the examples in the classList documentation,
// write some code to remove the 'btn' class from the buttonElement,
// then give it a new class called action-button

// Inspect the element in the DevTools to confirm that this was successful.
buttonElement.classList.add("btn");
buttonElement.classList.replace("btn", "action-button");
//using .className=
//this ONLY works if we want to replace ALL existing classes with action-button
buttonElement.className = "action-button";
