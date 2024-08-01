// //header links

var header_div= document.querySelector('header div:first-child');
var header = document.querySelector('header');

// export default function header_links() {
//     const links = document.querySelectorAll('header ul li a');
//     links.forEach(element => {
//         element.addEventListener('click', function () {
//             header.style.height = ''
//             header_div.style.height = ''
//         })
//     });
// }
// header_links();

//navbar-responsiv
export function navbar_responsiv() {
    var height_header = '15vh';
    
    if (header.style.height == height_header) {
        header.style.height = ''
        header_div.style.height = ''
    }
    else{
        header.style.height = height_header
        header_div.style.height = '50%'
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