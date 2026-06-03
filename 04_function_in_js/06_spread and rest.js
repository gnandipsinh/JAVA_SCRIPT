let numArray = [1, 2, 3, 4, 5, 6, 7];
console.log(...numArray);

function fruitsName(fruits) {
  console.log("Available fruits are:", ...fruits);
}

let availableFruits = ["apple", "banana", "orange", "cherry"];
fruitsName(availableFruits);




let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2);



function total(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  console.log(sum);
}

total(10, 20, 30);