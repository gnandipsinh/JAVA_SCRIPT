function checkLeapYear(){

    let year = Number(document.getElementById("year").value);

    let result = document.getElementById("result");

    result.style.display = "block";

    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){

        result.style.background = "#22c55e";

        result.innerHTML = + year + " is a Leap Year";
    }
    else{

        result.style.background = "#ef4444";

        result.innerHTML =+ year + " is Not a Leap Year";
    }
}