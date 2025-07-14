let sentence = "I'm learning Regex!"

// \w+ ka mtlb ha: word character (a-z, A-Z, 0-9, _) — ek ya zyada bar

let words = sentence.match(/\w+/g)
console.log(words);
