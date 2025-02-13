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

// Let’s look at our music object so far:

// const music = {
//   currentTrack: 'Just Ken',
//   trackIdx: 0,
//   currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
//   volume: 70,
//   mute() {
//     music.volume = 0;
//   },
//   next() {
//     music.trackIdx += 1;
//   },
// };
// But wait, what about currentTrack? Currently, it’s just a hard coded string- meaning it wont get updated when we call our next() method. How can we change this so that our currentTrack property stays up to date?
// How could we use other properties in our object to dynamically set the value of currentTrack?

// currentTrack = music.currentPlaylist[music.trackIdx];

// Using dot notation, practice updating a value from one of the objects in the new currentPlaylist array.

// Can you change the track length for the song 'What was I Made For'?

// {
//   title: 'What Was I Made For',
//   artist: 'Billie Eilish',
//   album: 'Barbie The Album',
//   length: '3:42', // <----  lets update this to 3:54
// }

// this object is in music.currentPlaylist[2]
//to access the length within the object, we do object.length='3:54';
//whole operation: music.currentPlaylist[2].length='3:54';

music.currentPlaylist = [
  {
    title: "Just Ken",
    artist: "Ryan Gosling",
    album: "Barbie The Album",
    length: "3:43",
  },
  {
    title: "Hey Blondie",
    artist: "Dominic Fike",
    album: "Barbie The Album",
    length: "2:21",
  },
  {
    title: "What Was I Made For",
    artist: "Billie Eilish",
    album: "Barbie The Album",
    length: "3:42",
  },
  {
    title: "Dance The Night",
    artist: "Dua Lipa",
    album: "Barbie The Album",
    length: "2:56",
  },
];

console.log(music.currentPlaylist[2].length);
music.currentPlaylist[2].length = "3:54";
console.log(music.currentPlaylist[2].length);
console.log(music.currentPlaylist[2].length.length);
