
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('register-form');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault(); // Prevent default form submission (page reload)

      // Get form data directly from the DOM
      const fullName = document.getElementById('register-fullname').value;
      const username = document.getElementById('register-username').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      const phone = document.getElementById('register-phone').value;
      const role = document.getElementById('register-role').value;

      const formData = {
        fullName: fullName,
        username: username,
        email: email,
        password: password,
        phone: phone,
        role: role
      };

      try {

        await axios.post("http://localhost:8080/api/users/register", formData);

        alert("Registration successful! Please log in.");
        window.location.href = 'login.html';
      } catch (error) {
        console.error("Registration failed:", error);
        let errorMessage = "Registration failed. Please try again.";
        if (error.response && error.response.data && error.response.data.message) {

          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        alert(errorMessage);
      }
    });
  }
});