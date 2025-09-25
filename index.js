const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// index.js

// ====================
// Objects
// ====================
const doggie = {
  name: "Buzz",
  breed: "Great Pyrenees",
  furColor: "black and white",
  activityLevel: "sloth-like",
  favoriteFood: "hot dogs",
  favoriteFoods: {
    meats: {
      ham: "smoked",
      hotDog: "Oscar Meyer",
    },
    cheeses: {
      american: "kraft",
    },
  },
};

// Destructure simple properties
const { name, breed } = doggie;

// Destructure nested object
const { ham, hotDog } = doggie.favoriteFoods.meats;

// ====================
// Arrays
// ====================
const dogs = ["Great Pyrenees", "Pug", "Bull Mastiff"];

// Destructure all
const [medium, small, giant] = dogs;

// Skip the first one
const [, secondDog, thirdDog] = dogs;

// ====================
// Strings
// ====================
const dogsName = "Sir Woody BarksALot";

// Destructure into title, first, last
const [title, firstName, lastName] = dogsName.split(" ");

// Destructure into title and last (skip firstName)
const [knightTitle, , familyName] = dogsName.split(" ");

// ====================
// Logging for testing
// ====================

console.log("Object destructuring:");
console.log(name); // Buzz
console.log(breed); // Great Pyrenees
console.log(ham); // smoked
console.log(hotDog); // Oscar Meyer

console.log("\nArray destructuring:");
console.log(medium, small, giant); // Great Pyrenees Pug Bull Mastiff
console.log(secondDog, thirdDog); // Pug Bull Mastiff

console.log("\nString destructuring:");
console.log(title, firstName, lastName); // Sir Woody BarksALot
console.log(knightTitle, familyName); // Sir BarksALot
