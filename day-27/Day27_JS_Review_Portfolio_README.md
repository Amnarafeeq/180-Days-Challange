# 🗓 Day 27 – JavaScript Review + Start Portfolio

## 🧠 Focus Areas:

Today’s goal is to **review core JavaScript concepts** and begin integrating your skills into a **personal portfolio project**. This will help reinforce foundational topics while transitioning toward building real-world applications.

---

## ✅ Topics Reviewed:

### 1. **Variables**
- `var`, `let`, and `const`
- Scope (global vs block)
- Hoisting behavior

```js
let name = "Amna";
const age = 22;
var city = "Lahore";
```

---

### 2. **Loops**
- `for`, `while`, and `do...while`
- `for...of` and `for...in`
- Looping through arrays and objects

```js
for (let i = 0; i < 5; i++) {
  console.log("Loop count:", i);
}
```

---

### 3. **Functions**
- Function declarations and expressions
- Arrow functions
- Parameters, arguments, and return values

```js
function greet(name) {
  return `Hello, ${name}!`;
}

const add = (a, b) => a + b;
```

---

### 4. **DOM Manipulation**
- `document.getElementById()`, `querySelector()`, etc.
- Creating and modifying elements
- Changing inner text, HTML, and styles

```js
const heading = document.querySelector("h1");
heading.textContent = "Welcome to My Portfolio!";
```

---

### 5. **Events**
- Adding event listeners (`click`, `submit`, etc.)
- Event object and default behavior
- Interactive UI basics

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## 🚀 Getting Started on Portfolio

- Created basic HTML structure
- Linked external JS file
- Planned initial sections: Hero, About Me, Skills

---

## 🔁 Next Steps:

- Add interactive JavaScript to Hero section (e.g., Typewriter effect)
- Implement DOM-based skill toggle feature
- Make reusable components for projects

---

## 📌 Summary:

This session was a **consolidation of core JavaScript knowledge** with a transition into real-world implementation through your portfolio. The goal is to start applying theory practically using DOM and events in your UI.
