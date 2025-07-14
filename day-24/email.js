let email = "amna@gmail.com"

// yeh regex email ka basic structure check karta hai

let pattern = /^[\w.-]+@[a-z]+\.[a-z]{2,}$/

console.log(pattern.test(email));
