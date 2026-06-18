function calculate() {

    let amount = Number(document.getElementById("amount").value);

    let result = document.getElementById("result");

    result.style.display = "block";

    if(document.getElementById("amount").value === ""){
        result.innerHTML = "Please Enter Amount";
        return;
    }

    let discount = 0;

    if(amount >= 5000){
        discount = amount * 20 / 100;
    }
    else if(amount >= 2000){
        discount = amount * 10 / 100;
    }

    let finalAmount = amount - discount;

    result.innerHTML =
    "Discount = ₹" + discount + "<br><br>" +
    "Final Amount = ₹" + finalAmount;
}