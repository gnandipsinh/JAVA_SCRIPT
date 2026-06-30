

// JavaScript filter() Method

const marks = [35, 45, 55, 25, 75, 80, 30];

console.log(marks);

const passMarks = marks.filter((mark) => mark >= 35);

console.log("passing marks students : ", passMarks);



// Example 2

// JavaScript filter() Method

const mobilePrice = [
  12000,
  15000,
  25000,
  35000,
  10000,
  45000
];

console.log(mobilePrice);

const expensiveMobile = mobilePrice.filter(
  (price) => price >= 20000
);

console.log(
  "mobile price greater than 20000 : ",
  expensiveMobile
);



// Example 3

// JavaScript filter() Method

const students = [
  "Parth",
  "Jay",
  "Meet",
  "Karan",
  "Yash",
  "Raj"
];

console.log(students);

const longNames = students.filter(
  (student) => student.length > 4
);

console.log(
  "student names greater than 4 letters : ",
  longNames
);



// Example 4


// JavaScript filter() Method

const productPrice = [
  250,
  500,
  1200,
  1800,
  300,
  2200
];

console.log(productPrice);

const costlyProducts = productPrice.filter(
  (price) => price > 1000
);

console.log(
  "products price greater than 1000 : ",
  costlyProducts
);



// Example 5


// JavaScript filter() Method

const ages = [12, 15, 18, 21, 25, 30, 14];

console.log(ages);

const adultAge = ages.filter(
  (age) => age >= 18
);

console.log(
  "adult age persons : ",
  adultAge
);