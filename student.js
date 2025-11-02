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

// --- Event Sign Up ---
function signUpEvent(btn, eventName) {
    btn.textContent = 'Signed Up';
    btn.disabled = true;
    alert(`You signed up for ${eventName}`);
}
