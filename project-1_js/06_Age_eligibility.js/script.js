function checkAge(){

    let age = Number(document.getElementById("age").value);

    let result = document.getElementById("result");

    result.style.display = "block";

    if(age >= 60){

        result.style.background = "#22c55e";

        result.innerHTML =
        "👴 Senior Citizen <br> ✅ Eligible for Voting & Driving";
    }
    else if(age >= 18){

        result.style.background = "#3b82f6";

        result.innerHTML =
        "Eligible for Voting & Driving";
    }
    else{

        result.style.background = "#ef4444";

        result.innerHTML =
        "Not Eligible for Voting & Driving";
    }
}