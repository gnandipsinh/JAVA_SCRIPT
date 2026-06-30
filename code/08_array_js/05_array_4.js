
//iterating array

const fruits=["apple","banana","mango","cherry","jabun"];


// for loop
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

// for of loop

for(let i of fruits)
{
    console.log("using for of loop",i);
}

// for each loop

fruits.forEach((fruits,index)=>{
    console.log("using each loop",index,fruits);
});



//concat

const vegetables=["potato","tomato","ginger","chilli"];

let ShopItems=fruits.concat(vegetables);

console.log("all available shop item:",ShopItems);

// conversion array to string

console.log("converting an array to string",fruits.toString());

// join Array

const car = [
  "baleno",
  "fronx",
  "vitara",
  "eartiga",
  "swift",
  "swift dizair",
  "breeza",
  "scropio",
  "creta",

];


console.log("return new string with each car element ", car.join(" "));

//example 2




// Iterating Array

const students = ["Rahul", "Amit", "Priya", "Neha", "Karan"];

// for loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// for...of loop
for (let student of students) {
  console.log("Using for...of:", student);
}

// forEach loop
students.forEach((student, index) => {
  console.log("Using forEach:", index, student);
});

// concat
const newStudents = ["gnandipisnh", "parthrajsinh"];
const allStudents = students.concat(newStudents);

console.log("All Students:", allStudents);

// array to string
console.log("Array to String:", students.toString());

// join
console.log("Joined Students:", students.join(" | "));


//example 3

const cities = ["Ahmedabad", "Surat", "Rajkot", "Bhavnagar"];

// for loop
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// for...of
for (let city of cities) {
  console.log("City:", city);
}

// forEach
cities.forEach((city, index) => {
  console.log(index, city);
});

// concat
const moreCities = ["Vadodara", "Jamnagar"];
console.log(cities.concat(moreCities));

// toString
console.log(cities.toString());

// join
console.log(cities.join(" - "));


//example 4

const mobiles = ["Samsung", "Apple", "Vivo", "Oppo"];

// for loop
for (let i = 0; i < mobiles.length; i++) {
  console.log(mobiles[i]);
}

// for...of
for (let mobile of mobiles) {
  console.log("Brand:", mobile);
}

// forEach
mobiles.forEach((mobile, index) => {
  console.log(index, mobile);
});

// concat
const moreBrands = ["Realme", "OnePlus"];
console.log(mobiles.concat(moreBrands));

// toString
console.log(mobiles.toString());

// join
console.log(mobiles.join(", "));

//example 5

const subjects = ["Math", "Science", "English", "Computer"];

// for loop
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

// for...of
for (let subject of subjects) {
  console.log(subject);
}

// forEach
subjects.forEach((subject, index) => {
  console.log(index, subject);
});

// concat
const extraSubjects = ["History", "Geography"];
console.log(subjects.concat(extraSubjects));

// toString
console.log(subjects.toString());

// join
console.log(subjects.join(" / "));