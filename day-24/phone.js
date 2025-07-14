let text = "Call me at 0324-1234567"
// yahan \d{4}-\d{7} ka mtlb ha 4 digit, dash, phr 7 digit
let pattern = /\d{4}-\d{7}/;
// match() se pattern dhund rhe
let result = text.match(pattern)
console.log(result);

