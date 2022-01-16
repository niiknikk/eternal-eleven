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
// footer year

const d = new Date();
let year = d.getFullYear();
document.getElementById('year').innerText = year




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
