document.addEventListener('DOMContentLoaded', function () {
    // Dropdown functionality
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.getElementById('dropdown-content');

    dropdownBtn.addEventListener('click', function () {
        dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
        dropdownBtn.setAttribute('name', dropdownContent.style.display === 'none' ? 'chevron-down-outline' : 'chevron-up-outline');
    });

    // Password authentication
    const passwordSubmitBtn = document.getElementById('password-submit');
    passwordSubmitBtn.addEventListener('click', function () {
        const passwordInput = document.getElementById('password-input').value;
        if (passwordInput === '2042') {
            window.location.href = 'index1.html';
        } else {
            alert('Incorrect password. Try again Preethi❤️.');
        }
    });

    // Your existing code for slider and other functionalities
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.read-more');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.parentNode.querySelector('.hidden-message');
            content.classList.toggle('expanded');
            this.innerText = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    });

    const slider = document.querySelector('.slider');
    function activate(e) {
        const items = document.querySelectorAll('.item');
        if (e.target.classList.contains('next')) {
            slider.appendChild(items[0]);
        } else if (e.target.classList.contains('prev')) {
            slider.insertBefore(items[items.length - 1], items[0]);
        }
    }
    document.addEventListener('click', activate, false);
});