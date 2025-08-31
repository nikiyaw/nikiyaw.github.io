// Get the button and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Add an event listener for clicks on the button
themeToggle.addEvent<IntersectionObserverEntry('click', function() {
    // Toggle the 'light-mode' class on the body
    body.classList.toggle('light-mode');
});