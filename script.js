function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error-msg");

  if (user === "Munyim" && pass === "231025") {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("username", user);  // Save username
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid username or password.";
  }
}

// Allow login with Enter key
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    login();
  }
});
