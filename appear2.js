// 기존의 스크롤 애니메이션을 위한 observer
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ap-active2');
        }
    });
});

const fadeElements2 = document.querySelectorAll('.ap2');
fadeElements2.forEach((element) => observer2.observe(element));

// 최초 한 번만 적용되는 새로운 observer
const oneTimeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // #sec4가 화면에 나타났을 때
            setTimeout(() => {
                const sec2 = document.querySelector('#sec2');
                if (sec2) {
                    sec2.classList.add('active');
                    // #sec2의 accordion-content가 있다면 높이 조정
                    const content = sec2.querySelector('.accordion-content');
                    if (content) {
                        // sec2.querySelector('.accordion-trigger').click();
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                }
            }, 700); // 딜레이

            // 관찰 중단
            oneTimeObserver.unobserve(entry.target);
        }
    });
}, { once: true }); // once: true 옵션을 사용하여 한 번만 실행되도록 설정

// #sec4 요소 관찰 시작
const sec4 = document.querySelector('#sec4');
if (sec4) {
    oneTimeObserver.observe(sec4);
}