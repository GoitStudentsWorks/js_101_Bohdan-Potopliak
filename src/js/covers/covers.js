import { coverImages } from './img-import.js';

  export  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

export const initializeCovers = () => {
  const rows = document.querySelectorAll('.covers-row');
  rows.forEach((row,) => {
    const list = row.querySelector('.covers-list');
    const speed = row.dataset.speed;

    const shuffledImages = shuffleArray([...coverImages]);

    for (let i = 0; i < 200; i++) {
      const li = document.createElement("li");
      li.classList.add('covers-item');

      const img = document.createElement('img');
      const currentImage = shuffledImages[i % shuffledImages.length];

      img.src = currentImage.src1x;
      img.srcset = `${currentImage.src1x} 1x, ${currentImage.src2x} 2x`;
      img.alt = currentImage.alt;

      li.appendChild(img);
      list.appendChild(li);
    }

    list.style.animationDuration = `${speed}s`;
  });
};