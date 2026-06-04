let fruits = ["apple", "banana", "strawberry", "cherry"];

console.log("fruits name", fruits);

// accessing array element in index position

console.log("favorite food is", fruits[2]);

// accessing array element in first position

console.log("first element in array", fruits[0]);

// accessing last array element in array

console.log("last element in array", fruits[3]);

//modify array element

console.log("fruits array second element before changing is :", fruits[1]);

fruits[1] = "guava";

console.log(
  "now we we have changed second element in fruits array :",
  fruits[1],
);

//add element

let fruits3 = ["banana", "apple", "mango"];

fruits3.push("orange");
console.log("add array :", fruits3);

fruits3.push("cherry");
console.log("add value :", fruits3);

fruits3.push("water melon");
console.log("add value :", fruits3);

fruits3.push("papaya");
console.log("add value :", fruits3);

fruits3.push("pear");
console.log("add value :", fruits3);

console.log("fruits after guava added", fruits);

// example 2

let colors = ["red", "green", "blue", "yellow"];

console.log("colors", colors);

console.log("first color", colors[0]);

console.log("last color", colors[3]);

colors[2] = "black";

console.log("updated colors", colors);

// add element

colors.push("white");
console.log("after adding white", colors);

colors.push("pink");
console.log("after adding pink", colors);

// example 3

let cars = ["ford", "bmw", "audi", "kia"];

console.log("cars", cars);

console.log("favorite car", cars[1]);

cars[0] = "toyota";

console.log("updated cars", cars);

// add element

cars.push("honda");
console.log("after adding honda", cars);

cars.push("hyundai");
console.log("after adding hyundai", cars);

// example 4

let cities = ["Bhavnagar", "Rajkot", "Surat", "Ahmedabad"];

console.log("cities", cities);

console.log("first city", cities[0]);

console.log("last city", cities[3]);

cities[2] = "Vadodara";

console.log("updated cities", cities);

// add element

cities.push("Junagadh");
console.log("after adding Junagadh", cities);

cities.push("Jamnagar");
console.log("after adding Jamnagar", cities);
