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
