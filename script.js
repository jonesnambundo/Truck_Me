document.addEventListener("DOMContentLoaded", () => {
    // Expanding "Leia mais" button in "Sobre nós" section
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreText = document.getElementById("more-text");
    
    readMoreBtn.addEventListener("click", () => {
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            readMoreBtn.textContent = "Leia menos";
        } else {
            moreText.style.display = "none";
            readMoreBtn.textContent = "Leia mais";
        }
    });

    // Gallery scroll functionality
    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "smooth";
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    });

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900; // Use -= to scroll back
    });

    // Contact form validation
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // If all validations pass, submit the form
        form.submit();

        // Show success message
        alert("Formulário enviado com sucesso!");
        form.reset();
    });
});