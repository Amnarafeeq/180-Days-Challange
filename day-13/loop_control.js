console.log("------------- break and continue -------------");

// break: loop ko turant stop kar deta hai
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at:", i);
    break; // loop yahin ruk jaayega
  }
  console.log("i:", i);
}

console.log("-----");

// continue: current iteration ko skip karta hai
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // 3 ko skip karega, baaki chalega
  }
  console.log("Value:", i);
}
