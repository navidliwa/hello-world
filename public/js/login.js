const loginFormHandler = async (e) => {
  e.preventDefault();

  try {
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log(response);

      // If successful, redirect the browser to the profile page
      window.location.replace('/dashboard');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', loginFormHandler);