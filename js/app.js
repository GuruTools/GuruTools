 // Check if the preloader has already been shown in the session
 if (!localStorage.getItem('preloaderShown')) {
    document.getElementById('preloader').style.display = 'flex';
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
        localStorage.setItem('preloaderShown', 'true'); // Mark as shown
    }, 3000); // Display for 3 seconds
} else {
    document.getElementById('preloader').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", () => {
    // Add click event listener to the button
    document.getElementById("call").addEventListener("click", () => {
        // Initiate a phone call with the specified number
        window.location.href = "tel:9808370638";
    });
});