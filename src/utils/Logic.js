// Ensure the elements exist before accessing their properties
var header_div = document.querySelector('header div:first-child');
var header = document.querySelector('header');

export default function header_links() {
    const links = document.querySelectorAll('header ul li a');
    links.forEach(element => {
        element.addEventListener('click', function () {
            if (header && header_div) {
                header.style.height = '';
                header_div.style.height = '';
            }
        });
    });
}
header_links();

export function navbar_responsiv() {
    var height_header = '15vh';
    
    if (header && header_div) {
        if (header.style.height === height_header) {
            header.style.height = '';
            header_div.style.height = '';
        } else {
            header.style.height = height_header;
            header_div.style.height = '50%';
        }
    } else {
        console.error('Header or header div not found');
    }
}

//Card-Slide
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