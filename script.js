document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const content = button.nextElementSibling;
            const arrow = button.querySelector(".arrow");

            content.classList.toggle("active");
            arrow.classList.toggle("open");

        });

    });

});