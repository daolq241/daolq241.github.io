const toggle = document.getElementById("toggle");

const navMini = document.querySelector(".nav-mini");
const navBig = document.querySelector(".nav-big");
const navBigId = document.getElementById('navBig')

const navHeaderId = document.getElementById('nav-section-header')

const nav = document.querySelector(".nav")
const navId = document.getElementById('nav')

const content = document.querySelector(".content")
const overlay = document.getElementById('overlay')

// toggle.addEventListener('click', showHideNav)

function showHideNav() {

    if (window.innerWidth >= 1024) {
        navMini.classList.toggle('hide')
        navBig.classList.toggle('show')

        // navHeaderId.style.display = 'none'  
        navBigId.style.top = '56px'
        navBig.classList.toggle('nav-width-big')
        content.classList.toggle('content-width')
    }

    if (window.innerWidth <= 1023) {
        overlay.style.display = 'block'

        // navBig.style.top = 0
        navHeaderId.style.display = 'block'
        navBig.style.display = 'block'


        window.onclick = function (event) {
            if (event.target == overlay) {
                overlay.style.display = "none";
                navHeaderId.display = 'none'
                navBig.style.display = 'none'
            }
        }
    }

}
