let text="Gohil Gnandipsinh";

// match

console.log("finding match string:",text.match("nh"));

// not finding match to return null 

console.log("not finding match string",text.match("jk"));

// repeat 

console.log("repeating text:",text.repeat(2));

// replace 

console.log("replacing word :",text.replace("Gnandipsinh","Abhijitsinh"));

// replace all

console.log("replace all word",text.replaceAll("G","g"));


// search

console.log("search keyword :",text.search("p"));

// indexOf 

console.log("index of:",text.indexOf("G","6"));

// slice 


console.log("text example", text);

console.log("slice OP :", text.slice(2));

console.log("slice OP :", text.slice(2, 5));

console.log("slice OP", text.slice(3, 8));

console.log("slice OP :", text.slice(-1)); 



// Example 2

let language = "JavaScript Coding";

// match
console.log("finding match string:", language.match("Script"));

// not finding match
console.log("not finding match string:", language.match("Python"));

// repeat
console.log("repeating text:", language.repeat(2));

// replace
console.log("replacing word:", language.replace("Coding", "Programming"));

// replace all
console.log("replace all word:", language.replaceAll("a", "A"));

// search
console.log("search keyword:", language.search("C"));

// indexOf
console.log("index of:", language.indexOf("S"));

// slice
console.log("text example:", language);

console.log("slice OP:", language.slice(1));

console.log("slice OP:", language.slice(1, 6));

console.log("slice OP:", language.slice(4, 10));

console.log("slice OP:", language.slice(-5));




// Example 3

let city = "Bhavnagar Gujarat";

// match
console.log("finding match string:", city.match("Guj"));

// not finding match
console.log("not finding match string:", city.match("abc"));

// repeat
console.log("repeating text:", city.repeat(2));

// replace
console.log("replacing word:", city.replace("Gujarat", "India"));

// replace all
console.log("replace all word:", city.replaceAll("a", "@"));

// search
console.log("search keyword:", city.search("n"));

// indexOf
console.log("index of:", city.indexOf("G"));

// slice
console.log("text example:", city);

console.log("slice OP:", city.slice(2));

console.log("slice OP:", city.slice(2, 7));

console.log("slice OP:", city.slice(5, 12));

console.log("slice OP:", city.slice(-3));