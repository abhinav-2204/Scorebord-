document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Get the username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple hardcoded validation (you'd replace this with actual validation logic)
  const correctUsername = 'abhinav';
  const correctPassword = 'password';

  // Validate the credentials
  if (username === correctUsername && password === correctPassword) {
      // Successful login, redirect to another page
      window.location.href = 'success.html'; // Replace with your next page URL
  } else {
      // Display an error message
      document.getElementById('errorMessage').textContent = 'Invalid username or password.';
      document.getElementById('errorMessage').style.display = 'block';
  }
});
