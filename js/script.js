// =========================================
// SkillBridge Sri Lanka
// Main JavaScript File
// =========================================


// Welcome message
console.log("Welcome to SkillBridge Sri Lanka!");


// =============================
// Explore Careers Button
// =============================

const exploreButton = document.getElementById("exploreButton");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        alert("Welcome to SkillBridge Sri Lanka!\n\nLet's discover your future career together.");

    });

}


// =============================
// Contact Form
// =============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you!\n\nYour message has been sent successfully.");

    });

}


// =============================
// Greeting Based on Time
// =============================

const hour = new Date().getHours();

if (hour < 12) {

    console.log("Good Morning!");

}
else if (hour < 18) {

    console.log("Good Afternoon!");

}
else {

    console.log("Good Evening!");

}


// =============================
// Page Loaded
// =============================

window.onload = function () {

    console.log("Website Loaded Successfully.");

};