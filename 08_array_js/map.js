
// JavaScript map() Method

let cars = ["nexon", "creta", "swift", "thar"];

console.log("cars : ", cars);

let upperCaseCars = cars.map((car) => car.toUpperCase());

console.log("uppercase cars : ", upperCaseCars);


// ex 1

// JavaScript map() Method

let students = ["parth", "jay", "meet", "karan"];

console.log("students : ", students);

let formattedStudents = students.map(
  (student) =>
    student.charAt(0).toUpperCase() + student.slice(1)
);

console.log("formatted students : ", formattedStudents);


// ex 2

// JavaScript map() Method

let marks = [35, 45, 55, 65, 75];

console.log("marks : ", marks);

let updatedMarks = marks.map((mark) => mark + 5);

console.log("marks after adding 5 : ", updatedMarks);


// ex 3

// JavaScript map() Method

let salary = [10000, 15000, 20000, 25000];

console.log("salary : ", salary);

let increasedSalary = salary.map(
  (amount) => amount + 2000
);

console.log("salary after increment : ", increasedSalary);


// ex 4

// JavaScript map() Method

let mobilePrices = [12000, 15000, 18000, 25000];

console.log("mobile prices : ", mobilePrices);

let discountedPrices = mobilePrices.map(
  (price) => price - 1000
);

console.log(
  "mobile prices after discount : ",
  discountedPrices
);


// ex 5

// JavaScript map() Method

let cities = ["ahmedabad", "surat", "rajkot", "bhavnagar"];

console.log("cities : ", cities);

let formattedCities = cities.map(
  (city) => city.charAt(0).toUpperCase() + city.slice(1)
);

console.log("formatted cities : ", formattedCities);