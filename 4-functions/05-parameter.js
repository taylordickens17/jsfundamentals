//
function hi(name) {
  //   let name = "Taylor";
  console.log(`Hello, ${name}`);
}

hi("Taylor");

function taylor(ticket) {
  console.log(`I exchanged my ticket for a ${ticket}`); //this is a metaphor for a parameter. this is a ticket that you 'exchange' for a sandwich.
}

taylor("sandwich");

//

function counter(number, string) {
  for (number; number <= 10; number++) {
    console.log(number);
  }

  console.log(string);
}

counter(0, "hello");

function name(first, last) {
  let fullName = first + " " + last;
  console.log(`Hello! My name is ${fullName}.`);
}

name("Taylor", "Dickens");
