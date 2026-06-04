const fruits = ["apple", "banana", "orange", "guava", "cherry"];

// Original Array
console.log("Original Array:", fruits);

console.log("Length:", fruits.length);

// push() - Add element at end
fruits.push("strawberry");

console.log("After push():", fruits);

console.log("Length:", fruits.length);

// unshift() - Add element at start
fruits.unshift("mango");

console.log("After unshift():", fruits);

console.log("Length:", fruits.length);

// pop() - Remove last element
fruits.pop();

console.log("After pop():", fruits);

console.log("Length:", fruits.length);

// shift() - Remove first element
fruits.shift();

console.log("After shift():", fruits);

console.log("Length:", fruits.length);

// splice() - Add elements
fruits.splice(2, 0, "watermelon", "grapes");

console.log("After splice() add:", fruits);

console.log("Length:", fruits.length);

// splice() - Remove elements
fruits.splice(5, 2);

console.log("After splice() remove:", fruits);

console.log("Length:", fruits.length);

// Index out of range
fruits.splice(8, 10);

console.log("Final Array:", fruits);

console.log("Length:", fruits.length);

// example 2
const colors = ["red", "green", "blue", "yellow", "black"];

console.log("Original Array:", colors);

colors.push("white");

console.log("After push():", colors);

colors.unshift("pink");

console.log("After unshift():", colors);

colors.pop();

console.log("After pop():", colors);

colors.shift();

console.log("After shift():", colors);

colors.splice(2, 0, "orange", "purple");

console.log("After splice() add:", colors);

colors.splice(4, 2);

console.log("After splice() remove:", colors);

console.log("Final Array:", colors);

//example 3

const cities = ["Rajkot", "Ahmedabad", "Surat", "Vadodara", "Bhavnagar"];

console.log("Original Array:", cities);

cities.push("Junagadh");

console.log("After push():", cities);

cities.unshift("Gandhinagar");

console.log("After unshift():", cities);

cities.pop();

console.log("After pop():", cities);

cities.shift();

console.log("After shift():", cities);

cities.splice(2, 0, "Morbi", "Jamnagar");

console.log("After splice() add:", cities);

cities.splice(4, 2);

console.log("After splice() remove:", cities);

console.log("Final Array:", cities);

//example 4
const animals = ["Lion", "Tiger", "Elephant", "Monkey", "Deer"];

console.log("Original Array:", animals);

animals.push("Zebra");

console.log("After push():", animals);

animals.unshift("Bear");

console.log("After unshift():", animals);

animals.pop();

console.log("After pop():", animals);

animals.shift();

console.log("After shift():", animals);

animals.splice(2, 0, "Fox", "Wolf");

console.log("After splice() add:", animals);

animals.splice(4, 2);

console.log("After splice() remove:", animals);

console.log("Final Array:", animals);

//example 5

const cars = ["BMW", "Audi", "Honda", "Toyota", "Kia"];

console.log("Original Array:", cars);

cars.push("Mercedes");

console.log("After push():", cars);

cars.unshift("Ford");

console.log("After unshift():", cars);

cars.pop();

console.log("After pop():", cars);

cars.shift();

console.log("After shift():", cars);

cars.splice(2, 0, "Tesla", "Hyundai");

console.log("After splice() add:", cars);

cars.splice(4, 2);

console.log("After splice() remove:", cars);

console.log("Final Array:", cars);

// manual method in splice and unshift

let fruits3 = ["apple", "banana", "orange"];

// Manual unshift
for (let i = fruits.length; i > 0; i--) {
    fruits[i] = fruits[i - 1];
}
fruits3[0] = "mango";

console.log(fruits);

// Manual splice add at index 2
for (let i = fruits.length; i > 2; i--) {
    fruits[i] = fruits[i - 1];
}
fruits3[2] = "grapes";

console.log(fruits);

let colors1 = ["red", "green", "blue"];

// Manual unshift
for (let i = colors.length; i > 0; i--) {
    colors[i] = colors[i - 1];
}
colors1[0] = "pink";

console.log(colors);

// Manual splice add at index 1
for (let i = colors.length; i > 1; i--) {
    colors[i] = colors[i - 1];
}
colors[1] = "yellow";

console.log(colors);


