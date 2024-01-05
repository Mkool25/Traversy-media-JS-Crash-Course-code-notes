//CLASSES
//ES6 launched in 2015 added some new features to js, one of which are classes it does the same thing as object and prototypes but with better syntax.

// a method is a function inside the class
//In JavaScript, a constructor function is a function that is used to create and initialize objects.



class Personmain {
    constructor (fname, lname, dob) {
        this.firstName = fname;
        this.lastName = lname;
        this.dateofB = new Date(dob);
    };

    getBirthYear(){
        return this.dateofB.getFullYear;
    };

    getFullName(){
        return `${this.FirstName} ${this.lastName}`
    };
};

console.log(person1);
console.log(person1.dateofB.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());



// class is a syntactic sugar.
// Syntactic sugar is a term used in programming to describe a feature or syntax enhancement that doesn't introduce new functionality but makes the code easier to read, write, or understand. It provides a more convenient or expressive way of expressing existing concepts.


