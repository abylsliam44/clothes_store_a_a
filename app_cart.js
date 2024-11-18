document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            const popup = document.createElement('div');
            popup.className = 'popup-container';

            
            const popupContent = document.createElement('div');
            popupContent.className = 'popup-content';

            
            popupContent.innerHTML = `
                <p>Item successfully added to your cart!</p>
                <button class="close-popup btn btn-primary">Close</button>
            `;

            
            popup.appendChild(popupContent);
            document.body.appendChild(popup);

            
            const closePopupButton = popup.querySelector('.close-popup');
            closePopupButton.addEventListener('click', () => {
                document.body.removeChild(popup);
            });
        });
    });
});
