document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-container');
   
    sliders.forEach(slider => {
        const sliderWrapper = slider.querySelector('.slider-wrapper');
        const slides = slider.querySelectorAll('.slide');
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        const pagination = slider.querySelector('.pagination');
   
        let currentIndex = 0;
        const totalSlides = slides.length;
   
        // 페이지네이션 도트 생성
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            pagination.appendChild(dot);
        }
   
        const dots = slider.querySelectorAll('.dot');
   
        function updateSlider() {
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active-dot', index === currentIndex);
            });
        }
   
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }
   
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
   
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
   
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
   
        // 자동 슬라이드 (옵션)
        setInterval(nextSlide, 6000);
    });
   });