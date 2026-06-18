function findSum(){

    let num = document.getElementById("num").value;

    let sum = 0;

    for(let i = 0; i < num.length; i++){

        sum += Number(num[i]);

    }

    document.getElementById("result").innerText =
    "Sum of Digits = " + sum;
}