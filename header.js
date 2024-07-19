window.addEventListener('scroll', () => {
    const hw = document.querySelector(".header-wrap");
    const hb = document.querySelector(".headerbefore");
    const hl = document.querySelector('#logo-img');
    
    const gnbLv2 = document.querySelectorAll('.gnb_list-lv2');
    const gnbLv2i = document.querySelectorAll('.gnb_item-lv2');
    
    const topBtn = document.querySelector('#topBtn');


    if (window.scrollY > 400) {
        hw.classList.add("blurbg");
        hb.style.display = "none";    
        hl.src = './img/logo/hl-b.png';

        gnbLv2.forEach(i=>{
            i.classList.add("gnb2");
        })
        gnbLv2i.forEach(i=>{
            i.classList.add("gnb2i");
        })
        topBtn.style.display = "block";
    } 
    else {
        hw.classList.remove("blurbg");
        hb.style.display = "block";    
        hl.src = './img/logo/hl.png';
        topBtn.style.display = "none";    

        gnbLv2.forEach(i=>{
            i.classList.remove("gnb2");
        })
        gnbLv2i.forEach(i=>{
            i.classList.remove("gnb2i");
        })
    }
})