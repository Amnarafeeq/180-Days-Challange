# 📢 Day 23 – JavaScript Error Handling

🗓 **Date:** 13 July 2025  
بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم  

## 🧠 Learning Focus
Today’s focus was on mastering **Error Handling** in JavaScript:

### ✅ Topics Covered:
- `try...catch` blocks – how to catch and handle runtime errors
- `throw` – manually throwing custom errors
- Common JavaScript error types:
  - `ReferenceError`
  - `TypeError`
  - `SyntaxError`
- Graceful user input validation with custom error messages

---

## 💻 Code Summary

### ✅ Examples Practiced:
- Catching errors with `try...catch`
- Creating and throwing custom errors using `throw`
- Handling `ReferenceError`, `TypeError`, `SyntaxError`
- Validating user input and showing helpful error messages

```js
try {
  console.log(userName); 
} catch (error) {
  console.log("Error:", error.message);
}

function divide(a,b){
  if (b === 0){
    throw new Error("Zero se divide nahi kar sakte!");
  }
  return a / b;
}
```

---

## 📚 Resources Used

- [FreeCodeCamp – JavaScript Error Handling](https://www.freecodecamp.org/news/the-javascript-error-handling-handbook/)
- [YouTube – Error Handling in JavaScript](https://www.youtube.com/watch?v=cFTFtuEQ-10)
- [MDN Docs – Error Handling in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

---

## 🕋 Islamic Reminder

_"Failing to handle errors is failing your users. Handle with care."_ 🛠  
_"Be mindful of Allah, and Allah will protect you."_ – Tirmidhi

---

## 🚀 Progress Log

- ✅ Code Completed
- ✅ Errors handled with examples
- ✅ Real-world scenarios covered (e.g. input validation)