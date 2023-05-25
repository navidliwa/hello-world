const logout = async () => {
  console.log('Logging out...');
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

  } catch (error) {
    console.error('Logout failed:', error);
  }
};

const logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', logout);