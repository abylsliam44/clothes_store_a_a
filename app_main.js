document.addEventListener("DOMContentLoaded", function () {

    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn && !window.location.pathname.includes("login.html") && !window.location.pathname.includes("register.html")) {
        window.location.href = "login.html";
    }

    
    const themeToggleButton = document.getElementById("toggle-theme-btn");
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);

    themeToggleButton.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

    themeToggleButton.addEventListener("click", function () {
    const newTheme = document.body.classList.toggle("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    themeToggleButton.textContent = newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
});


    
    function displayGreeting() {
        const hours = new Date().getHours();
        const greetingMessage = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";
        const greetingDisplay = document.getElementById("running-text");
        if (greetingDisplay) greetingDisplay.textContent = greetingMessage;
    }
    displayGreeting();


    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        const submitRegister = document.getElementById("submit-register");
        submitRegister.addEventListener("click", function () {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username && password) {
                if (localStorage.getItem(username)) {
                    alert("Username already exists. Please choose a different one.");
                } else {
                    localStorage.setItem(username, JSON.stringify({ username, password }));
                    alert("Registration successful! You can now log in.");
                    window.location.href = "login.html";
                }
            } else {
                alert("Please fill in both fields.");
            }
        });
    }


    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        const loginBtn = document.getElementById("login-btn");
        loginBtn.addEventListener("click", function () {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const storedUser = JSON.parse(localStorage.getItem(username));
            if (storedUser && storedUser.password === password) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "index.html";
            } else {
                alert("Incorrect username or password.");
            }
        });
    }

    
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedIn");
            window.location.href = "login.html";
        });
    }

    
    const buttonSound = new Audio("sound_abylay/click-sound.mp3");
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            button.classList.add("animate");
            buttonSound.play();
            setTimeout(() => button.classList.remove("animate"), 300);
        });
    });


    const stars = document.querySelectorAll('.rating-star');
    let selectedRating = parseInt(localStorage.getItem('selectedRating'), 10) || 0;

    if (selectedRating) highlightStars(selectedRating);

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            localStorage.setItem('selectedRating', selectedRating);
            highlightStars(selectedRating);
        });
        star.addEventListener('mouseover', () => highlightStars(index + 1));
        star.addEventListener('mouseout', () => highlightStars(selectedRating));
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            star.classList.toggle('selected', index < rating);
        });
    }

    
    const dateTimeDisplay = document.getElementById("date-time-display");
    function updateDateTime() {
        if (dateTimeDisplay) dateTimeDisplay.textContent = new Date().toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    
    const motivationalMessages = [
        "We love our Customers!",
        "Sales this whole week!",
        "We are waiting for You!",
        "Choose Your favorite clothes in our store!",
        "A&A Store is the best!"
    ];
    let motivationalIndex = 0;
    const motivationalDisplay = document.getElementById('motivational-display');
    function updateMotivationalMessage() {
        if (motivationalDisplay) {
            motivationalDisplay.textContent = motivationalMessages[motivationalIndex];
            motivationalIndex = (motivationalIndex + 1) % motivationalMessages.length;
        }
    }
    setInterval(updateMotivationalMessage, 2000);

    
    const steps = document.querySelectorAll(".step");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            stepDiv.style.display = index === step ? "block" : "none";
        });
        prevBtn.style.display = step === 0 ? "none" : "inline-block";
        nextBtn.innerText = step === steps.length - 1 ? "Submit" : "Next";
    }
    showStep(currentStep);

    nextBtn.addEventListener("click", function () {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            alert("Form submitted successfully!");
        }
    });
    prevBtn.addEventListener("click", function () {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    
    const colors = ["#f0f8ff", "#ffcccb", "#c1e1c1", "#add8e6", "#ffe4e1", "#fafad2", "#d3d3d3"];
    let colorIndex = 0;
    const changeBgBtn = document.getElementById("change-bg-btn");
    if (changeBgBtn) {
        changeBgBtn.addEventListener("click", function () {
            document.body.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        });
    }

    
    const soundBtn = document.getElementById("soundBtn");
    const audio = new Audio("sound_abylay/information-corporate-advertising-music-252179.mp3");
    let isPlaying = false;
    if (soundBtn) {
        soundBtn.addEventListener("click", function () {
            isPlaying ? audio.pause() : audio.play();
            soundBtn.innerText = isPlaying ? "Play Sound" : "Pause Sound";
            isPlaying = !isPlaying;
        });
        audio.addEventListener("ended", function () {
            isPlaying = false;
            soundBtn.innerText = "Play Sound";
        });
    }

    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
        .animate { animation: bounce 0.3s ease; }
    `;
    document.head.appendChild(style);
});
document.addEventListener("DOMContentLoaded", function () {
    
    const shopNowBtn = document.getElementById("shop-now-btn");
    const learnMoreBtn = document.getElementById("learn-more-btn");

    if (shopNowBtn) {
        shopNowBtn.addEventListener("click", function () {
            window.location.href = "shop.html";
        });
    }

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", function () {
            window.location.href = "about.html";
        });
    }

    
});
document.addEventListener("DOMContentLoaded", function () {
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');

    
    document.getElementById('toggle-theme-btn').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    
    const popupOverlay = document.createElement("div");
    popupOverlay.id = "popup-overlay";
    popupOverlay.style.position = "fixed";
    popupOverlay.style.top = "0";
    popupOverlay.style.left = "0";
    popupOverlay.style.width = "100%";
    popupOverlay.style.height = "100%";
    popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    popupOverlay.style.display = "flex";
    popupOverlay.style.alignItems = "center";
    popupOverlay.style.justifyContent = "center";
    popupOverlay.style.zIndex = "1000";
    popupOverlay.style.display = "none"; 

    
    const popupContent = document.createElement("div");
    popupContent.id = "popup-content";
    popupContent.style.padding = "20px";
    popupContent.style.borderRadius = "8px";
    popupContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    popupContent.style.textAlign = "center";
    popupContent.style.maxWidth = "400px";
    popupContent.style.width = "90%";

    
    popupContent.innerHTML = `
        <h2>Contact Our Manager</h2>
        <p>Would you like to reach out to our manager? Leave us a message!</p>
        <textarea id="manager-message" rows="4" placeholder="Type your message here..." style="width: 100%; padding: 10px; border-radius: 4px; margin-bottom: 15px;"></textarea>
        <button id="send-message-btn" class="futuristic-btn">Send Message</button>
        <button id="close-popup-btn" class="futuristic-btn" style="margin-top: 10px;">Close</button>
    `;

    
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    
    setTimeout(() => {
        popupOverlay.style.display = "flex";
    }, 3000); 

    
    document.getElementById("close-popup-btn").addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });

    
    document.getElementById("send-message-btn").addEventListener("click", function () {
        const message = document.getElementById("manager-message").value.trim();
        if (message) {
            alert("Your message has been sent!");
            document.getElementById("manager-message").value = "";
            popupOverlay.style.display = "none";
        } else {
            alert("Please enter a message before sending.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    const navItems = document.querySelectorAll("#main-nav .nav-link");
    let currentNavIndex = 0;

    
    function updateNavFocus() {
        navItems.forEach((item, index) => {
            item.classList.toggle("focused", index === currentNavIndex);
        });
        navItems[currentNavIndex].focus();
    }

    
    updateNavFocus();

    // Keyboard event handling for navigation
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowRight": // Move to the next navigation item
                currentNavIndex = (currentNavIndex + 1) % navItems.length;
                updateNavFocus();
                break;
            case "ArrowLeft": 
                currentNavIndex = (currentNavIndex - 1 + navItems.length) % navItems.length;
                updateNavFocus();
                break;
            case "Enter": 
                navItems[currentNavIndex].click();
                break;
            case "T": 
                document.getElementById("toggle-theme-btn").click();
                break;
            case "Escape": 
                const popupOverlay = document.getElementById("popup-overlay");
                if (popupOverlay && popupOverlay.style.display === "flex") {
                    popupOverlay.style.display = "none";
                }
                break;
            default:
                break;
        }
    });

});



document.addEventListener("DOMContentLoaded", function() {
    const openChatbotBtn = document.getElementById("open-chatbot-btn");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbotBtn = document.getElementById("chatbot-close-btn");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotSendBtn = document.getElementById("chatbot-send-btn");
    const themeToggleBtn = document.getElementById("toggle-theme-btn"); 

    
    const sendSound = new Audio("sound_abylay/level-up-191997.mp3");

    // Show chatbot and display instructions
    openChatbotBtn.addEventListener("click", () => {
        chatbotContainer.style.display = "block";
        openChatbotBtn.style.display = "none";
        displayInstructions();
    });

    
    closeChatbotBtn.addEventListener("click", () => {
        chatbotContainer.style.display = "none";
        openChatbotBtn.style.display = "block";
    });

    // Function to add messages to the chat window
    function addMessageToChat(content, isUser = false) {
        const message = document.createElement("p");
        message.textContent = content;
        message.classList.add(isUser ? "user-message" : "bot-message");
        chatbotMessages.appendChild(message);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        
        if (isUser) sendSound.play();
    }

    // Function to display instructions in the chat
    function displayInstructions() {
        const instructions = `
        Welcome to the A&A Clothing Store Bot! 
        You can ask me the following questions:
        - "Hello" or "Hi" to start a conversation.
        - "Price" or "Cost" to ask about product prices.
        - "Shipping" to learn about our shipping policies.
        - "Return" to know about return policies.
        Type any of these commands to get started!
        `;
        addMessageToChat(instructions);
    }

    // Simple chatbot response logic
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
            return "Hello! How can I assist you today?";
        } else if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
            return "Our products range from $20 to $200. Is there something specific you’re interested in?";
        } else if (lowerMessage.includes("shipping")) {
            return "We offer free shipping on orders over $50!";
        } else if (lowerMessage.includes("return")) {
            return "You can return products within 30 days for a full refund.";
        } else {
            return "I'm here to help! Can you please rephrase your question?";
        }
    }

    // Handle sending message
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessageToChat(userMessage, true);
            chatbotInput.value = "";
            
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                addMessageToChat(botResponse);
            }, 500);
        }
    }

    
    chatbotSendBtn.addEventListener("click", sendMessage);

    
    chatbotInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); 
            sendMessage();
        }
    });

    // Theme toggle functionality
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        themeToggleBtn.textContent = "Switch to Light Mode";
    } else {
        document.body.classList.add("light");
        themeToggleBtn.textContent = "Switch to Dark Mode";
    }

    themeToggleBtn.addEventListener("click", function () {
        if (document.body.classList.contains("light")) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            themeToggleBtn.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            themeToggleBtn.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    
    function addFadeOutTransition(event, targetUrl) {
        event.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); 
    }

    
    document.querySelectorAll("#main-nav .nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            addFadeOutTransition(event, this.href);
        });
    });

    
    document.querySelectorAll("#shop-now-btn, #learn-more-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            addFadeOutTransition(event, this.getAttribute("data-href"));
        });
    });

    
    document.querySelectorAll(".category-item").forEach(link => {
        link.addEventListener("click", function (event) {
            addFadeOutTransition(event, this.href);
        });
    });

    
    document.querySelectorAll(".btn-animate").forEach(button => {
        button.addEventListener("click", function (event) {
            addFadeOutTransition(event, this.href);
        });
    });
});

