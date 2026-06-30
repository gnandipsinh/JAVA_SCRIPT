let text ="hello gohil gnandipsisnh";

//split

console.log("split string into array with space added",text.split(" "));

console.log("split string into array without space",text.split(""));

console.log("split string with l",text.split("l"));

//substring

console.log("text", text);

console.log("substring example", text.substring(2));

console.log("substring op =>", text.substring(1, 4));

console.log("substring op =>", text.substring(-1)); 

console.log("lowercase op =>", text.toLowerCase());

console.log("upper case op =>", text.toUpperCase());




let trimTextExample1 = "            hello               ";

console.log("length op text for trim =>", trimTextExample1.length);

console.log(
  "whitespace removed and then after length of string =>",
  trimTextExample1.trim().length
);

console.log(
  "removing whitespaces from starting part only and then after length of string =>",
  trimTextExample1.trimStart().length
);

console.log(
  "removing whitespaces from ending part only and then after length of string =>",
  trimTextExample1.trimEnd().length
);


// Example 2 => split and substring

let text1 = "welcome gohil javascript";

// split

console.log("split string into array with space added", text1.split(" "));

console.log("split string into array without space", text1.split(""));

console.log("split string with o", text1.split("o"));

// substring

console.log("text", text1);

console.log("substring example", text1.substring(3));

console.log("substring op =>", text1.substring(2, 7));

console.log("substring op =>", text1.substring(-2));

// lowercase and uppercase

console.log("lowercase op =>", text1.toLowerCase());

console.log("upper case op =>", text1.toUpperCase());




// trim examples

let trimTextExample2 = "          javascript          ";

console.log("length op text for trim =>", trimTextExample2.length);

console.log(
  "whitespace removed and then after length of string =>",
  trimTextExample2.trim().length
);

console.log(
  "removing whitespaces from starting part only and then after length of string =>",
  trimTextExample2.trimStart().length
);

console.log(
  "removing whitespaces from ending part only and then after length of string =>",
  trimTextExample2.trimEnd().length
);



// Example 3 => split and substring

let text2 = "frontend backend fullstack";

// split

console.log("split string into array with space added", text2.split(" "));

console.log("split string into array without space", text2.split(""));

console.log("split string with t", text2.split("t"));

// substring

console.log("text", text2);

console.log("substring example", text2.substring(5));

console.log("substring op =>", text2.substring(1, 8));

console.log("substring op =>", text2.substring(-5));

// lowercase and uppercase

console.log("lowercase op =>", text2.toLowerCase());

console.log("upper case op =>", text2.toUpperCase());




// trim examples

let trimTextExample3 = "             hello world            ";

console.log("length op text for trim =>", trimTextExample3.length);

console.log(
  "whitespace removed and then after length of string =>",
  trimTextExample3.trim().length
);

console.log(
  "removing whitespaces from starting part only and then after length of string =>",
  trimTextExample3.trimStart().length
);

console.log(
  "removing whitespaces from ending part only and then after length of string =>",
  trimTextExample3.trimEnd().length
);