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

const thingsInMyRoom2 = [
  "random elephant",
  "random elephant",
  "random elephant",
  "random elephant",
];

const isEverythingInMyRoomARandomElephant = thingsInMyRoom2.every(
  (thing) => thing === "random elephant"
);
console.log(isEverythingInMyRoomARandomElephant);
