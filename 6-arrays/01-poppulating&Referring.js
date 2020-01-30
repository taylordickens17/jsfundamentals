/*
    - arrays are containers that hold a list of items
    - denoted by square brackets []
    - another array and/or an object can be inside an array. It can hold any data types.
    - each item, regarless of datatype, is separated by a comma.
*/

let list = ["orange", "banana", "apple"];
console.log(list[1]);

/*
    - when calling an array, we can append square brackets onto the end of our array with the index number we want to reference. This is called square bracket notation
    -Javascript starts counting at 0 when it comes to indices
*/

let students = [
  "Matt",
  "Bob",
  "Jeff",
  "AB",
  23,
  true,
  ["Kris", "Taylor", "Will"]
];
// console.log(typeof students);
// console.log(students instanceof Array); //instanceof operator is used to check the type of variable we're working with
// console.log(students[2]);
console.log(students[6][2]); //add a bracket after the first bracket to get into a nested array...

let name = students[6][2];
console.log(`Hello, ${name}!`);
