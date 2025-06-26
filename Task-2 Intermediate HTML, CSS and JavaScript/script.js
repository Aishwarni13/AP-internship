function toggleForms() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
  registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
}

function validateLogin() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (username && password) {
    document.getElementById("authSection").style.display = "none";
    document.getElementById("dashboard").style.display = "grid";
    return false;
  }
  alert("Please fill in all login fields.");
  return false;
}

function validateRegister() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Enter a valid email.");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }
  alert("Registered successfully! You can now log in.");
  toggleForms();
  return false;
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => li.remove(); // Click to remove
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function validateContactForm() {
  const email = document.getElementById("email").value;
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Enter a valid email.");
    return false;
  }
  alert("Message sent!");
  return false;
}
