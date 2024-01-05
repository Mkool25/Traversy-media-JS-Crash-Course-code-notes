//FUNCTIONS - In JavaScript, a function is a reusable block of code that performs a specific task or set of tasks. It allows you to define a set of instructions and execute them by calling the function.

function addnums(num1, num2)
{
    console.log(num1 + num2);
};

addnums();   // When you call addnums() without any arguments, both num1 and num2 inside the function will be undefined. In JavaScript, attempting to add undefined to undefined results in the special value NaN (Not a Number). The console.log statement will output NaN.

addnums(5,6);


function minusnum(num1 = 3, num2 = 7)
{
    console.log(num1 - num2);
};

minusnum
minusnum(10, 54) // this will overwrite the default value.
console.log(minusnum);



function reminusnum(num1, num2)
{
    return(num1 -  num2); // return num1 -  num2;   both will work
};

console.log(reminusnum(10,7));



// In JavaScript, return is used in functions to give back a result. When a function reaches a return statement, it stops, and the specified value is sent back to where the function was called. It allows you to use the function's result in your code.

//minusnum Function: Use when you want to directly print the result of a subtraction to the console. Convenient for quick output or debugging. Doesn't provide a value that can be used elsewhere.

// reminusnum Function: Use when you need the result of the subtraction for further calculations or assignments Returns a value that can be used in expressions or stored in a variable.





// Arrow functions - In JavaScript, an arrow function is a concise way to write functions. It has a shorter syntax compared to traditional functions


/* syntax -

Traditional function expression
var add = function(x, y) 
{
    return x + y;
};

Arrow function equivalent
var addArrow = (x, y) => x + y;

*/


const numsplus = (num1, num2) => num1 +num2;
console.log(numsplus(5, 6));



//CONSTRUCTOR FUNCTIONS 

// In JavaScript, a constructor function is a special type of function used for creating and initializing objects. 

//object literals are a quick way to define objects directly in code, while objects created from constructors provide a more structured approach for creating multiple instances with shared properties and methods.

//In JavaScript, there is no strict rule or requirement that the identifier (such as the variable name) Person must start with a capital letter. However, it is a common convention to use an uppercase initial letter for constructor functions and classes to distinguish them from regular functions or variables.


/* SYNTAX
function MyConstructor(parameter1, parameter2) {
    // Constructor logic
    this.property1 = parameter1;
    this.property2 = parameter2;
    
    // Additional properties or methods can be added
    this.method = function() {
        // Method logic
    };
}

// Creating an instance using the constructor function
var myInstance = new MyConstructor(value1, value2);
*/


function Person (fname, lname, dob)
{
    this.firstName = fname;
    this.lastName = lname;
    this.dateofB = new Date(dob);  //In JavaScript, the Date object is used for working with dates and times. It provides methods for creating, formatting, and manipulating dates. 
    this.getBirthYear = function()
    {
        return this.dateofB.getFullYear();
    };
    this.getFullName = function()
    {
        return `${this.firstName} ${this.lastName}`;
    };
};
