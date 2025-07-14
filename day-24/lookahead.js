let str = "Learn RegexJS now";

// (?=JS) ka matlab: sirf us word ko match karo jo JS se pehle ho
let pattern = /\w+(?=JS)/;
console.log(str.match(pattern));  // ["Regex"]