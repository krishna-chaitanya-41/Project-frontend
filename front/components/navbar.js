

document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.innerHTML = `
    <div class="logo">MoodMeal</div>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="meals.html">Meals</a></li>
      <li><a href="history.html">History</a></li>
      ${!isLoggedIn ? '<li><a href="login.html">Login</a></li>' : ''}
      ${!isLoggedIn ? '<li><a href="register.html">Register</a></li>' : ''}
      ${isLoggedIn ? '<li><a href="logout.html" id="logout-link">Logout</a></li>' : ''}
    </ul>
  `;

  if (isLoggedIn && document.getElementById('logout-link')) {
    document.getElementById('logout-link').onclick = function() {
      localStorage.setItem('isLoggedIn', 'false');
    };
  }
});