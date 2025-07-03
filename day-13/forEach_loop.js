console.log("------------- forEach Loop -------------");
// forEach array ke elements ko iterate karne ke liye use hota hai

const skills = ["HTML", "CSS", "JavaScript", "React"];

skills.forEach(function(skill, index) {
  console.log("Skill:", skill, "at index", index);
});

// Arrow function version
skills.forEach((skill) => console.log("✅", skill));
