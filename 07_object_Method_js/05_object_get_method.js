const student = {
  firstName: "gohil gnandipsinh",
};

const studentDetails = {
  name: "gohil",
  age: 18,

  get studentAge() {
    return this.age;
  },
};
console.log("Student Details ", student);

console.log("Student age is ", studentDetails.studentAge);


// Example 2

const carDetails = {
  model: "",

  set carModel(model) {
    this.model = model;
  },
};

carDetails.carModel = "Fortuner";

console.log("Car Model ", carDetails.model);

// Example 3

const mobileDetails = {
  battery: 5000,

  get mobileBattery() {
    return this.battery;
  },
};

console.log("Mobile Battery is ", mobileDetails.mobileBattery);

// Example 4

const employeeDetails = {
  salary: 35000,

  get employeeSalary() {
    return this.salary;
  },
};

console.log("Employee Salary is ", employeeDetails.employeeSalary);


// Example 5

const bookDetails = {
  pages: 250,

  get totalPages() {
    return this.pages;
  },
};

console.log("Book Pages are ", bookDetails.totalPages);



