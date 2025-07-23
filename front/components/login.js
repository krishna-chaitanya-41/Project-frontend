// login.js for MoodMeal Login Page
// Add interactivity for login form here

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // For demo, just save login state
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      window.location.href = 'index.html';
    });
  }
}); 