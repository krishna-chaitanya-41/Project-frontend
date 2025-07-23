// index.js for MoodMeal Home
// Add interactivity for the landing page here

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mood-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const mood = document.getElementById('mood-input').value.trim();
      if (mood) {
        if (localStorage.getItem('isLoggedIn') === 'true') {
          localStorage.setItem('userMood', mood);
          window.location.href = 'meals.html';
        } else {
          alert('Please register or log in before getting meal suggestions.');
          window.location.href = 'register.html';
        }
      }
    });
  }
}); 