document.addEventListener('DOMContentLoaded', (event) => {
    const arButtonTrigger = document.getElementById('ar-button-trigger');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    if (arButtonTrigger && popup && closePopup) {
        arButtonTrigger.addEventListener('click', () => {
            popup.style.display = 'flex';
        });

        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});