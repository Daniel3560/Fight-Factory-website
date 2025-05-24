// script.js

console.log("Welcome to Fight Factory!");

// Function to change text for the dynamic paragraph example
function changeParagraphText() {
    const paragraph = document.getElementById('dynamicParagraph');
    if (paragraph) {
        paragraph.textContent = "You've activated the Fight Factory spirit!";
        paragraph.style.color = "#ff4500";
        paragraph.style.fontWeight = "bold";
    }
}

// Function to handle the Sign Up button click
function handleSignupClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    alert("Sign Up button clicked! (This would lead to a sign-up form)");
}

// Function to handle the Log In button click
function handleLoginClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    alert("Log In button clicked! (This would open a login modal or page)");
}

// --- JavaScript for "Scroll to Top" button ---

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
}

// When the user clicks on the button, scroll to the top of the document smoothly
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
});

// --- New JavaScript for Dynamic Greeting at the top ---
function updateGreeting() {
    const greetingElement = document.getElementById('dynamicGreeting');
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greeting;

        if (currentHour < 12) {
            greeting = "Good morning!";
        } else if (currentHour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }
        greetingElement.textContent = greeting;
    }
}

// --- This code runs when the entire HTML document has been loaded and parsed ---
document.addEventListener('DOMContentLoaded', () => {
    // Get the button elements by their IDs
    const signupButton = document.getElementById('signupBtn');
    const loginButton = document.getElementById('loginBtn');

    // Add event listeners to the header buttons
    if (signupButton) {
        signupButton.addEventListener('click', handleSignupClick);
    }

    if (loginButton) {
        loginButton.addEventListener('click', handleLoginClick);
    }

    // Add event listener for the 'Activate Power' button
    const changeTextButton = document.getElementById('changeTextButton');
    if (changeTextButton) {
        changeTextButton.addEventListener('click', changeParagraphText);
    }

    // Update the dynamic year in the footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Call the function to update the greeting when the page loads
    updateGreeting();
});