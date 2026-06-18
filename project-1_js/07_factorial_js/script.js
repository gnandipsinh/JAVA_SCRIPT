function findFactorial(){

    let num = Number(document.getElementById("number").value);

    let fact = 1;

    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }

    let result = document.getElementById("result");

    result.innerText = "Factorial = " + fact;
}