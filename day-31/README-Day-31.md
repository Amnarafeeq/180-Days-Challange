
# 🗓 Day 31 – Async/Await & Social Media Simulation

## 📌 Topic: Asynchronous JavaScript – Promises, Async/Await, and API Simulation

---

## ✅ Learning Objectives

- Understand asynchronous behavior in JavaScript
- Use Promises with `.then()` chaining
- Use `async/await` for cleaner, modern code
- Simulate API-like asynchronous actions using `setTimeout`

---

## 📚 Resources Used

- [FreeCodeCamp – JavaScript Async/Await](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6) (2h)
- [YouTube – Async JavaScript Tutorial by Net Ninja](https://www.youtube.com/watch?v=PoRJizFvM7s) (1h)
- [MDN Docs – Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) (1h)

---

## 💻 Project: Social Media Simulation

### 🧠 Features Implemented:

1. **Login Simulation** (fake login delay using `setTimeout`)
2. **Posting Images** (`Img1`, `Img2`, `Img3`)
3. **Getting Reactions** (`User1`, `User2`, `User3`)
4. **Friend Requests Accepted** (`User1`, `User2`, etc.)
5. **Logging Out**

---

### ✅ Two Approaches:

- **.then() Chaining Version:**  
  Demonstrates the classic Promise chaining approach.

- **Async/Await Version:**  
  Clean and readable flow using `async` functions.

```js
// Example usage:
await letUserLogin();
await letPostImages();
await getReactionsOnPost();
await seeAcceptedFollowRequest();
await loggingOut();
```

---

## 🗂 Folder Structure

```
/day-31-social-simulation
├── script.js       # Full code with both versions
└── README.md       # This file
```

---

## 📸 Output Sample (Console):

```
----- Login to your Account -----
Login Successfully!
----- Posting Images on Account ------
Img1
Img2
Img3
Images posted.
----- Reactions on post -----
User1 Reacted on your post.
User2 Reacted on your post.
User3 Reacted on your post.
----- People who Accepted your request -----
User1 Accepted your friend's request.
User2 Accepted your friend's request.
And many more... Accepted your friend's request.
----- Logging Out... -----
Logged Out
```

---

## ✅ Daily Checklist

- [x] Watched tutorials
- [x] Practiced with simulation code
- [x] Applied both `.then()` and `async/await`
- [x] Committed code to GitHub
- [x] Shared progress in the group

---

## 📌 Reflection

Today’s simulation helped strengthen understanding of asynchronous code structure in a real-world scenario. Working with Promises and `async/await` is now more comfortable. Alhamdulillah!

---

## 🤲 Reminder:

> “Allah loves those deeds that are small but consistent.” – Prophet Muhammad ﷺ  
Stay consistent — you're growing both technically and spiritually. 🌱
