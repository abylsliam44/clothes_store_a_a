document.addEventListener('DOMContentLoaded', function() {

    let currentState = 0;

    function updateTextColor() {
        const bodyBackground = window.getComputedStyle(document.body).backgroundColor;
        const rgb = bodyBackground.match(/\d+/g);
        const brightness = (0.299 * rgb[0]) + (0.587 * rgb[1]) + (0.114 * rgb[2]);
        const textColor = (brightness > 128) ? '#333' : '#f5f5dc';
        document.body.style.color = textColor;
        const allTextElements = document.querySelectorAll('h1, h2, h3, p, li, footer');
        allTextElements.forEach(element => {
            element.style.color = textColor;
        });
    }

    // Theme Toggle Button Functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function () {
        if (document.body.classList.contains('night')) {
            document.body.classList.remove('night');
            document.body.classList.add('day');
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
        } else {
            document.body.classList.remove('day');
            document.body.classList.add('night');
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
        }
        updateTextColor();
    });

    // Read More Button Functionality
    document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const extraContent = document.getElementById('extra-content');
    
    // Убедитесь, что изначально extraContent скрыт
    extraContent.style.display = 'none';

    readMoreBtn.addEventListener('click', function () {
        if (extraContent.style.display === 'none' || extraContent.style.display === '') {
            extraContent.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        } else {
            extraContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
});


    const dateTimeDisplay = document.getElementById('date-time-display');
    if (dateTimeDisplay) {
        function updateDateTime() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
            const formattedDateTime = now.toLocaleString('en-US', options);
            dateTimeDisplay.innerHTML = formattedDateTime;
        }

        setInterval(updateDateTime, 1000);
        updateDateTime();
    }

        const timeBtn = document.getElementById('time-btn');
    const currentTimeDisplay = document.getElementById('current-time-display');
    timeBtn.addEventListener('click', function () {
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        currentTimeDisplay.textContent = "Current Time: " + currentTime;
    });


    // Star Rating System
    const stars = document.querySelectorAll('.star-rating .fa');
    stars.forEach((star, index) => {
        star.addEventListener('click', function () {
            stars.forEach(s => s.classList.remove('checked'));
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('checked');
            }
        });
    });

});



//************product 1 дегенге колданылган js кодтар ниже********************************************************

document.addEventListener('DOMContentLoaded', function() {

    // Arrow Key Navigation for Carousel
    document.addEventListener('keydown', function(event) {
        const carousel = document.getElementById('carousel1');
        if (event.key === 'ArrowRight') {
            $(carousel).carousel('next');
        } else if (event.key === 'ArrowLeft') {
            $(carousel).carousel('prev');
        }
    });

    // Read More Button Functionality
    const readMoreBtn = document.getElementById('read-more-btn');
    const extraContent = document.getElementById('extra-content');
    readMoreBtn.addEventListener('click', function () {
        if (extraContent.style.display === 'none') {
            extraContent.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        } else {
            extraContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });

    // Size Selection Buttons
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

});


//****************************************PRICE FILTER ДЛЯ SHOP HTML****************************************************************************************
document.addEventListener("DOMContentLoaded", function () {
    const priceFilter = document.getElementById("price-filter");

    // Load saved filter from Local Storage
    const savedPriceFilter = localStorage.getItem("priceFilter") || "all";
    priceFilter.value = savedPriceFilter;

    // Apply the filter when the page loads or the filter changes
    priceFilter.addEventListener("change", function () {
        const selectedFilter = priceFilter.value;
        localStorage.setItem("priceFilter", selectedFilter); // Save filter to Local Storage
        filterProducts(selectedFilter);
    });

    function filterProducts(filter) {
        const sections = document.querySelectorAll("section.container"); // Select all sections
        sections.forEach(section => {
            const products = section.querySelectorAll('.product');
            let sectionHasVisibleProduct = false;

            products.forEach(product => {
                const productPrice = parseFloat(product.getAttribute('data-price'));
                let showProduct = false;

                if (filter === 'all') {
                    showProduct = true;
                } else if (filter === 'low' && productPrice < 100) {
                    showProduct = true;
                } else if (filter === 'medium' && productPrice >= 100 && productPrice <= 150) {
                    showProduct = true;
                } else if (filter === 'high' && productPrice > 150) {
                    showProduct = true;
                }

                product.style.display = showProduct ? "block" : "none";
                if (showProduct) sectionHasVisibleProduct = true;
            });

            // Show or hide the section header based on product visibility
            section.style.display = sectionHasVisibleProduct ? "block" : "none";
        });

        // Display a styled "Items not found" message if no items are visible
        const mainContainer = document.querySelector(".container.mt-5"); // Main container for the message
        let noItemsMessage = document.getElementById("no-items");

        if (![...sections].some(section => section.style.display === "block")) {
            if (!noItemsMessage) {
                noItemsMessage = document.createElement("p");
                noItemsMessage.id = "no-items";
                noItemsMessage.textContent = "Items not found";
                
                // Add custom styles for the "Items not found" message
                noItemsMessage.style.textAlign = "center";
                noItemsMessage.style.fontSize = "1.5em";
                noItemsMessage.style.fontWeight = "600";
                noItemsMessage.style.color = "#333";
                noItemsMessage.style.padding = "20px";
                noItemsMessage.style.border = "2px solid #ddd";
                noItemsMessage.style.borderRadius = "10px";
                noItemsMessage.style.backgroundColor = "#f8f9fa";
                noItemsMessage.style.marginTop = "20px";
                
                mainContainer.appendChild(noItemsMessage);
            }
        } else if (noItemsMessage) {
            noItemsMessage.remove();
        }
    }

    // Apply saved filter on page load
    filterProducts(savedPriceFilter);
});




document.addEventListener("DOMContentLoaded", function () {
    const priceFilter = document.getElementById("price-filter");

    // Загружаем сохраненный фильтр из Local Storage
    const savedPriceFilter = localStorage.getItem("priceFilter") || "all";
    priceFilter.value = savedPriceFilter;

    // Фильтруем результаты
    priceFilter.addEventListener("change", function () {
        const selectedFilter = priceFilter.value;

        // Сохраняем выбранный фильтр в Local Storage
        localStorage.setItem("priceFilter", selectedFilter);

        // Применяем фильтр к товарам
        filterProducts(selectedFilter);
    });

    // Функция фильтрации продуктов
    function filterProducts(filter) {
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const productPrice = parseFloat(product.getAttribute('data-price'));
            let showProduct = false;

            if (filter === 'all') {
                showProduct = true;
            } else if (filter === 'low' && productPrice < 100) {
                showProduct = true;
            } else if (filter === 'medium' && productPrice >= 100 && productPrice <= 150) {
                showProduct = true;
            } else if (filter === 'high' && productPrice > 150) {
                showProduct = true;
            }

            if (showProduct) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Применяем сохраненный фильтр при загрузке страницы
    filterProducts(savedPriceFilter);
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeBtn = document.getElementById("toggle-theme-btn");
    const currentTheme = localStorage.getItem("theme") || "light";

    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        toggleThemeBtn.textContent = "Switch to Light Mode";
    } else {
        document.body.classList.add("light");
        toggleThemeBtn.textContent = "Switch to Dark Mode";
    }

    toggleThemeBtn.addEventListener("click", function () {
        if (document.body.classList.contains("light")) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            toggleThemeBtn.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            toggleThemeBtn.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
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
    // Variables for navigation items and initial index
    const navItems = document.querySelectorAll("#main-nav .nav-link");
    let currentNavIndex = 0;

    // Update the focus on navigation items
    function updateNavFocus() {
        navItems.forEach((item, index) => {
            item.classList.toggle("focused", index === currentNavIndex);
        });
        navItems[currentNavIndex].focus();
    }

    // Initial focus
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

document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links within the main navigation
    const navLinks = document.querySelectorAll("#main-nav .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Prevent default link navigation
            event.preventDefault();

            // Add the fade-out class to initiate the transition
            document.body.classList.add("fade-out");

            // Wait for the CSS transition to complete before changing pages
            setTimeout(() => {
                window.location.href = this.href;  // Navigate to the link's URL
            }, 500); // Match the CSS transition duration (0.5s)
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("toggle-theme-btn");
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);

    themeToggleButton.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

    themeToggleButton.addEventListener("click", function () {
        const newTheme = document.body.classList.toggle("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        themeToggleButton.textContent = newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
});
