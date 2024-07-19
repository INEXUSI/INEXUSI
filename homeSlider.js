const slider = document.querySelector('.main_slide');
const images = document.querySelectorAll('.main_slide img');
const logo = document.querySelectorAll('.header-logo a img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active', 'initial');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// 초기 이미지 표시
images[currentIndex].classList.add('active');

// 4초마다 이미지 전환
setInterval(showNextImage, 5000);