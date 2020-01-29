/*
    - for loops take in 3 parameters:
        1. initial expressions
        2. condition/ how many iterations
        3. increment expression/ counter
*/
//      (1)      (2)       (3)
for (let i = 0; 1 < 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 10; i >= 0; i -= 1) {
  console.log(i);
}

for (let i = 0; i >= -24; i -= 2) {
  console.log(i);
}
//
name = "Taylor";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
//
let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum = sum + i;
}
console.log(sum);
