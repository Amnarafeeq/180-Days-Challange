let str = "HELLO"

// /hello/i means ignore case, Hello ya HELLO ya hELLo sab match hoga

let pattern = /hello/i
console.log(pattern.test(str));
