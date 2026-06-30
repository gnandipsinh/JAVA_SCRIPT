let numberArray=[1,2,3,4,5,6,7]

const numberArray1 = numberArray.reduce((a,c)=>(a+=c))

console.log("number array",numberArray);



let num=[10,20,30,40,50]

let totalNumber=num.reduce((a,c)=>(a+=c),0)

console.log(totalNumber);

let molProduct = [

    {
        name:"soda",
        price : 80,  
        quality:10,
    },
    {
        name:"faceWash",
        price:200,
        quality:5,
    },

    {
        name:"food",
        price:1000,
        quality:10
    }
]

const totalPrice = molProduct.reduce((a,c)=>a+c.price*c.quality,0);

console.log(totalPrice);

// Example 2

let numbers = [5, 10, 15, 20];

let sum = numbers.reduce((a, c) => a + c, 0);

// Example 3

console.log("Sum =", sum);

let num = [12, 45, 8, 99, 23];

let maxNum = num.reduce((a, c) => (c > a ? c : a));

console.log("Maximum Number =", maxNum);

// Example 4

let arr = [25, 10, 50, 5, 40];

let minNum = arr.reduce((a, c) => (c < a ? c : a));

console.log("Minimum Number =", minNum);

// Example 5

let values = [2, 3, 4, 5];

let product = values.reduce((a, c) => a * c, 1);

console.log("Product =", product);
