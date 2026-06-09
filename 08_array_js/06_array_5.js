// 1. join method

let car = ["fortuner", "Scropio", "thar", "inova", "eartiga"];

console.log("car :", car);
console.log("join method :", car.join(""));
console.log("car join :", car.join());

// 2. flat nesting

let number1 = [10, 20, 30, 40, 50, [60, 70, [80, 90]]];

console.log("number :", number1);

console.log("use for flat :", number1.flat());
console.log("multiple number in nested :", number1.flat(2));

let number2 = [
  10,
  20,
  30,
  40,
  50,
  [60, 70, [80, 90, [100, 200, [300, [400, [500, [600, [700]]]]]]]],
];

console.log("i don't number :", number2.flat(Infinity));

//3 slice is a extract to array

let contrary1 = ["india", "japan", "london", "uk"];

console.log("slice method :", contrary1.slice(1, 3));

//4. some method t

let number3 = [1, 2, 3, 4, 5, 6, 7, 8];

const result = number3.some((A) => {
  return A > 10;
});

console.log(result);

//5 reverse method

console.log("reverse in array :", number3.reverse());

// example 2

let fruits1= ["apple", "banana", "mango"];
console.log(fruits1.join());

let arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

let fruits2 = ["apple", "banana", "mango", "orange"];
console.log(fruits2.slice(1, 3));

let num1 = [1, 2, 3, 4];
console.log(num1.some((a) => a > 3));

let fruits3 = ["apple", "banana", "mango"];
console.log(fruits3.reverse());

// example 3

let cars = ["thar", "scorpio", "fortuner"];
console.log(cars.join("-"));

let arr2 = [10, 20, [30, 40]];
console.log(arr2.flat());

let city = ["surat", "rajkot", "ahmedabad", "bhavnagar"];
console.log(city.slice(0, 2));

let num2 = [5, 10, 15];
console.log(num2.some((a) => a > 12));

let colors = ["red", "green", "blue"];
console.log(colors.reverse());

// example 4

let country = ["india", "japan", "usa"];
console.log(country.join(" | "));

let arr3 = [1, [2, [3, 4]]];
console.log(arr3.flat(2));

let fruits4 = ["apple", "banana", "mango", "orange"];
console.log(fruits4.slice(2));

let num3 = [2, 4, 6, 8];
console.log(num3.some((a) => a % 2 !== 0));

let days = ["monday", "tuesday", "wednesday"];
console.log(days.reverse());

// example 5

let games = ["cricket", "football", "hockey"];
console.log(games.join(" "));

let arr4 = [
  [10, 20],
  [30, 40],
];
console.log(arr4.flat());

let subject = ["html", "css", "js", "react"];
console.log(subject.slice(1, 4));

let age = [12, 15, 18, 20];
console.log(age.some((a) => a >= 18));

let months = ["jan", "feb", "mar"];
console.log(months.reverse());
