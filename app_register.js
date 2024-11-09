document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("submit-register");

    registerBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        
        if (!username && !password) {
            alert("Please fill in both username and password.");
        } else if (!username) {
            alert("Please enter a username.");
        } else if (!password) {
            alert("Please enter a password.");
        } else {
            
            if (localStorage.getItem(username)) {
                alert("Username already exists. Please choose a different one.");
            } else {
                localStorage.setItem(username, JSON.stringify({ username, password }));
                alert("Registration successful! You can now log in.");
                window.location.href = "login.html"; 
            }
        }
    });
});

