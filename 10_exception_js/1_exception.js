
// const atmPin  = 2122;


// function Pin(pin) {
//     if (pin === atmPin) {
//         console.log("Correct ATM PIN");
//     } else {
//         throw new Error("Invalid ATM PIN");
//     }

//     console.log("this is a correct answer")
// }

// Pin(2526);

// const atmPin = 1224;

function Pin(pin) {
    if (pin === atmPin) {
        console.log("Correct ATM PIN");
    } else {
        throw new Error("Invalid ATM PIN");
    }

    console.log("this is a correct answer");
}

try 
{
    Pin(1245);
} 
catch (error)
{
    console.log("Error:", error.message);
}