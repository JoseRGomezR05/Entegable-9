let slideIndex = 0;
function moveSlide(n) {
    let slides = document.querySelectorAll('.carousel-image');
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

// Inicializar el carrusel
window.onload = () => {
    moveSlide(0); // Mostrar la primera imagen
};
