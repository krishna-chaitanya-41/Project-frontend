document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('login-form');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();


      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        const response = await axios.post('http://localhost:8080/api/users/login', {
          email: email,
          password: password
        });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isLoggedIn', 'true');

        alert('Login successful!');
        window.location.href = 'index.html';

      } catch (error) {
        console.error('Login failed:', error);
        alert('Invalid credentials or server error.');
      }
    });
  }
});
