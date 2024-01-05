// strings and strings methods

const sports = "cricket";
const team_size = 30;


// concatenation - In js it refers to combining two or more strings into a single string.

console.log("my sports name is "+sports+" and team size is "+team_size);
console.log(sports+" "+team_size);
console.log("my sports name is " ,sports);

// another way

console.log("my sports name is ",sports+" and team size is ",team_size);

// Template string - " ` " is called backticks

console.log(`my sports name is ${sports} and team size is ${team_size}`)
const intro = `My sports name is ${sports} and team size is ${team_size}`;
console.log(intro);
console.log(typeof intro);   //strings

// strings methods

const p = "Hello world";

console.log(p.length);
console.log(p.toUpperCase());
console.log(p.toLowerCase());
console.log(p.substring(0,7)); // it will exclude 7 index alphabet and give 0 to 6
console.log(p.substring(0,5).toUpperCase());

console.log(p.split(" "));  // it is used to split a string into an array of substrings based on a chosen word as a reference, and the sentence gets divided wherever that word appears.

console.log(p.split("l"));  // in the output there is a '' because There are two 'l's in succession ("l" and "l"). Between them, there is an empty string because the split happens right where one 'l' ends and the next 'l' begins.

//join() - The join() method in JavaScript is used to join all elements of an array into a single string. It creates and returns a new string by concatenating all the elements of the array, separated by a specified separator or a comma if no separator is provided. it is opposit of split(). it converts array into strings.

/* this 
is a
multiline comment */

