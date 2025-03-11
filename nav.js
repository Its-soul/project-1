// loadNavbar.js
export function loadNavbar() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            // Insert the navbar into the <header> tag
            document.querySelector('header').innerHTML = data;

            // Add event listeners for mobile menu toggle
            const mobileMenu = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');

            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });

            // Add event listeners for loading overlay
            const loadingOverlay = document.getElementById('loading-overlay');
            const navLinksAll = document.querySelectorAll('.nav-link');

            navLinksAll.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent default link behavior
                    const targetUrl = link.getAttribute('href');

                    // Show the loading overlay
                    loadingOverlay.classList.add('active');

                    // Simulate a delay (1-2 seconds) before navigating
                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 1500); // Adjust the delay as needed
                });
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
}