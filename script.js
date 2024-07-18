document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreText = document.getElementById("more-text");

    readMoreBtn.addEventListener("click", function () {
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            readMoreBtn.textContent = "Leia menos";
        } else {
            moreText.style.display = "none";
            readMoreBtn.textContent = "Leia mais";
        }
    });

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    
    hamburger.addEventListener("click", function () {
        nav.classList.toggle("open");
        const icon = hamburger.querySelector("i");
        if (nav.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    let scrollContainer = document.querySelector(".gallery")
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
    })

    nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    })

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -=900;
    })
});
