//ARRAYS - are the variables that holds multiple values. In js there can be different data types elements within a same array, lots of different languages do not allow this

// 1st method
const numbers = new Array(1,2,3,5,4,)  //this method is not used much
//Array is a constructor along with new here not a variable name. a constructor is a special function that is used to create and initialize objects.
console.log(numbers);

const basket = new String("apple"); //here string is a part of constructor
console.log(basket);


// 2nd method
const fruits = ["apple","mango","grapes",55,true];   //this method is mostly used
console.log(fruits);

console.log(fruits[1]);

fruits[5]="orange";
console.log(fruits);

fruits.push("pineapple");  
console.log(fruits);                     // adds element in last
console.log(fruits.push("pineapple"));   // this will add pineapple in the end but after running this statement it will just give no. of elements in array as the output

fruits.unshift("peach");  
console.log(fruits);                        // adds element in the start
console.log(fruits.unshift("pineapple"));   // this will add pineapple in the start but after running this statement it will just give no. of elements in array as the output

fruits.pop();            
console.log(fruits);        // remove element from last
console.log(fruits.pop());  // this will give removed element from the last as the output


console.log(fruits.length); // no. of elements in array

console.log(Array.isArray("fruits"));  //it checks whether the given element is a array or not
console.log(Array.isArray(fruits));  

console.log(fruits.indexOf("orange")); //tell index of given element in array






