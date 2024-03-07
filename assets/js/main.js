// scroll header 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrolly >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// project 
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 300
    }
});

const linkProject = document.querySelectorAll('.project__item')

function activeProject(){
    linkProject.forEach(L=> L.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(L=> L.addEventListener('click', activeProject))

// education 
let swiperEducation = new Swiper(".education__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

// navigasi
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// animasi
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 400})
sr.reveal(`.home__social`, {delay: 400})
