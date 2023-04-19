// Write your solution here!
// Set up the array
let cats = [];
beforeEach(function () {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

// Access elements
console.log(cats[0]); // "Milo"
console.log(cats[1]); // "Otis"
console.log(cats[2]); // "Garfield"

// Add elements
cats.push("Simba");
console.log(cats); // ["Milo", "Otis", "Garfield", "Simba"]

// Remove elements
cats.pop();
console.log(cats); // ["Milo", "Otis", "Garfield"]

// Change elements
cats[1] = "Whiskers";
console.log(cats); // ["Milo", "Whiskers", "Garfield"]
