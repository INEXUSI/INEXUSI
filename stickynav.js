let nav = document.getElementById('sticky-nav');
let header = document.querySelector('header');
let lh = document.querySelector('.local-head');
// const lhC = document.querySelector('.local-head');
const navHeight = nav.clientHeight;
let navTop = nav.offsetTop - navHeight;

function stickyNav() {
    if (window.scrollY >= navTop) {        
        nav.classList.add('nav-fixed');
        lh.style.marginBottom = navHeight + 20 +  "px";
    } else {
        nav.classList.remove('nav-fixed');
        lh.style.marginBottom = "0px";
    }
}

window.addEventListener('scroll', stickyNav);