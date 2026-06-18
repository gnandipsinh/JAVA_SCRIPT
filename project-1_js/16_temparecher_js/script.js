function toFahrenheit(){

    let temp = document.getElementById("temp").value;

    let result = document.getElementById("result");

    result.style.display = "block";

    if(temp === ""){
        result.innerHTML = "❌ Please Enter Temperature";
        return;
    }

    let c = Number(temp);

    let f = ((c * 9) / 5 + 32).toFixed(2);

    result.innerHTML =
     c + "°C = " + f + "°F";
}

function toCelsius(){

    let temp = document.getElementById("temp").value;

    let result = document.getElementById("result");

    result.style.display = "block";

    if(temp === ""){
        result.innerHTML = "Please Enter Temperature";
        return;
    }

    let f = Number(temp);

    let c = (((f - 32) * 5) / 9).toFixed(2);

    result.innerHTML =
     f + "°F = " + c + "°C";
}