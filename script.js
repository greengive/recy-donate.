// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("open");

    });

});


// ================= MESSAGE =================

const toast = document.getElementById("toast");


function showMessage(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function() {

        toast.classList.remove("show");

    }, 3500);

}


// ================= RECYCLE FORM =================

document
    .getElementById("recycleForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        showMessage(
            "♻️ Recycling request submitted successfully!"
        );

        this.reset();

    });


// ================= DONATION FORM =================

document
    .getElementById("donateForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        showMessage(
            "🎁 Donation request submitted successfully!"
        );

        this.reset();

    });


// ================= CONTACT FORM =================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        showMessage(
            "💚 Thank you! Your message has been received."
        );

        this.reset();

    });


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();