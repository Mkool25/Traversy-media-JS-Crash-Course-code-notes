//Instantaite object

const person1 =  new Person("Mukul", "Dass", "12-15-2003");  //this is the format for date mm-dd-yyyy for using date object

console.log(person1);
console.log(person1.dateofB.getFullYear()); // gives only year
console.log(person1.getBirthYear());
console.log(person1.getFullName());


//PROTOTYPES 
//In JavaScript, every object has a prototype, which is like a blueprint defining its common features. The prototype is an object from which the current object inherits properties and methods. if we use this for using function then the function is not shown inside the object but in the prototype section.



Person.prototype.getBirthYear = function()
{
    return this.dateofB.getFullYear();
};

Person.prototype.getFullName = function()
{
    return `${this.firstName} ${this.LastName}`;
};

console.log(person1.getBirthYear());
console.log(person1.getFullName());
