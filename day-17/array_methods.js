console.log("---------------- forEach ----------------")
// ye array k hr element pr ek bar callback func chalata ha or ye original array ko change nai krta 
// ye hr item pr koi kam krne k lie use hota ha 
const food = ["apple", "mango", "banana"];
food.forEach((item, index) => {
  console.log(index, item);
});


console.log("---------------- map ----------------")
// ye array k element pr ek callback func chalata ha or uska result ek new array ma store krta ha 
// original ko change nai krta but new modified array deta ha

const nums = [1, 2, 3, 4, 5, 6, 7];
let double = nums.map((num) => {
  return num * 2;
});
console.log(double);

const users = [
  { name: "Amna", age: 21 },
  { name: "Areeba", age: 24 },
];

let updatedUsers = users.map((user) => {
  return { ...user, isActive: true };
});
console.log(updatedUsers);


console.log("---------------- filter ----------------")
// ye array k hr element pr condition check krta ha aur sirf un elements ko new array ma return krta ha jo us condition ko true kre

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNums = numbers.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNums);


console.log("---------------- find ----------------")
// ye array se pehla element return krta ha jo condition true hojay 

let findEvenNum = [1, 3, 4, 6, 8];
let firstEven = findEvenNum.find(function (num) {
  return num % 2 === 0;
});
console.log(firstEven);


console.log("---------------- some ----------------")
// ye check krta ha k array k kisi bhi element pr di gai condition true ha 

let numsArr1 = [1, 3, 5, 7, 8];
let evenNums = numsArr1.some((num) => {
  return num % 2 === 0;
});
console.log(evenNums);


console.log("---------------- every ----------------")
// check karta hai ke kya array ke sabhi elements par di gayi condition true hai

let numsArr2 = [2, 4, 6, 8];
let allEven = numsArr2.every(function (num) {
  return num % 2 !== 0;
});
console.log(allEven);


console.log("---------------- reduce ----------------")
// ye array ke sare elements ko ek single value mein reduce kar deta hai 

let sum = [1, 2, 3, 4];
let total = sum.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(total);
