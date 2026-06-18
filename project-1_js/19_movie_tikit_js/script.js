function calculatePrice() {

    let age = Number(document.getElementById("age").value);

    let result = document.getElementById("result");

    result.style.display = "block";

    if(document.getElementById("age").value === ""){
        result.innerHTML = "Please Enter Age";
        return;
    }

    let price;

    if(age < 12){
        price = 100;
    }
    else if(age < 60){
        price = 200;
    }
    else{
        price = 150;
    }

    result.innerHTML =
    "Ticket Price = ₹" + price;
}