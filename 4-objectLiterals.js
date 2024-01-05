//OBJECT LITERALS

const person = {
    FirstName: "somnath",
    LastName: "patel",
    age: 18,
    hobbies: ["cricket", "chess", "singing"],
    address: {
        country: "India",
        state: "delhi",
        city: "east delhi",
    }
}; // typeof will be object

console.log(typeof address); // undefined
console.log(typeof person.address); //object
console.log(person.FirstName);
console.log(person.FirstName,person.LastName);

console.log(person.hobbies[1]);
console.log(person.address.city);


//destructuring - it allows to extract values from objects and arrays into distinct variables.

const { FirstName, LastName, address:{city} } = person;
console.log(FirstName);
console.log(LastName);
console.log(city);

// to add properties in objects
person.email = "somu@gmail.com";
console.log(person);

person.gmail = "chomu@gmail.com";
console.log(person);


const todos = [
    {
        id: 1,
        task: "study",
        isCompleted:true,
    },

    {
        id:2,
        task: "run",
        isCompleted: true,
    },

    {
        id:3,
        task:"sleep",
        isCompleted:false,
    }
];     

console.log(todos);

console.log(todos[1].task);
