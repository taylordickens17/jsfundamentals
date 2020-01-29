let hey = function hi() {
  console.log("hello");
};
// function declarations DO get hoisted, but function expression will not be hoisted. The variable is what is being stored away.
console.log(hey);
