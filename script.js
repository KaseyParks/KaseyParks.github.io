// Grab the form and success message elements
const form = document.getElementById("subscribe-form");
const successMessage = document.getElementById("success-message");

// Listen for form submission
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default page reload

  const formData = new FormData(form);

  // Send the form data to Formspree
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      // Show success message
      successMessage.textContent = "Thanks! Your email has been submitted.";
      successMessage.style.color = "green";
      form.reset(); // Clear the input
    } else {
      // Handle errors returned by Formspree
      response.json().then(data => {
        if (data.errors) {
          successMessage.textContent = data.errors.map(error => error.message).join(", ");
          successMessage.style.color = "red";
        } else {
          successMessage.textContent = "Oops! There was a problem submitting your email.";
          successMessage.style.color = "red";
        }
      });
    }
  })
  .catch(error => {
    successMessage.textContent = "Oops! There was a network problem. Try again.";
    successMessage.style.color = "red";
  });
});
