// register.js for MoodMeal Register Page
// Add interactivity for register form here

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('register-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // For demo, just show alert and redirect to login page
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    });
  }
}); 