# 📦 Day 22 – JavaScript Modules

🗓 **Date:** 12 July 2025

## 🧠 Learning Focus

- Import/export (Named & Default)
- ES Modules (ESM)
- Module Patterns (import *, aliasing, etc.)

## 📁 Folder Structure

```
project-root/
├── math.js
├── greet.js
└── main.js
```

## 📜 Description

This task demonstrates JavaScript Modules using:

- ✅ Named Exports (`add`, `subtract`) from `math.js`
- ✅ Default Export (`multiply`) from `math.js`
- ✅ Import all as object (`import * as mathFunctions`)
- ✅ Named import with alias (`message as greeting`)
- ✅ Console-based function output testing

## 📂 Files & Explanation

### math.js

```js
// Named exports
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export
export default function multiply(a, b) {
  return a * b;
}
```

### greet.js

```js
export const message = "Hello! Welcome to JavaScript modules";
```

### main.js

```js
// Default import
import multiply from './math.js';

// Named imports
import { add, subtract } from './math.js';

// Import all as object
import * as mathFunctions from './math.js';

// Alias import
import { message as greeting } from './greet.js';

// Console outputs
console.log(greeting);
console.log("2 + 3 =", add(2, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("3 × 5 =", multiply(3, 5));
console.log("mathFunctions.add(6, 7) =", mathFunctions.add(6, 7));
```

## ✅ Output

- Console shows the correct outputs using various import styles.
- ES6 Modules improve code modularity and maintainability.

## 📚 Resources

- [FreeCodeCamp: JavaScript Modules](http://freecodecamp.org/news/javascript-modules-explained-with-examples)

## 🕋 Islamic Reminder

> “Verily, Allah loves those who are constant and consistent.” – (Muslim)

---
💻 *Keep learning, keep growing!* 🚀
