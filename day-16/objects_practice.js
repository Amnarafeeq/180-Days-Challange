
console.log("------------------- JavaScript Objects -------------------")
// Object aik aisi cheez hai jisme hum key-value pairs store karte hain.
// Ye real-world entities ko represent karta hai jaise: user, car, book etc.


const person = {
    name: "Amna",
    age: 21,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],
    greet: function () {
        console.log("Hello! I'm Amna.");
    }
};
console.log(person);

console.log("------------------- Dot Notation -------------------")

console.log(person.name);       // direct property access
console.log(person.skills[1]);  // array inside object access

console.log("------------------- Bracket Notation -------------------")

console.log(person["age"]);
let prop = "isStudent";
console.log(person[prop]);

console.log("------------------- Add / Update / Delete -------------------")

person.city = "Karachi"; // add
person.age = 22;        // update
delete person.isStudent; // delete
console.log(person);

console.log("------------------- Calling Object Method -------------------")

person.greet();

console.log("------------------- Looping with for...in -------------------")

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("------------------- Nested Object -------------------")

const user = {
    name: "Amna",
    address: {
        city: "Karachi",
        zip: 12345
    }
};
console.log(user.address.city);

console.log("------------------- this Keyword -------------------")

const car = {
    brand: "Toyota",
    model: "Corolla",
    info: function () {
        console.log(`This is a ${this.brand} ${this.model}`);
    }
};
car.info();

console.log("------------------- Object Utility Methods -------------------")
console.log("Object.keys / values / entries");
const book = {
    title: "JS Guide",
    pages: 200
};
console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));

console.log("------------------- Object Destructuring -------------------")

const profile = {
    username: "amna123",
    level: "beginner"
};
const { username, level } = profile;
console.log(username);
console.log(level);

console.log("------------------- Object.freeze -------------------")

const frozenObj = { a: 1 };
Object.freeze(frozenObj);
frozenObj.a = 2; // won't change
console.log(frozenObj);

console.log("------------------- Object.seal -------------------")

const sealedObj = { a: 1 };
Object.seal(sealedObj);
sealedObj.a = 2; // allowed
sealedObj.b = 3; // not allowed
console.log(sealedObj);

console.log("------------------- Spread Operator -------------------")

const original = { x: 10, y: 20 };
const clone = { ...original, z: 30 };
console.log(clone);
