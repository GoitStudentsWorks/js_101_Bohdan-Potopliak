import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-block', {
showMultiple: true,
openOnInit: [0],
});

window.addEventListener('load', () => {
document.querySelector('.accordion-block').classList.remove('no-animation');
});

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.skill', {
direction: 'horizontal',
loop: true,
allowSlidePrev: false,
slidesPerView: 2,

breakpoints: {
    768: {
    slidesPerView: 3,
    },
    1440: {
    slidesPerView: 6,
    },
},
keyboard: {
    enabled: true,
},
navigation: {
    nextEl: '.btn-next',
},
mousewheel: {
    enabled: true,
},
});