/*
    SCOPE
        -scope is how a computer keeps track of all variables in a program
        -{} are a local scope, only accessible in the function it is in
        -global scope is accessible to the entire program
        -scopes can be nested, where there's an outer scope (global), and an intter 
        scope (local)
*/

let x = 12; //globally scoped varibale

function scope() {
  let x = 33; //locally scoped variable
  console.log(x);
}

scope();
console.log(x);

//

let y = 12;

function scope() {
  y = 33;
  console.log(y);
}

scope();
console.log(y);

/*
    - const is constant that cannot be re-expressed or reinitialized as another value
    - var is scoped to the nearest function block
    - let is scoped to the nearest enclosing block
*/

var x = 12;

function varTest() {
  var x = 33;

  if (1 == 1) {
    var x = 45;
    console.log(x);
  }
  console.log(x);
}

varTest();
console.log(x);

//

let x = 12;

function letTest() {
  var x = 33;

  if (true) {
    let x = 45;
    console.log(x);
  }
  console.log(x);
}

letTest();
console.log(x);

//

function constTest() {
  const scope = 1;
  const scope = 3; //would get an error

  if (true) {
    const scope = 2; //would change the variable
    console.log(scope); // = 2
  }
  console.log(scope); // = 3
}
constTest();
