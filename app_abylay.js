document.addEventListener('DOMContentLoaded', function() {

   
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            let errorMessages = '';

            if (!name) {
                errorMessages += 'Name is required.<br>';
            }
            if (!email) {
                errorMessages += 'Email is required.<br>';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                errorMessages += 'Please enter a valid email.<br>';
            }

            if (errorMessages) {
                document.getElementById('error-messages').innerHTML = errorMessages;
                event.preventDefault();
            }
        });
    }

    // FAQ секция
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                let answer = this.nextElementSibling;
                answer.style.display = answer.style.display === "none" ? "block" : "none";
            });
        });
    }

    // Попап форма
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.querySelector('.close-btn');
    const popupForm = document.getElementById('popupForm');

    if (openPopupButton && popupForm) {
        openPopupButton.addEventListener('click', function() {
            popupForm.style.display = 'block';
        });

        closePopupButton.addEventListener('click', function() {
            popupForm.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === popupForm) {
                popupForm.style.display = 'none';
            }
        });
    }

    // Смена фона
    const changeBgButton = document.getElementById('change-bg-btn');
    if (changeBgButton) {
        changeBgButton.addEventListener('click', function() {
            const colors = ['#f4f4f4', '#e8e8e8', '#d0d0d0'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        });
    }

    // Отображение текущего времени
    const dateTimeDisplay = document.getElementById('date-time-display');
    if (dateTimeDisplay) {
        function updateDateTime() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
            const formattedDateTime = now.toLocaleString('ru', options);
            dateTimeDisplay.innerHTML = formattedDateTime;
        }

        setInterval(updateDateTime, 1000);
        updateDateTime(); 
    }

    // Переключатель тем (Day/Night)
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            if (body.classList.contains('day-theme')) {
                body.classList.remove('day-theme');
                body.classList.add('night-theme');
                themeToggleBtn.textContent = 'Switch to Day Mode';
            } else {
                body.classList.remove('night-theme');
                body.classList.add('day-theme');
                themeToggleBtn.textContent = 'Switch to Night Mode';
            }
        });
    }

    // Навигация по меню с помощью клавиш стрелок
    const menuItems = document.querySelectorAll('#main-nav .nav-link');
    let currentMenuIndex = 0;

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            currentMenuIndex = (currentMenuIndex + 1) % menuItems.length;
        } else if (event.key === 'ArrowLeft') {
            currentMenuIndex = (currentMenuIndex - 1 + menuItems.length) % menuItems.length;
        }

        menuItems[currentMenuIndex].focus();
    });

    // Отображение времени по кнопке
    const showTimeBtn = document.getElementById('showTimeBtn');
    const currentTimeDisplay = document.getElementById('current-time');

    if (showTimeBtn) {
        showTimeBtn.addEventListener('click', function () {
            const currentTime = new Date().toLocaleTimeString();
            currentTimeDisplay.textContent = currentTime;
        });
    }

});
