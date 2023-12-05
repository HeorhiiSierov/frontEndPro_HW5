document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");

  function registerUser() {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    if (typeof Storage !== "undefined") {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      existingUsers.push(userData);

      localStorage.setItem("users", JSON.stringify(existingUsers));

      usernameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";

      alert("Registration successful!");
    } else {
      alert("LocalStorage is not supported in this browser");
    }
  }

  const registerButton = document.querySelector("button");
  registerButton.addEventListener("click", registerUser);
});
