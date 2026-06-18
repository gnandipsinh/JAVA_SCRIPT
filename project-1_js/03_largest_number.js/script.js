function findLargest() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);

  let result = document.getElementById("result");

  result.style.display = "block";

  if (a >= b && a >= c) {
    result.innerHTML = "Largest Number is : " + a;
  } else if (b >= a && b >= c) {
    result.innerHTML = "Largest Number is : " + b;
  } else {
    result.innerHTML = "Largest Number is : " + c;
  }
}
