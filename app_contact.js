// Dynamic Messages Feature
document.addEventListener('DOMContentLoaded', function () {
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
});

// Quote and Fashion Tips Feature
document.addEventListener('DOMContentLoaded', function () {
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
});

// Contact Form Submission with Sound
document.addEventListener('DOMContentLoaded', function () {
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
});

// Weather Feature
document.addEventListener('DOMContentLoaded', function () {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherLocation = document.getElementById('weather-location');
    const weatherDescription = document.getElementById('weather-description');
    const weatherTemperature = document.getElementById('weather-temperature');
    const weatherIcon = document.getElementById('weather-icon');
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

        fetch(`https://api.weatherapi.com/v1/current.json?key=c38993e436cd42f2925145022240911&q=${city}&aqi=no`)
            .then(response => {
                if (!response.ok) throw new Error("City not found");
                return response.json();
            })
            .then(data => {
                const current = data.current;
                weatherLocation.textContent = city;
                weatherDescription.textContent = current.condition.text || "Unknown";
                weatherTemperature.textContent = `${current.temp_c}°C`;
                weatherIcon.src = current.condition.icon;
                weatherIcon.style.display = "block";
                cityInput.value = '';
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
                errorMessage.textContent = "City not found or network issue. Please try again.";
                errorMessage.style.display = 'block';

                weatherLocation.textContent = "Astana";
                weatherDescription.textContent = "Unknown";
                weatherTemperature.textContent = "N/A";
                weatherIcon.style.display = "none";
            });
    });
});

// Currency Exchange Rates Feature
document.addEventListener('DOMContentLoaded', function () {
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

// Keyboard Navigation Feature
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll("#main-nav .nav-link");
    let currentNavIndex = 0;

    function updateNavFocus() {
        navItems.forEach((item, index) => {
            item.classList.toggle("focused", index === currentNavIndex);
        });
        navItems[currentNavIndex].focus();
    }

    updateNavFocus();

    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowRight":
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

// Smooth Page Transition Feature
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("toggle-theme-btn"); // Кнопка переключения темы
    const savedTheme = localStorage.getItem("theme") || "light"; // Получаем сохраненную тему из localStorage

    // Устанавливаем начальную тему при загрузке страницы
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggleButton.textContent = "Switch to Light Mode"; // Измените текст кнопки
    } else {
        document.body.classList.add("light");
        themeToggleButton.textContent = "Switch to Dark Mode"; // Измените текст кнопки
    }

    // Слушатель событий для переключения темы
    themeToggleButton.addEventListener("click", function () {
        if (document.body.classList.contains("dark")) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            themeToggleButton.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light"); // Сохраняем светлый режим в localStorage
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            themeToggleButton.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark"); // Сохраняем темный режим в localStorage
        }
    });
});
