// script.js
function validateForm() {
  // Retrieve form values
  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const securityQuestion = document
    .getElementById("securityQuestion")
    .value.trim();

  // Name validation (must include first and last name)
  if (!/^\w+\s+\w+$/.test(name)) {
    alert("Please enter a valid full name (first and last name).");
    return false;
  }

  // Birthdate validation
  const birthDateObj = new Date(birthdate);
  const today = new Date();
  if (birthdate === "" || birthDateObj >= today) {
    alert("Please enter a valid birth date.");
    return false;
  }

  // Phone validation (10 digits)
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Email validation (basic pattern match)
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Message validation (ensure it's not empty)
  if (message === "") {
    alert("Please enter a message.");
    return false;
  }

  // Security question validation
  if (securityQuestion.toLowerCase() !== "biden") {
    // Current president's last name
    alert("Security question answer is incorrect.");
    return false;
  }

  // Show confirmation page
  displayConfirmation(name, birthdate, phone, email, message);
  return false; // Prevent form from submitting
}

function displayConfirmation(name, birthdate, phone, email, message) {
  document.getElementById("confirmName").textContent = `Name: ${name}`;
  document.getElementById(
    "confirmBirthdate"
  ).textContent = `Birth Date: ${birthdate}`;
  document.getElementById("confirmPhone").textContent = `Phone: ${phone}`;
  document.getElementById("confirmEmail").textContent = `Email: ${email}`;
  document.getElementById("confirmMessage").textContent = `Message: ${message}`;

  document.getElementById("userForm").classList.add("hidden");
  document.getElementById("confirmPage").classList.remove("hidden");
}

function editForm() {
  document.getElementById("confirmPage").classList.add("hidden");
  document.getElementById("userForm").classList.remove("hidden");
}

function confirmSubmit() {
  alert("Form submitted successfully!");
}
