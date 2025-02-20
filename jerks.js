const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const nice = people.filter((person) => {
  return person === "nice people";
});
console.log(nice);
