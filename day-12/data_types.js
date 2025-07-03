console.log("-------------------- Data Types --------------------");
// Har value ka aik data type hota hai (string, number, boolean, etc.)

let isStudent = true;               // Boolean
let marks = 85;                     // Number
let language = "JavaScript";        // String
let skills = ["HTML", "CSS", "JS"]; // Array (list of items)
let profile = { name: "Amna", age: 21 }; // Object (key-value pairs)
let notDefined;                     // Undefined (abhi value assign nahi hui)
let nothing = null;                 // Null (jan bujh ke khaali rakha gaya)

console.log(typeof isStudent);     // "boolean"
console.log(typeof marks);         // "number"
console.log(typeof language);      // "string"
console.log(typeof skills);        // "object" (arrays bhi object hote hain)
console.log(typeof profile);       // "object"
console.log(typeof notDefined);    // "undefined"
console.log(typeof nothing);       // "object" (JS ka bug)
