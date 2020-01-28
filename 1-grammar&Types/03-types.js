/*
    -BOOLEANS
        -a boolean has two possible values of either true or false
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
    - NULL
        - null is a n empty value. Think of it like an empty
        container: nothing is in it, but it still exists as a
        space to fill 
*/

let empty = null;
console.log(empty);

/* 
    -UNDEFINED
        - no value has been assigned and it does not act as an 
        empty container, whereas null does.

*/

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/*
    - Null is like a container with nothing in it
    - Undefined is when a variable has never been set, or hasn't
    been created yet
*/

/*
    NUMBERS
        - numbers are literally just numbers. Don't need anything
        special to write them
*/

let degrees = 33;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise);

let rounded = 9999999999999999; //16 9's
console.log(rounded); //JavaScript rounds up after the 16 character

let decimal = 0.2 + 0.1; //rounds out at a certain number
console.log(decimal); // JAVASCRIPT SUCKS AT MATH like me

/*
    STRINGS
        - strings are datatypes used to represent text and are
        wrapped in either single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

// numbers vs strings

let first = 1050 + 100;
let second = '1050' + '100';  //if one is a string and one is a number it will still be a string data type!

console.log(first);
console.log(second);

console.log(typeof first); //will tell you what type of data your variable's values are! This is a numbers
console.log(typeof second); //this is a string

/*
    OBJECTS
        - objects are used to store many values instead of a
        singular value
        - hold what are known as key/value pairs
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);
console.log(typeof frodo); //will say it's an object

/*
    ARRAYS
        - arrays are containers that hold a list of items

        let list = [ 'item1', 'item2', 'item3' ];
            (1)   (2)  (3)

            1. name of the array. It can be anything. It's a variable
            2. square brackets denote that it is an array
            3. each item, regardless of it's data type, is separated by a comma
*/

let burritos = ['large', 4, true];
console.log(burritos[1]); //square brackets in the function will call the specific number that you put there
console.log(typeof burritos); //arrays will be seen as an object data type

// Challenge:
//     Set 7 (or 8) variables:
//     firstName
//     lastName
//     houseNumber
//     aptNumber (if applicable)
//     street
//     city
//     state
//     zipcode
//     Set each variable to its respective type.

let info = {
    firstName: 'Taylor',
    lastName: 'Dickens',
    houseNumber: 8720,
    aptNumber: null,
    street: 'Randall Dr.',
    city: 'Fishers',
    state: 'Indiana',
    zipcode: 46038,
}

let firstName = 'Taylor';
let lastName = 'Dickens';
let houseNumber = 8720;
let aptNumber = null;
let street = 'Randall Dr.';
let city = 'Fishers';
let state = 'Indiana';
let zipcode = 46038;

console.log(firstName, lastName + ',', houseNumber, street)

/*
    STRING: PROPERTIES
        - properties are qualities associated with a specific
        datatype
        - strings have properties, or qualities that are associated specifically with strings
*/

let myName = 'Taylor';
console.log(myName.length) //length will not start counting at 0

/*
    STRING: METHODS
        - methods are tools that can help us manipulate certain
        data
        - .property & .method()
            - no parenthesis for properties
*/

let myNameIs = 'Taylor';
console.log(myNameIs.toUpperCase()) //this method creates an all uppercase. methods need parenthesis

let home = 'My home is Greenwood';
console.log(home.includes('Greenwood')); //returns a boolean value. In this case the string includes
//Greenwood and is true.

let sent = 'this sentence will be split in individual parts';
console.log(sent.split(" "));