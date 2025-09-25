// index.js

// 1) String: Animal sounds
const animalSounds = "cow goes moo dog goes woof sheep goes baa pig goes oink horse goes neigh";
// Split into array
const [moo, woof, baa, oink, neigh] = animalSounds.split(" ").filter((_, i) => i % 2 !== 0);
// But lab is simpler — usually they give "moo woof baa oink neigh"
const animalSoundsStr = "moo woof baa oink neigh";
const [mooSound, woofSound, baaSound, oinkSound, neighSound] = animalSoundsStr.split(" ");

// To match test variable names
const moo = mooSound;
const woof = woofSound;
const baa = baaSound;
const oink = oinkSound;
const neigh = neighSound;


// 2) String: Animal names
const animals = "bessie dolly babe little";
// destructure
const [bessie, dolly, babe, little] = animals.split(" ");


// 3) String: Animal colors
const animalColors = "black-and-white black pink";
// destructure
const [blackAndWhite, black, pink] = animalColors.split(" ");


// 4) Array: Rainbow colors
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// destructure by names
const [red, orange, yellow, green, blue, indigo, violet] = colors;


// 5) Array: Rainbow with initials
const [r, o, y, g, b, , v] = colors;


// 6) Array: Indigo as indg
const [, , , , , indg] = colors;


// 7) Object: Destructure muppet
const muppet = {
  muppetName: "Kermit",
  color: "green",
  song: "The Rainbow Connection",
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};

// assign all
const { muppetName, color, song, job, partner } = muppet;


// 8) Object: Destructure nested muppet songs etc.
const muppetSongs = {
  song1: "Bein' Green",
  song2: "Rainbow Connection",
  song3: "Happy Feet",
  song4: "I Hope That Somethin' Better Comes Along"
};

const { song2, song4 } = muppetSongs;
const { job: kermitJob, partner: kermitPartner } = muppet;

