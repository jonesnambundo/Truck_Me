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
    });

    let galleryIndex = 0;
    const gallery = document.querySelector(".gallery");
    const galleryImages = gallery.querySelectorAll("div");

    document.getElementById("nextBtn").addEventListener("click", function () {
        galleryIndex = (galleryIndex + 1) % galleryImages.length;
        gallery.style.transform = `translateX(-${galleryIndex * 100}%)`;
    });

    document.getElementById("backBtn").addEventListener("click", function () {
        galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
        gallery.style.transform = `translateX(-${galleryIndex * 100}%)`;
    });
});
