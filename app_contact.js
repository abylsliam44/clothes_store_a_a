document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Message and Other Features
    const messages = [
        "Welcome to A&A Clothing Store!",
        "Explore the latest trends in fashion.",
        "Get 20% off on your first purchase!",
        "Sign up for exclusive offers.",
        "Need help? Contact our support team."
    ];
    let currentMessageIndex = 0;

    function updateMessage() {
        const messageElement = document.getElementById('dynamic-message-top');
        if (messageElement) {
            messageElement.textContent = messages[currentMessageIndex];
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }
    }
    setInterval(updateMessage, 2000);

    // Quote and Fashion Tips Features
    const quotes = [
        "Fashion is the armor to survive the reality of everyday life. – Bill Cunningham",
        "Style is a way to say who you are without having to speak. – Rachel Zoe",
        "Elegance is the only beauty that never fades. – Audrey Hepburn",
        "Fashion is about something that comes from within you. – Ralph Lauren",
        "The joy of dressing is an art. – John Galliano"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.getElementById('quote-display');
    if (quoteElement) {
        quoteElement.textContent = `"${randomQuote}"`;
    }

    const tips = [
        "Keep it simple and focus on quality pieces.",
        "Invest in a good pair of shoes – they elevate any outfit.",
        "Accessorize wisely to enhance your look without overdoing it.",
        "Always dress for the occasion and feel confident.",
        "A great jacket can change the entire vibe of an outfit."
    ];
    let currentTipIndex = 0;

    const tipElement = document.getElementById('fashion-tip-display');
    const nextTipButton = document.getElementById('next-tip-btn');
    if (tipElement && nextTipButton) {
        function showTip() {
            tipElement.textContent = tips[currentTipIndex];
            currentTipIndex = (currentTipIndex + 1) % tips.length;
        }

        nextTipButton.addEventListener('click', showTip);
        showTip();
    }

    // Play sound on form submission
    const contactForm = document.getElementById('contactForm');
    const submitSound = new Audio('sound_abylay/level-up-191997.mp3');
    submitSound.onerror = () => alert("Error: Sound file could not be loaded. Check the path.");

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            submitSound.play();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !interest || !message) {
                alert("Please fill out all fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you for reaching out! We will get back to you soon.");
            contactForm.reset();
        });
    }

    // Weather API integration without icon
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherLocation = document.getElementById('weather-location');
    const weatherDescription = document.getElementById('weather-description');
    const weatherTemperature = document.getElementById('weather-temperature');

    // Display error message for invalid city input
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.style.display = 'none';
    cityInput.parentNode.insertBefore(errorMessage, cityInput.nextSibling);

    getWeatherBtn.addEventListener('click', function () {
        const city = cityInput.value.trim() || 'Astana';

        if (!city) {
            errorMessage.textContent = "Please enter a city name.";
            errorMessage.style.display = 'block';
            return;
        } else {
            errorMessage.style.display = 'none';
        }

        fetch(`https://wttr.in/${city}?format=j1`)
            .then(response => {
                if (!response.ok) throw new Error("City not found");
                return response.json();
            })
            .then(data => {
                const currentCondition = data.current_condition[0];
                weatherLocation.textContent = city;
                weatherDescription.textContent = currentCondition.weatherDesc[0].value || "Unknown";
                weatherTemperature.textContent = `${currentCondition.temp_C || 'N/A'}°C`;
                cityInput.value = '';
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
                errorMessage.textContent = "City not found or network issue. Please try again.";
                errorMessage.style.display = 'block';

                // Default message if an error occurs
                weatherLocation.textContent = "Astana";
                weatherDescription.textContent = "Unknown";
                weatherTemperature.textContent = "N/A";
            });
    });

    
    const exchangeContainer = document.querySelector(".exchange-container");

    function fetchKZTExchangeRates() {
        fetch("https://api.exchangerate-api.com/v4/latest/KZT")
            .then(response => response.json())
            .then(data => {
                const rates = data.rates;
                const date = new Date().toLocaleDateString();

                exchangeContainer.innerHTML = `
                    <h4>Currency Exchange Rates (KZT)</h4>
                    <p>Date: ${date}</p>
                    <p><img src="images_abylay/Flag_of_the_United_States.png" alt="USD Flag" class="currency-flag"> 1 KZT = ${(1 / rates.USD).toFixed(4)} USD</p>
                    <p><img src="images_abylay/Flag_of_Europe.svg.png" alt="EUR Flag" class="currency-flag"> 1 KZT = ${(1 / rates.EUR).toFixed(4)} EUR</p>
                    <p><img src="images_abylay/Flag_of_Russia.png" alt="RUB Flag" class="currency-flag"> 1 KZT = ${(1 / rates.RUB).toFixed(4)} RUB</p>
                `;
            })
            .catch(error => console.error("Error fetching exchange rates:", error));
    }

    fetchKZTExchangeRates();
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
            case "ArrowLeft": // Move to the previous navigation item
                currentNavIndex = (currentNavIndex - 1 + navItems.length) % navItems.length;
                updateNavFocus();
                break;
            case "Enter": // Activate the focused navigation item
                navItems[currentNavIndex].click();
                break;
            case "T": // Toggle theme
                document.getElementById("toggle-theme-btn").click();
                break;
            case "Escape": // Close popup if open
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
    const links = document.querySelectorAll("a"); // Select all anchor links

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default link behavior
            const href = this.getAttribute("href"); // Get the href of the clicked link

            document.body.classList.add("fade-out"); // Add fade-out class

            // Wait for the transition to finish, then navigate
            setTimeout(() => {
                window.location.href = href; // Navigate to the new page
            }, 500); // Match this duration with the CSS transition time
        });
    });
});
