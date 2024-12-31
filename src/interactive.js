let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    const carouselInner = document.querySelector('.carousel-inner');
    const itemWidth = items[0].clientWidth;
    carouselInner.style.transform = `translateX(-${index * itemWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

