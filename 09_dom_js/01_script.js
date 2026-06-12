document.getElementById("heading").innerText = "Mount test app";

document.getElementsByClassName("work")[0].innerHTML = "finalHTML";

let TagSelector = (document.getElementsByTagName("h2")[0].innerHTML =
  "first heading");

document.querySelector("h2").textContent = "this is changed query selector";

const newHeading = document.getElementById("style");

newHeading.style.color = "blue";

document.getElementById("color").style.color = "blue";

document.body.append("color ")



let h1 = document.createElement("h1");

h1.innerHTML = "Mount test app";

h1.style.color = "yellow";

document.body.append(h1);


// query selector all


const query3 = document.querySelectorAll("#q-1");

query3.forEach((num)=>{


    num.innerHTML="change all element";
});
