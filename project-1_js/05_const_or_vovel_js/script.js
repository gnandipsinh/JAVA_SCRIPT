function checkVowel(){

    let ch = document.getElementById("char").value.toLowerCase();

    let result = document.getElementById("result");

    result.style.display = "block";

    if(
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ){
        result.style.background = "#22c55e";

        result.innerHTML = + ch.toUpperCase() + " is a Vowel";
    }
    else{
        result.style.background = "#ef4444";

        result.innerHTML = + ch.toUpperCase() + " is a Consonant";
    }
}