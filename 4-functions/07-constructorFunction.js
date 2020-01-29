// (1)      (2)        (3)
function Person(name, age, canVote) {
  //  (4)   (5)    (6)
  this.name = name;
  this.age = age;
  this.canVote = canVote;
}

//             (7)   (8)
let person4 = new Person("Koda", 17, true);
let person5 = new Person("Laura", 25, true);
let person6 = new Person("Chloe", 7, false);
console.log(person4);
console.log(person5);
console.log(person6);

/*
    1. function keyword
    2. function name, for constructor function name, it should be capitalized
    3. the parameters. these will be the values for the keys in our objects once a new 'Person' is created
    4. the '.this' keyword refers back to whatever called it, or whatever activates it. in this case, '.this' refers back to 'Person'
    5. the keys of the new object we're creating.
    6. the argument we pas through our function call will resolve as the values
    7 & 8. the new keyword creates a new instance of our 'Person' object, with the values we pass into that function when invoking it.
*/
