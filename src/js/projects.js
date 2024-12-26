import Swiper from 'swiper/bundle';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperProjects = new Swiper('.swiper' && '.swiper-projects', {
    slidesPerView: 1,
    preventInteractionOnTransition: true,
    spaceBetween: 30,
    loop: false,
    modules: [Navigation, Keyboard ],
    speed: 500,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlidesBounds: true,
    slidesPerGroup: 1,
});

document.querySelector('.swiper-projects').addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();

        if (event.shiftKey) {
            swiperProjects.slidePrev();
        } else {
            swiperProjects.slideNext(); 
        }
    }
});

document.querySelectorAll('.project-btn').forEach((button) => {
    button.addEventListener('click', () => {
        window.open('https://github.com/Bohdan-Potopliak/free-azov', '_blank');
    });
});