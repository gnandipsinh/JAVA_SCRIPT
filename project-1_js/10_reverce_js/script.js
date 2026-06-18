function reverseNum(){

    let num = document.getElementById("num").value;

    let reverse = "";

    for(let i = num.length - 1; i >= 0; i--){
        reverse += num[i];
    }

    let result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = "Reverse = " + reverse;
}