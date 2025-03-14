export function loadNavbar() {
    fetch('nav.html') // Ensure the correct URL for 'navbar.html' or 'nav.html'
        .then(response => response.text())
        .then(data => {
            // Insert the navbar into the <header> tag
            document.querySelector('header').innerHTML = data;

            // Add event listeners for mobile menu toggle
            const mobileMenu = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');

            // Toggle the 'active' class to show/hide the nav links
            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('active');
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

            // Add event listener for theme toggle
            const themeToggle = document.getElementById('theme-toggle');
            const currentTheme = localStorage.getItem('theme') || 'light';

            // Set the initial theme
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateThemeIcon(currentTheme);

            themeToggle.addEventListener('click', () => {
                const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcon(newTheme);
            });

            function updateThemeIcon(theme) {
                const icon = themeToggle.querySelector('i');
                if (theme === 'dark') {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}
