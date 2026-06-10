


// JavaScript find() & findIndex() Method

const mobilePrice = [12000, 15000, 18000, 25000, 35000];

let expensiveMobile = mobilePrice.find((value) => value > 20000);

console.log(
  "finding mobile price greater than 20000 :",
  expensiveMobile
);

let expensiveMobileIndex = mobilePrice.findIndex(
  (value) => value > 20000
);

console.log(
  "finding index of mobile price greater than 20000 :",
  expensiveMobileIndex
);


// JavaScript slice() & splice() Method

const mobiles = [
  "Samsung",
  "Vivo",
  "Oppo",
  "Realme",
  "iPhone"
];

console.log(
  "mobile array op with slice :",
  mobiles.slice(1, 4)
);

console.log("mobile array before :", mobiles);

mobiles.splice(2, 0, "OnePlus");

console.log("mobile array after :", mobiles);


// JavaScript some() & every() Method

let ratings = [4, 5, 3, 4, 5];

console.log(
  "rating greater than 4 available ?",
  ratings.some((value) => value > 4)
);

console.log(
  "every rating greater than 2 ?",
  ratings.every((value) => value > 2)
);



// Example 4 - Books


// JavaScript find() & findIndex() Method

const pages = [100, 150, 200, 250, 300];

let pageData = pages.find((value) => value > 180);

console.log(
  "finding pages greater than 180 :",
  pageData
);

let pageIndex = pages.findIndex((value) => value > 180);

console.log(
  "finding index of pages greater than 180 :",
  pageIndex
);


// JavaScript slice() & splice() Method

const books = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "PHP"
];

console.log(
  "books array op with slice :",
  books.slice(1, 4)
);

console.log("books array before :", books);

books.splice(2, 0, "React");

console.log("books array after :", books);


// JavaScript some() & every() Method

let bookPrice = [250, 300, 450, 500, 600];

console.log(
  "book price greater than 500 available ?",
  bookPrice.some((value) => value > 500)
);

console.log(
  "every book price greater than 200 ?",
  bookPrice.every((value) => value > 200)
);



// Example 5 - Employees


// JavaScript find() & findIndex() Method

const experience = [1, 2, 3, 5, 8, 10];

let expData = experience.find((value) => value > 4);

console.log(
  "finding experience greater than 4 years :",
  expData
);

let expIndex = experience.findIndex(
  (value) => value > 4
);

console.log(
  "finding index of experience greater than 4 years :",
  expIndex
);


// JavaScript slice() & splice() Method

const employees = [
  "Rahul",
  "Amit",
  "Karan",
  "Neha",
  "Priya"
];

console.log(
  "employee array op with slice :",
  employees.slice(1, 4)
);

console.log("employee array before :", employees);

employees.splice(3, 0, "Riya");

console.log("employee array after :", employees);


// JavaScript some() & every() Method

let employeeAge = [22, 25, 28, 30, 35];

console.log(
  "age greater than 30 available ?",
  employeeAge.some((value) => value > 30)
);

console.log(
  "every age greater than 20 ?",
  employeeAge.every((value) => value > 20)
);