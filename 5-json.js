//JSON - (JavaScript Object Notation) in JavaScript is a lightweight data interchange format. It's a text-based format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application, as it's a common data format with a simple syntax. JSON is widely used in web development for data exchange between the client and the server.

// "parsing" is the conversion from a JSON string to a JavaScript object, and "generating" is the conversion from a JavaScript object to a JSON-formatted string. These processes are essential for exchanging data between a server and a client or for storing and retrieving data in a standardized format.


const todosJSON = JSON.stringify(todos);  //this will convert array/object into JSON
console.log(todosJSON);