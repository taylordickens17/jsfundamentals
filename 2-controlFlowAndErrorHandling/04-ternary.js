/*
    - a ternary is a shortcut, or shorthand way of writing an if/else statement
    - requires the default or catch all (else)
*/

let num = 6;

// Ternary (num > 0) ? usually has parenthesis around it.
num > 0 ? console.log("yes") : console.log("no"); //this shit is better!

// if/else
if (num > 0) {
  console.log("yes");
} else {
  console.log("no");
}

let num = 0;
//Ternary
num == 0
  ? console.log("working")
  : num < 0
  ? console.log("not working")
  : console.log("still not working");

// else/if

if (num == 0) {
  console.log("working");
} else if (num < 0) {
  console.log("not working");
} else {
  console.log("still not working");
}

let age = 19;
age >= 25
  ? console.log("Yay! You can rent a car")
  : age >= 21
  ? console.log("Yay! You can drink")
  : age >= 18
  ? console.log("Yay! You can vote!")
  : console.log("You are too young to do anything...");
