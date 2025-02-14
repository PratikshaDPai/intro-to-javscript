let intro = document.createElement("h1");
intro.innerText = "Intro to the DOM";
document.body.appendChild(intro);

// In index.html, add a <p> tag below the <h1> and give it a class of "cool".

// Add some content inside the <p> tag. To do this quickly,
// try typing lorem, then hit Tab on your keyboard to insert placeholder text.

// Use document.querySelector() to select the <p> element with a class of cool
// and assign it to a variable named paragraphElement.

// Verify that the <p> element was selected by logging out paragraphElement.

const paragraphElement = document.querySelector(".cool");
console.log(paragraphElement);
