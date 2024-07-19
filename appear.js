
// =============== 전체 스크롤 애니메이션 ================
const observer = new IntersectionObserver((arr) => {
    arr.forEach((e) => {
        if(e.isIntersecting){
            e.target.classList.add('ap-active');
        }
    })
})
const fadeElements = document.querySelectorAll('.ap');
fadeElements.forEach((e) => observer.observe(e));