document.addEventListener("DOMContentLoaded", () => {
  // Initial state
  const state = {
    username: "",
    email: "",
    password: "",
    errors: {},
  };

  // Utility function to validate the form
  const validate = () => {
    const errors = {};
    if (!state.username) errors.username = "Username is required.";
    if (!state.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Invalid email address.";
    }
    if (!state.password) {
      errors.password = "Password is required.";
    } else if (state.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    state.errors = errors;
    updateErrorMessages();
    return Object.keys(errors).length === 0;
  };

  // Update error messages in the DOM
  const updateErrorMessages = () => {
    document.getElementById("username-error").textContent =
      state.errors.username || "";
    document.getElementById("email-error").textContent =
      state.errors.email || "";
    document.getElementById("password-error").textContent =
      state.errors.password || "";
  };

  // Create the form dynamically
  const form = document.createElement("form");

  // Create input fields and error messages
  const createField = (labelText, id, type, placeholder, stateKey) => {
    const container = document.createElement("div");

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = `${labelText}:`;

    const input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.addEventListener("input", (e) => {
      state[stateKey] = e.target.value;
    });

    const error = document.createElement("p");
    error.id = `${id}-error`;
    error.style.color = "red";

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(error);

    return container;
  };

  // Add input fields to the form
  form.appendChild(createField("Username", "username", "text", "Enter username", "username"));
  form.appendChild(createField("Email", "email", "email", "Enter email", "email"));
  form.appendChild(createField("Password", "password", "password", "Enter password", "password"));

  // Create the submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Register";

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", {
        username: state.username,
        email: state.email,
        password: state.password,
      });
      alert("Form submitted successfully!");
    }
  });

  form.appendChild(submitButton);

  // Append the form to the body or any container
  document.body.appendChild(form);
});
