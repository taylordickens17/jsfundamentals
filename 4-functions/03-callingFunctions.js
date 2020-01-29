function hi() {
  console.log("hello");
}

//hi;
//hi();
//console.log(hi);
console.log(hi());

// as soon as our arser see's that there is a function invocation, that happens immediately.

function numbers() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}

numbers();

let arr = ["This", "is", "really", "cool"];

function array() {
  for (word of arr) {
    console.log(word);
  }
}

array();
