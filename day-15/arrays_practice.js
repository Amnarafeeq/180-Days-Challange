console.log("------------------- Arrays in JavaScript -------------------")
// Array aik aisi cheez hai jisme hum multiple values ek hi variable mein store kar sakte hain.
// Ye values number, string, ya mix type ki ho sakti hain.

const fruitsArray = ["mango", "apple", "kiwi"];

console.log("------------------- Indexing using .length -------------------")
fruitsArray[fruitsArray.length] = "orange";  // .length array ke end par new item add karta hai
console.log(fruitsArray);

console.log("------------------- .push() -------------------")

fruitsArray.push("banana");  // .push bhi array ke end mein new item add karta hai
console.log(fruitsArray);

console.log("------------------- .length -------------------")

console.log("Total elements in array:", fruitsArray.length); // Total elements count karta hai

console.log("------------------- .pop() -------------------")

fruitsArray.pop(); // .pop last element ko remove karta hai
console.log(fruitsArray);

console.log("------------------- .splice() -------------------")
/*
splice(startIndex, deleteCount, add1, add2, ...)
0 se start karo, 2 items delete karo, aur unki jagah "grapes" aur "peach" add karo
*/
fruitsArray.splice(0, 2, "grapes", "peach");
console.log(fruitsArray);

console.log("------------------- New Array Example -------------------")
const car = ["mehran", "mercedes", "ford"];
console.log(car);

console.log("------------------- .slice() -------------------")

let sliced = car.slice(1); // 1st index se slice karke new array banata hai
console.log(sliced);

console.log("------------------- .toString() -------------------")
console.log(sliced.toString()); // Array ko simple comma separated string mein badal deta hai

console.log("------------------- .join() -------------------")

console.log(sliced.join(" & ")); // Array ko string banata hai lekin custom separator ke sath

console.log("------------------- .shift() -------------------")

car.shift(); // Array ka pehla element hata deta hai
console.log(car);

console.log("------------------- .unshift() -------------------")

car.unshift("alto"); // Array ke start mein new element add karta hai
console.log(car);
