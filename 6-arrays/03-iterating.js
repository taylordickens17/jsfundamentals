/*
    - the forEach() method executes a provided function once for each element is an array
    -the forEach() method does the same thing as a for Loop or for of Loop - both iterate over properties in an array
*/
let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hot Dog"];

// for (let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

food.forEach((foodItem, index, array) => console.log(foodItem, index, array));

food.forEach((individualFoodItem, index) => {
  console.log(individualFoodItem, index);
});

food.forEach(function(foodItem, index) {
  console.log(index);
});

//
let movie = ["Lord of The Rings", "Star Wars", "Breakfast at Tiffanies"];

movie.forEach(movies => {
  console.log(movies);
});

movie.push("Troy");
console.log(movie);

movie.splice(2, 1, "Circe");
console.log(movie);
//
