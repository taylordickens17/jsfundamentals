/*
    - great for counting key/value pairs in an object. Properties in an object
    are what is called enumerable
        - for in loops will iterate over an objects enumerable properites
*/

let student = {
  name: "Peter",
  awesome: true,
  degree: "JavaScript",
  week: 1
};

console.log(student.degree); //dot notation is how you get a value in an object
//dot notation is for objects
for (let item in student) {
  // console.log(item);
  console.log(student[item]); //object bracket notation is how you grab the values in the object
}

let dogarray = [
  "great dane",
  "huskies",
  "border collie",
  "dalmation",
  "italian greyhound"
];
for (dog in dogarray) {
  //   console.log(dog);
  console.log(dogarray[1]); //bracket notation is for arrays
}

let name = "tAyLoR";
let capName;

for (i in name) {
  if (i == 0) {
    capName = name[i].toUpperCase();
  } else {
    capName += name[i].toLowerCase();
  }
}

console.log(capName);
