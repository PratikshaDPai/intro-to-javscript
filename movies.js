//Intro to Arrays
const movies = [
  "Interstellar",
  "Kal Ho Na Ho",
  "The Curious Case of Benjamin Button",
];
const firstMovie = movies[0];
console.log(`There are ${movies.length} movies`);
const lastMovie = movies[movies.length - 1];
console.log(lastMovie);

//add another movie to list
movies.push("Coco");
console.log(movies);
