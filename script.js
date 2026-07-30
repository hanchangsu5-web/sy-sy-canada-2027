document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".accordion-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const arrow = button.querySelector(".arrow");

            button.classList.toggle("active");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.textContent = "▼";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                arrow.textContent = "▲";
            }
        });
    });
});