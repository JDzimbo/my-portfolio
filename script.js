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
            menuToggle.setAttribute("aria-label", "Close menu");
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");
        }

    });


    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");

        });

    });

}


// =====================================================
// SERVICE CARDS
// =====================================================

function selectService(service) {

    const contactSection =
        document.getElementById("contact");

    const messageBox =
        document.getElementById("message");

    if (messageBox) {

        messageBox.value =
            "Hello JDTech, I am interested in your " +
            service +
            " service. I would like to discuss my project with you.";

    }


    if (contactSection) {

        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    setTimeout(function () {

        const nameInput =
            document.getElementById("name");

        if (nameInput) {
            nameInput.focus();
        }

    }, 700);

}


// =====================================================
// SERVICE CARD KEYBOARD SUPPORT
// =====================================================

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {

    card.addEventListener("keydown", function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            card.click();

        }

    });

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();

            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (!name || !email || !message) {

                formMessage.textContent =
                    "Please fill in all fields.";

                return;

            }


            // Create WhatsApp message

            const whatsappMessage =
                "Hello JDTech!%0A%0A" +

                "Name: " +
                encodeURIComponent(name) +
                "%0A" +

                "Email: " +
                encodeURIComponent(email) +
                "%0A%0A" +

                "Project Details:%0A" +

                encodeURIComponent(message);


            formMessage.textContent =
                "Opening WhatsApp...";


            // Open WhatsApp

            window.open(
                "https://wa.me/2348140755356?text=" +
                whatsappMessage,
                "_blank"
            );


            // Reset form

            contactForm.reset();

        }
    );

}


// =====================================================
// SMOOTH SECTION SCROLLING
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(
    function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }
);


// =====================================================
// CURRENT YEAR
// =====================================================

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} JDTech. All rights reserved.`;

}