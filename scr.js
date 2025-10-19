// Можно добавить простую анимацию при скролле
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100){
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Инициализация
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.6s ease-out";
    });
});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const clickableImages = document.querySelectorAll(".clickable-img");

clickableImages.forEach(img => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

