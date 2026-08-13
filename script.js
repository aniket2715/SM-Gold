/* =====================================================
   SM GOLD - SCRIPT.JS
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
    "linear-gradient(135deg, #4a3506, #705512, #4a3506)";

        header.style.boxShadow =
            "0 5px 30px rgba(0,0,0,0.25)";

    } else {

        header.style.background =
    "linear-gradient(135deg, #5c4308, #80621a, #5a4108)";

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.querySelector('[name="name"]').value;

        const phone =
            document.querySelector('[name="phone"]').value;

        const email =
            document.querySelector('[name="email"]').value;

        const interest =
            document.querySelector('[name="interest"]').value;

        const message =
            document.querySelector('[name="message"]').value;


        /* 
           WhatsApp Number
           --------------------------------
           Replace this number with SM Gold's
           actual WhatsApp number later.
        */

        const whatsappNumber = "919XXXXXXXXX";


        const whatsappMessage =
            `Hello SM Gold,

Name: ${name}
Phone: ${phone}
Email: ${email}
Jewellery Type: ${interest}

Message:
${message}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappURL, "_blank");

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === `#${current}`) {

            link.style.color = "#d4af37";

        }

    });

});


/* =====================================================
   SIMPLE REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-content, .collection-card, .gallery-grid img, .feature-card, .contact-content"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});