//conditionals


const c=10;
if (c==10)
{console.log("c is 10");};

const e="10";
if (e==10)
{console.log("e is 10");};

const r=10;
if (r===10)
{console.log("r is 10");}

const o="10";
if (o===10)
{console.log("o is 10");}
else
{console.log("o is not 10")}


// "==" just only checks the value not the datatype thats why it printed "e is 10" but "===" also checks the datatype thats why it has not printed "o is 10"

const m=50;
if (m===50)
{console.log("m is 50");}
else if (m>50)
{console.log("m is greater than 50");}
else 
{console.log("m is not 50");}


// in Visual Studio Code, a popular code editor, user settings are typically global preferences that apply to the editor overall, while workspace settings are specific to the currently opened project. User settings are stored in a user's profile, and workspace settings are stored in a .vscode directory within the project.




// || =  or in js
// && = and in js

const papu = 6;
const chapu = 8;
if (papu > 5 || chapu > 10)
{
    console.log("papu is greater than 5 or chapu is greater than 10");
};


const bike =  9;
const boat =  5;
if (bike > 6 && boat > 7)
{
    console.log("bike is greater than 6 and boat is greater than 7");
}
else 
{
    console.log("not greater");
}


// ternary operator
// syntax  = condition ? expressionIfTrue : expressionIfFalse;


const bus =  6;
const color = bus > 5 ? "red" : "blue" ; 
console.log(color);


//SWITCH
//In JavaScript, the switch statement is a control flow structure that allows you to evaluate an expression against multiple possible case values. It provides a way to execute different code blocks based on the value of an expression.

//both if-else and switch have their places in programming. Use if-else when dealing with a variety of complex conditions, and use switch when comparing a single variable against distinct values. 


switch (color)
{
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not blue or red")
        break;
}
    