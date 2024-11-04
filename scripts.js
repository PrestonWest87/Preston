// JavaScript for additional fun and interactive features
document.addEventListener("DOMContentLoaded", function() {
    // Light mode toggle button
    const toggleButton = document.getElementById("toggle-light-mode");
    // Check and apply saved theme preference
    try {
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.add("light-mode");
            toggleButton.textContent = "Switch to Dark Mode";
        }
    } catch (e) {
        console.warn("localStorage is not supported or accessible.");
    }
    // Toggle light/dark mode when the button is clicked
    toggleButton.addEventListener("click", function() {
        try {
            document.body.classList.toggle("light-mode");
            if (document.body.classList.contains("light-mode")) {
                toggleButton.textContent = "Switch to Dark Mode";
                localStorage.setItem("theme", "light");
            } else {
                toggleButton.textContent = "Switch to Light Mode";
                localStorage.setItem("theme", "dark");
            }
        } catch (e) {
            console.warn("localStorage is not supported or accessible.");
        }
    });

    // Image pulse effect when clicked
    // Add pulse effect on click using CSS class
    const profileImage = document.querySelector('img');
    profileImage.classList.add('pulse-effect');
    profileImage.addEventListener('click', function() {
        profileImage.classList.add('pulse-effect-active');
        setTimeout(() => {
            profileImage.classList.remove('pulse-effect-active');
        }, 200);
    });
});
