import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import Swiper from "swiper";
import 'swiper/css';



const apiUrl = "https://portfolio-js.b.goit.study/api/reviews";
const cardsContainer = document.querySelector('.cards');

async function fetchData() {
    const { data } = await axios(apiUrl)
    return data;
}

fetchData()
    .then(data => {
        cardsContainer.insertAdjacentHTML("beforeend", createCards(data));
    })
    .catch(error => {
        showError("An error occured. Please try again.")
        console.error("Axios error:", error)
    });

function createCards(arr) {
    return arr.map(({ author, avatar_url, review }) => `
    <li class="card swiper-slide">
    <img src="${avatar_url}" alt="Author's photo" class="card-img">
    <div class="card-content">
    <p class="common-headers">${author}</p>
    <p class="common-text"> ${review}</p>
    </div>
    </li>
    `).join("");
}

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlidesBounds: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 16
        }
    },
});

function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}