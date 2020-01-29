/*
    - forOf loops look at the iterable properties of an array
    - can't use forOf loops on objects befcause objects are enumberable,
    not iterable
*/

// let student = {
//   name: "Peter",
//   awesome: true,
//   degree: "JavaScript",
//   week: 1
// };

// for (let item of student) {
//   console.log(item); // if you're using an object don't use a forOf. They're great for arrays
// }

let dogarray = [
  "great dane",
  "huskies",
  "border collie",
  "dalmation",
  "italian greyhound"
];
for (dog of dogarray) {
  console.log(dog, "goes bark");
}
