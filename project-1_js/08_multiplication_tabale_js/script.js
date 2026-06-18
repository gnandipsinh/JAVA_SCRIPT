function table(){

    let num = document.getElementById("num").value;
    let output = "";

    for(let i = 1; i <= 10; i++){

        output += num + " × " + i + " = " + (num * i) + "<br>";

    }

    document.getElementById("result").innerHTML = output;
}