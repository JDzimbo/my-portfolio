// =====================================================
// JDTECH PORTFOLIO JAVASCRIPT
// =====================================================


// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    // Close menu after clicking a navigation link

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thanks for your message! Please contact JDTech directly through WhatsApp or email.";

        contactForm.reset();

    });

}


// =====================================================
// CURRENT YEAR
// =====================================================

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} JDTech. All rights reserved.`;

}