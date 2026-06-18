function check(){

    let num = document.getElementById("num").value;

    let reverse = "";

    for(let i = num.length - 1; i >= 0; i--){

        reverse += num[i];

    }

    let result = document.getElementById("result");

    result.style.display = "block";

    if(num === reverse){

        result.innerHTML =
        "Palindrome Number";

    }
    else{

        result.innerHTML =
        "Not a Palindrome Number";

    }
}