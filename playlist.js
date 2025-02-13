// Let’s add and remove a new playlist:

// Create a new playlist array called myPlaylist on your music object. Make sure to include a couple of your favorite songs in there.

// Practice printing myPlaylist to the console.

// Delete myPlaylist using the delete keyword.

// Print the music object to the console to verify myPlaylist has been deleted.

const music = {
  currentTrack: "IDFC",
  myPlaylist: ["IDFC", "Sunflower", "Here comes the Sun"],
  volume: 80,
};
console.log("Print myPlaylist");
console.log(music.myPlaylist);
let i = 1;
console.log("Looping through playlist items");
for (let track of music.myPlaylist) {
  console.log(`Item ${i} in myPlaylist: ${track}`);
  i++;
}

delete music.myPlaylist;
console.log("Looping through playlist items");
let j = 1;
for (let prop in music) {
  console.log(`Item ${j} in music: ${prop}`);
  j++;
}
