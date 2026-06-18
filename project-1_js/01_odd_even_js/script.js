function checkEvenOdd(){

    let num = document.getElementById("num").value;
    let result = document.getElementById("result");

 
    if(num % 2 == 0){
        result.style.display = "block";
        result.className = "result even";
        result.innerHTML = num + " is an EVEN Number";
    }
    else{
        result.style.display = "block";
        result.className = "result odd";
        result.innerHTML = num + " is an ODD Number";
    }
}