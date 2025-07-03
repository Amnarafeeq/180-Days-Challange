console.log("-------------------- Console Methods --------------------");
// console object debugging ke liye use hota hai

console.log("This is a normal log");          // Simple message
console.warn("This is a warning");            // Yellow warning
console.error("This is an error");            // Red error
console.info("Some information");             // Informational message
console.debug("Debugging message");           // Developer debugging
console.table(["HTML", "CSS", "JavaScript"]); // Array ko table form mein dikhata hai
console.count("Clicked");                     // Kitni baar ye count hua
console.count("Clicked");                     // Again increment hoga

console.time("Loop Timer");                   // Time start
for (let i = 0; i < 100000; i++) {
  // Sirf loop chala rahe hain time calculate karne ke liye
}
console.timeEnd("Loop Timer");                // Time end and duration shown

// Grouping logs
console.group("User Info");
console.log("Username: amna123");
console.log("Role: Frontend Developer");
console.groupEnd();

// dir - object ke properties ko detail mein dikhata hai
const user = {
  name: "Amna",
  age: 21,
  course: "Web Development"
};
console.dir(user);
