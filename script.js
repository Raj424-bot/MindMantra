// Store signup data in localStorage
document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Signup successful. Please log in.');
    window.location.href = 'index.html';
});

// Login form validation
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});