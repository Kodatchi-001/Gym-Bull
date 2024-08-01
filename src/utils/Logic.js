var currentIndex1 = 0;
export function cards_page_4(direction) {
    const slides = document.querySelectorAll('.card-slides');
    const totalSlides = slides.length;
    currentIndex1 = moveSlide(direction, currentIndex1, totalSlides);
    document.querySelector('.cards').style.transform = `translateX(${currentIndex1 * -100}%)`;
}

function moveSlide(direction, currentIndex, totalSlides) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    return currentIndex;
}