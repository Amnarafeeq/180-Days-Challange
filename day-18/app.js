// On page load check and display saved user
window.onload = function () {
  const userData = localStorage.getItem("user");

  if (userData) {
    const userObj = JSON.parse(userData); // convert string to object
    document.getElementById("userInfo").textContent =
      `${userObj.name} (${userObj.email}, Age: ${userObj.age})`;
  }
};

// Ask user info and save to localStorage
function askAndSaveUser() {
  const name = prompt("Please enter your name:");
  if (!name) {
    alert("Name cannot be empty.");
    return;
  }

  const email = prompt("Please enter your email:");
  if (!email) {
    alert("Email cannot be empty.");
    return;
  }

  const age = prompt("Please enter your age:");
  if (!age || isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }

  // Create an object
  const user = {
    name: name,
    email: email,
    age: age
  };

  // Save object as string in localStorage
  localStorage.setItem("user", JSON.stringify(user));
  alert("Your information has been saved!");

  // Update UI
  document.getElementById("userInfo").textContent =
    `${user.name} (${user.email}, Age: ${user.age})`;
}
