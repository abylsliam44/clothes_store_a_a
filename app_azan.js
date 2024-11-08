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
document.addEventListener('DOMContentLoaded', function() {
    const priceFilter = document.getElementById('price-filter');
    const products = document.querySelectorAll('.product');

    priceFilter.addEventListener('change', function() {
        const selectedPriceRange = priceFilter.value;

        products.forEach(product => {
            const productPrice = parseInt(product.getAttribute('data-price'), 10); // Преобразуем цену в число
            let showProduct = false;

            switch (selectedPriceRange) {
                case 'low':
                    if (productPrice < 100) showProduct = true;
                    break;
                case 'medium':
                    if (productPrice >= 100 && productPrice <= 150) showProduct = true;
                    break;
                case 'high':
                    if (productPrice > 150) showProduct = true;
                    break;
                default:
                    showProduct = true; // Показываем все продукты при выборе "All"
            }

            // Отображаем или скрываем продукт
            product.style.display = showProduct ? 'block' : 'none';
        });

        
    });
    
    
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
