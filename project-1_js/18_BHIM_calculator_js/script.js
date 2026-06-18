function calculateBMI() {

    let weight = Number(document.getElementById("weight").value);

    let height = Number(document.getElementById("height").value);

    let result = document.getElementById("result");

    result.style.display = "block";

    if(
        document.getElementById("weight").value === "" ||
        document.getElementById("height").value === ""
    ){
        result.innerHTML = "Please Enter Weight & Height";
        return;
    }

    height = height / 100;

    let bmi = (weight / (height * height)).toFixed(2);

    let status = "";

    if(bmi < 18.5){
        status = "Underweight";
    }
    else if(bmi < 25){
        status = "Normal Weight";
    }
    else if(bmi < 30){
        status = "Overweight";
    }
    else{
        status = "Obese";
    }

    result.innerHTML =
    "BMI = " + bmi + "<br><br>" +
    status;
}