let weather = 60;

if (weather < 50) {
  console.log("Wear a jacket!");
} else {
  console.log("No jacket is necessary.");
}
//

let name = "Taylor";

if (name == "Taylor") {
  console.log("Hello my name is " + name + "."); // ${variable}. is string interpolation
} else {
  // have to use back ticks ``
  console.log("Hello, is your name " + name + "?");
}

let name = "Taylor";

if (name == "Taylor") {
  console.log(`Hello my name is ${name}.`);
} else {
  console.log(`Hello, is your name ${name}?`);
}
/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = "tAyLoR";

if (name.charAt(0) == name.charAt(0).toUpperCase()) {
  console.log(name.charAt(0) + name.slice(1, 6).toLowerCase()); //you can chain methods together. It's called method chaining.
} else {
  console.log(name.charAt(0).toUpperCase() + name.slice(1, 6).toLowerCase());
}

let age = 19;

if (age <= 17) {
  console.log("Sorry, you're too you to do anything.");
} else if (age >= 18 && age <= 20) {
  console.log("You can vote!");
} else if (age >= 21 && age <= 24) {
  console.log("You can drink!");
} else {
  console.log("You can rent a car!");
}
