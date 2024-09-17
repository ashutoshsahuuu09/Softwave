document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please fill out both fields.');
        return;
    }

    // Implement additional validation or backend integration as needed
    console.log('Login attempt:', { email, password });

    // Example: Redirect to a dashboard or show success message
    alert('Login successful!');
    window.location.href = 'dashboard.html';  // Redirect to dashboard after login
});
