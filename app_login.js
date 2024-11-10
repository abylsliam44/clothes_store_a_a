document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");

    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        
        if (!username && !password) {
            alert("Please enter both username and password.");
        } else if (!username) {
            alert("Please enter your username.");
        } else if (!password) {
            alert("Please enter your password.");
        } else {
            
            const storedUser = JSON.parse(localStorage.getItem(username));
            if (storedUser && storedUser.password === password) {
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("currentUser", username); 
                window.location.href = "index.html"; 
            } else {
                alert("Incorrect username or password.");
            }
        }
    });
});
