import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const apiUrl = "https://portfolio-js.b.goit.study/api/reviews";
const cardsContainer = document.querySelector('.cards')

async function fetchData() {
    const { data } = await axios(apiUrl)
    return data;
}

fetchData()
    .then(data => {
        console.log(data);
        cardsContainer.insertAdjacentHTML("beforeend", createCards(data));
    })
    .catch(error => {
        showError("An error occured. Please try again.")
        console.error("Axios error:", error)
    });

function createCards(arr) {
    return arr.map(({ _id, author, avatar_url, review }) => `
    <li class="card swiper-slide">
    <img src="${avatar_url}" alt="Author's photo">
    <div class="card-content">
    <p class="card-name">${author}</p>
    <p class="card-text"> ${review}</p>
    </div>
    </li>
    `).join("");
}

function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}