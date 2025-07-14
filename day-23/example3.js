// referenceError – jab variable defined nahi hota
try {
  console.log(x);
} catch (e) {
  console.log("ReferenceError:", e.message);
}

// typeError – jab kisi cheez ka galat type use karo
try {
  null.f();
} catch (e) {
  console.log("TypeError:", e.message);
}

// syntaxError – yeh mostly code likhte waqt aata hai (runtime pe nahi pakda jata)
try {
  eval("if true { console.log('Hi') }"); // eval syntax error karega
} catch (e) {
  console.log("SyntaxError:", e.message);
}
