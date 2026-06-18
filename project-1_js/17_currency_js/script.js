function showRed() {

    let result = document.getElementById("result");

    result.style.display = "block";
    result.style.background = "#ef4444";

    result.innerHTML = "STOP";
}

function showYellow() {

    let result = document.getElementById("result");

    result.style.display = "block";
    result.style.background = "#eab308";

    result.innerHTML = "WAIT";
}

function showGreen() {

    let result = document.getElementById("result");

    result.style.display = "block";
    result.style.background = "#22c55e";

    result.innerHTML = "GO";
}