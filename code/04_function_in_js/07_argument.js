function sumOfNum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log("Total sum: " + sum);
}
sumOfNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3);



            
function multiply() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  console.log(result);
}

multiply(2, 3, 4);