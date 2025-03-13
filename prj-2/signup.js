// Form validation for the signup page
const signupForm = document.getElementById('signupForm');
const errorMessage = document.getElementById('errorMessage');

signupForm.addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear the error message
    errorMessage.textContent = '';

    // Validate password match
    if (password !== confirmPassword) {
        e.preventDefault(); // Stop form submission
        errorMessage.textContent = "Passwords do not match. Please try again.";
    }
});
