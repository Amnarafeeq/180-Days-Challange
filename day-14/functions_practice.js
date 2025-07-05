console.log("------------------- Function Declaration -------------------")
// Function declare karna matlab usay banana. Ye function keyword se hota hai.
// Jab hum function call karte hain to uska andar ka code run hota hai.

function hello() {
    console.log("Hello");
}
hello(); // function call

console.log("------------------- Parameters & Arguments -------------------")
// Parameters wo hote hain jo function define karte waqt likhte hain.
// Arguments wo hote hain jo function call karte waqt pass karte hain.

function greet(name) {
    console.log("Hello!", name);
}
greet("Amna"); // "Amna" yahan argument hai

console.log("------------------- Function Expression -------------------")
// Function expression mein hum ek function ko variable mein assign karte hain.
// Ye anonymous function hota hai (jiska naam nahi hota).

const sum = function () {
    console.log(6 + 8);
};
sum();

console.log("------------------- Function with Return -------------------")
// Return ka matlab hota hai ke function kuch value wapas kare.
// Is value ko baad mein kisi aur jagah use kar sakte hain.

const add = function (a, b) {
    return a + b; // ye value return karega
};

let res = add(2, 3); // function call se result mil gaya
console.log(res + 5); // return ki hui value ka use

console.log("------------------- Default Parameters -------------------")
// Agar koi argument na diya jaye to default value use hoti hai.

function sub(x, y = 5) {
    return x - y;
}
let res2 = sub(8); // y default 5 le lega
console.log(res2);

console.log("------------------- Rest Parameters -------------------")
// Rest parameter `...` lagake likhte hain, ye multiple arguments accept karta hai.

function restParams(a, ...b) {
    console.log("First:", a);
    console.log("Rest:", b);
}
restParams(1, 2, 3, 4, 5, 6, 7, 8);

console.log(" ------------------- Arrow Function -------------------")
// Arrow function short syntax hota hai modern JS mein functions likhne ka.

const multiplication = (a, b) => a * b;
let res3 = multiplication(3, 3);
console.log(res3);

console.log("------------------- Nested Function -------------------")
// Function ke andar function banana nested function hota hai.
// Inner function sirf outer function ke andar hi access hota hai.

function outer() {
    console.log("Outer function");
    function inner() {
        console.log("Inner function");
    }
    inner(); // inner ko yahin se call karna hoga
}
outer();

console.log(" ------------------- Callback Function -------------------")
// Jab hum ek function ko dusre function ke parameter ke tor par pass karte hain
// usay callback function kehte hain.

function cook(foodCallback) {
    foodCallback(); // yahan passed function run hoga
}

// Anonymous arrow function as callback
cook(() => {
    console.log("I am cooking");  
});
