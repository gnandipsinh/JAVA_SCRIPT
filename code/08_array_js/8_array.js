
// Example 1 - Students


// indexOf()

const students = ["Rahul", "Amit", "Karan", "Neha", "Priya"];

console.log(
  "Index of Neha is :",
  students.indexOf("Neha")
);

// includes()

console.log(
  "Is Priya available ? :",
  students.includes("Priya")
);

console.log(
  "Is Riya available ? :",
  students.includes("Riya")
);

// sort()

console.log(
  "Sorted student names :",
  students.sort()
);


// Example 2 - Cities


// indexOf()

const cities = [
  "Ahmedabad",
  "Surat",
  "Rajkot",
  "Vadodara",
  "Bhavnagar"
];

console.log(
  "Index of Rajkot is :",
  cities.indexOf("Rajkot")
);

// includes()

console.log(
  "Is Surat available ? :",
  cities.includes("Surat")
);

console.log(
  "Is Jamnagar available ? :",
  cities.includes("Jamnagar")
);

// sort()

console.log(
  "Sorted city names :",
  cities.sort()
);

// Example 3 - Subjects


// indexOf()

const subjects = [
  "Maths",
  "Science",
  "English",
  "History",
  "Computer"
];

console.log(
  "Index of Computer is :",
  subjects.indexOf("Computer")
);

// includes()

console.log(
  "Is English available ? :",
  subjects.includes("English")
);

console.log(
  "Is Gujarati available ? :",
  subjects.includes("Gujarati")
);

// sort()

console.log(
  "Sorted subjects :",
  subjects.sort()
);



// Example 4 - Marks


let marks = [78, 45, 90, 67, 55, 88];

// Ascending Order

console.log(
  "Marks in ascending order :",
  marks.sort((a, b) => a - b)
);

// Descending Order

console.log(
  "Marks in descending order :",
  marks.sort((a, b) => b - a)
);


// Example 5 - Employees

// indexOf()

const employees = [
  "Ramesh",
  "Suresh",
  "Mahesh",
  "Jay",
  "Vijay"
];

console.log(
  "Index of Jay is :",
  employees.indexOf("Jay")
);

// includes()

console.log(
  "Is Vijay available ? :",
  employees.includes("Vijay")
);

console.log(
  "Is Arjun available ? :",
  employees.includes("Arjun")
);

// sort()

console.log(
  "Sorted employee names :",
  employees.sort()
);