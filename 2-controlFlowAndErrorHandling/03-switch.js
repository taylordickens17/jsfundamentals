/* 
    - switch statements execute a block of code depending on different cases
    - switch statements often use the break or default keywords (or both together)
        - both keywords are optional
    
            - break keyword breaks out of the current condition & switch statements
            - default keyword specifies code to run if there is no case match
*/

let officeCharacter = "Pam";

switch (officeCharacter) {
  case "Michael":
    console.log("My mind is going a mile an hour");
    break;
  case "Dwight":
    console.log("Perfectenschlag");
    break;
  case "Jim":
    console.log("Bears. Beets. Battlestar Galatica");
    break;
  default:
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`); //need back ticks
}

let menu = "soup";
// (menu) = the parameters/is the variable
switch (menu) {
  case "pie":
    console.log("Pie, pie, me oh my.");
    break;
  case "cake":
    console.log("Cake is great!");
    break;
  case "icecream":
    console.log("I scream for icecream!");
    break;
  default:
    console.log("Not on the menu!");
}
