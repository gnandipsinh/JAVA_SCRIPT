function withdraw() {

    let amount = Number(document.getElementById("amount").value);

    let result = document.getElementById("result");

    result.style.display = "block";

    if(amount <= 0){
        result.innerHTML = "Enter Valid Amount";
        return;
    }

    let note500 = 0;
    let note200 = 0;
    let note100 = 0;

    while(amount >= 500){
        note500++;
        amount -= 500;
    }

    while(amount >= 200){
        note200++;
        amount -= 200;
    }

    while(amount >= 100){
        note100++;
        amount -= 100;
    }

    result.innerHTML =
        "500 Notes = " + note500 + "<br><br>" +
        "200 Notes = " + note200 + "<br><br>" +
        "100 Notes = " + note100 + "<br><br>" +
        "Remaining = " + amount;
}