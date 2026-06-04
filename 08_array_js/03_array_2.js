// length calculation  in array

const fruits = ["apple", "banana", "cheery", "mango", "graphs", "watermelon"];

console.log("fruits length:", fruits.length);

// increase and decrease array length

console.log("fruits element and their length before:", fruits.length, fruits);

// increase length of array

fruits.length = 10;

console.log("length after increase:", fruits.length, fruits);

//decrease length of array

fruits.length = 4;

console.log("length after decrease:", fruits.length, fruits);

// using manual methods


const fruits1=["apple","banana","mango","guava","kiwi"];

const NewFruits=[];

let i=0;
for(const fruit of fruits)
{
    NewFruits[i]=fruit;

    i++;
}

NewFruits[i]="orange";

console.log(NewFruits);







