function normalFunction(){
    console.log("normal function")
}
normalFunction();


const arrowFunction = () => {
  console.log("arrow function");
};
arrowFunction();




const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));



const square = num => num * num;

console.log(square(5));