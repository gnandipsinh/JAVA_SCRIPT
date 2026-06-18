function checkPrime(){

    let num = Number(document.getElementById("num").value);

    let result = document.getElementById("result");

    if(document.getElementById("num").value === ""){
        result.innerHTML = "Please Enter a Number";
        return;
    }

    let prime = true;

    if(num <= 1){
        prime = false;
    }

    for(let i = 2; i < num; i++){

        if(num % i === 0){
            prime = false;
            break;
        }
    }

    if(prime){
        result.innerHTML = "Prime Number";
      result.style.bgcolor="green"
    }
    else{
        result.innerHTML = "Not a Prime Number";
    }
}