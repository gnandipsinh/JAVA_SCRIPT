
// where callback really shine are in asynchronous function, where one function has to wait for another function .

// callBack is function passed as an argument to another function


// addition

// function callBack(result){
//     console.log(result);
// }

// function total(a,b,call){
//     let result = a+b;

//     callBack(result);
// }

// total(100,500,callBack);






function multiplication(result1){

    console.log(result1)
}

function multiTotal(a,b,callBack){

    let result1 = a*b;


   callBack(result1);
}

multiTotal(12,3,multiplication)