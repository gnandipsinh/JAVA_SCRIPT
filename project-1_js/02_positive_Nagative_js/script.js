function cheak(){

    let n = Number(document.getElementById("number").value);

    if(n > 0){
        document.getElementById("result").innerText = "Positive";
    }
    else if(n < 0){
        document.getElementById("result").innerText = "Negative";
    }
    else{
        document.getElementById("result").innerText = "Zero";
    }
}