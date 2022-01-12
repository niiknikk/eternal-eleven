
// for adding scroll effect on navbar
// window.addEventListener('scroll', fixNav);

// function fixNav() {
//         const nav = document.querySelector('nav')
//         if (window.scrollY > nav.offsetHeight + 100) {
//                 nav.classList.add('nav-scroll-effect');
//         }
//         else {
//                 nav.classList.remove('nav-scroll-effect');
//         }
// }

const navSlide = () => {
        const menu = document.querySelector('.hamburger-menu')
        const nav = document.querySelector('.nav-links')
        const navLinks = document.querySelectorAll('.nav-links li')

        menu.addEventListener('click', () => {
                nav.classList.toggle('nav-active')

                menu.classList.toggle('toggle')

                navLinks.forEach((item, index) => {
                        if (item.style.animation) {
                                item.style.animation = ''
                        } else {
                                item.style.animation = `navLinkFade 0.35s ease forwards ${index / 7 + 1}s `;
                        }
                })
        })
}
navSlide()



// Youtube Video popup
const showVideo = document.getElementById('show-video');
const youtubePopup = document.querySelector('.youtube')
showVideo.addEventListener('click', () => {
        youtubePopup.classList.add('active')
        console.log(youtubePopup.classList);
})

window.addEventListener('click', (e) => {
        console.log(e.target);
        e.target == youtubePopup ? youtubePopup.classList.remove('active') : false
})
