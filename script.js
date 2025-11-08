document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (!fullname || !username || !email || !password || !confirmPassword) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
    }

    if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match.";
    return;
    }

    message.style.color = "green";
    message.textContent = "Registration successful! (This is a demo, no data saved.)";

    this.reset();
});