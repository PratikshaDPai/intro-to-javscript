// Do I have a random elephant in my room?

const thingsInMyRoom = [
  "bed",
  "lamp",
  "table",
  "random elephant",
  "three tacos",
];
// const isARandomElephantInMyRoom = /* Fill code in

const isARandomElephantInMyRoom = thingsInMyRoom.some((item) => {
  return item === "random elephant";
});
console.log(isARandomElephantInMyRoom);
