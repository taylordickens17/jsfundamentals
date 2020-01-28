/*
    - a variable is a named container for storing data
    - we name variables so that we can refer to them again (calling)
*/

let a = 2;

    let  b    =    1;
/* (1)  (2)  (3)  (4)

    1. "let" is a JavaScript keyword
    2. "b" is the variable name
    3. "=" is the assignment operator
    4. "1" is the value of the variable

*/

console.log(a + b);

/*
    Notes on variables:
        - a variable name must begin with a letter, underscore, or 
        dollar sign
        - numbers can't come first, but they can follow a letter,
        underscore, or dollar sign
        - JavaScript is case sensitive
        - no spaces allowed in variable names (use camelcase = helloWorld)
        - camelCase is the best practice for naming variables with 
        mulitple words
            - this helps with readablility
        

*/

let hello = "test one"
let Hello = "test two"

// Both functions above have different variables because JavaScript is case sensitive

/*
    var, let, const:

        - var: 'old' keyword for variables in JavaScript
        - let: 'new' keyword introduced for variables in ES6 
        (newer version of javascript)
        - const: unchangeable variable once declared

*/

/*

    declarations vs initialization:

        - declarations are the LEFT SIDE of  a variable
            - let x
            - declarations are on the left side of the assignment
            operator(=)
        - initialization are on the RIGHT SIDE of the variable
            - it sets the value of the variable
            - the value we initialize our variables as is what is 
            on the right side fo the assignment operator (=)

*/

let x;
console.log('Declaration:', x); // declaration: undefined

x = 10;
console.log('Initialization:', x); //initialization: 10

x = 100;
console.log("Reinitialization: ", x);

let y = "hello";
console.log(x,y);

const today = 'Great';
console.log(today);

today = 'Wonderful';
console.log(today);