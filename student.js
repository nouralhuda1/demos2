// --- Student Login ---
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const messageDiv = document.getElementById('login-message');

    if (!email || !password) {
        messageDiv.innerHTML = '<div class="alert alert-danger">Please fill in both fields.</div>';
        return;
    }

    // Simulate success
    messageDiv.innerHTML = '<div class="alert alert-success">Login successful! Redirecting...</div>';
    setTimeout(() => window.location.href = '03_student_dashboard.html', 1000);
}


