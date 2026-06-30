class PersonDetails {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const person = new PersonDetails("gohil gnandipsinh", 20, "fsd");

console.log("person details:", person);

const studentDetails = {
    student:100,
    GRID:20,
    course:"fsd",

};

const allDetails ={...PersonDetails,...studentDetails};

console.log("All Details :",allDetails);


// Example 2

const carDetails = {
  price: 1500000,

  get carPrice() {
    return this.price;
  },
};

console.log("Car Price is ", carDetails.carPrice);


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
