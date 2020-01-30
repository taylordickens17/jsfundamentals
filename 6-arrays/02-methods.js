let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hot Dog"];
console.log("Original Array:", food);

food.push("Pizza");
console.log("Push:", food); // appends Pizza to the array.

food.splice(1, 1, "Bananas"); //position, how many to delete, what to add in it's place
console.log("Splice:", food);

food.splice(2, 0, "Sweet Potato Pie"); // position, how many to delet which is nothing, what to add in it's place that will end up in the second position.
console.log("Splice But Edited:", food);

food.pop(); //simply removes the last item of an array
console.log("Pop:", food);

food.shift(); //remvoes the first element in a n array
console.log("Shift", food);

food.unshift("Popcorn", "Steak"); //unshift adds 1 or more items to the beginning of the array
console.log("Unshift:", food);

console.log("Original Array:", food);
/*

*/
