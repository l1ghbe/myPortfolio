const header = document.querySelector('.header');
const cardHtml = document.getElementById('card-html');
const cardCss = document.getElementById('card-css');
const cardJs = document.getElementById('card-js');
const cardPython = document.getElementById('card-python');
const progressName = document.querySelector('.progress-name');
const progressValue = document.querySelector('.progress-value');
const progressBarValue = document.querySelector('.progress-bar__value');
const dropDown = document.querySelector('.dropdown')
const en = document.querySelector('.dropdown-content-eng');
const ru = document.querySelector('.dropdown-content-rus');
const btnSpan = document.querySelector('.dropbtn-span');
const burger = document.querySelector('.header__burger-btn')
const menu = document.querySelector('.menu')
const links = document.querySelectorAll('.menu__list-link')
const home = document.getElementById('home')
const about = document.getElementById('about')
const skills = document.getElementById('skills')
const works = document.getElementById('works')
const contact = document.getElementById('contact')
const fullWords = document.querySelector('.skills__row-text-full')
const words = document.querySelector('.skills__row-text-word')
const settingsBtn = document.querySelector('.main__settings')
const settingsIcon = document.querySelector('.main__settings-icon')
const settingsColor = document.querySelector('.main__settings-colors')
const buttonDefault = document.querySelector('.main__colors-default')
const buttonDark = document.querySelector('.main__colors-dark')
const buttonLight = document.querySelector('.main__colors-light')
const theme = localStorage.getItem('theme')
const closeWPopup = document.querySelector('.popup-wrong__btn')
const closeSPopup = document.querySelector('.popup-success__btn')
const popupWrong = document.querySelector('.popup-wrong')
const popupSuccess = document.querySelector('.popup-success')
const popupSuccessBody = document.querySelector('.popup-success__body')
const allLang = ['en', 'ru']

VanillaTilt.init(document.querySelector(".about__card"), {
    max: 3,
    speed: 400,
    reverse: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1.06,
});
VanillaTilt.init(document.querySelectorAll(".grid-card__img"), {
    max: 25,
    speed: 1000,
    reverse: true,
});

const worksSwiper = new Swiper('.works-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    allowTouchMove: false,
    breakpoints: {
        100: {
            allowTouchMove: true,
        },
        692: {
            allowTouchMove: false
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

window.onscroll = () => {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}

function selectProgress(inner, innerValue, innerWidth, color = '#00EEFF') {
    progressName.innerHTML = inner;
    progressValue.innerHTML = innerValue;
    progressBarValue.style.width = innerWidth;
    progressBarValue.style.backgroundColor = color;
}

cardCss.addEventListener('click', () => {
    selectProgress('CSS', '81%', '81%');
}) 
cardHtml.addEventListener('click', () => {
    selectProgress('HTML', '93%', '93%');
}) 
cardJs.addEventListener('click', () => {
    selectProgress('JavaScript', '61%', '61%');
}) 
cardPython.addEventListener('click', () => {
    selectProgress('Python', 'Basics', '100%', 'purple');
}) 

//Language

function chooseLanguage(lang, btnLang = 'ENG', langHash = 'en') {
    lang.addEventListener('click', (e) => {
        e.preventDefault()
        if (true) {
            btnSpan.innerText = btnLang
            location.href = window.location.pathname + `#${langHash}`
        }
        for (key in langArray) {
            document.querySelector('.lg-' + key).innerHTML = langArray[key][langHash]
        }
    })
}

chooseLanguage(en, 'ENG', 'en')
chooseLanguage(ru, 'RU', 'ru')

//nav

links.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            if (true) {
                menu.classList.remove('active')
                dropDown.classList.remove('active')
                burger.classList.remove('active')
            }
        }, 350)
    })
})


//smooth transition

function smooth(nameClass, nameId) {
    document.querySelector(nameClass).addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(nameId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}

smooth('.lg-home', 'home')
smooth('.lg-about', 'about')
smooth('.lg-skills', 'skills')
smooth('.lg-contact', 'contact')
smooth('.lg-works', 'works')
smooth('.lg-contact-btn', 'works')
smooth('.lg-contact-btn-2', 'contact')

//burger

burger.addEventListener('click', (e) => {
    e.preventDefault()
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    dropDown.classList.toggle('active')
})

//active nav link

const sections = [home, about, skills, works, contact]

const options = {
    threshold: 0.85
}

function navCheck(entries) {
    entries.forEach(entry => {     
        const id = entry.target.id        
        const activeAnchor = document.querySelector(`[data-page=${id}]`)
        if (entry.isIntersecting) {
            activeAnchor.parentNode.classList.add('active-section')
        } else {
            activeAnchor.parentNode.classList.remove('active-section')
        }
    })
}

let observer = new IntersectionObserver(navCheck, options)

sections.forEach(section => {
    observer.observe(section)
})




words.addEventListener('click', () => {
    fullWords.classList.toggle('active')
})



if (theme) {
    document.body.classList.add(theme)
}


settingsIcon.addEventListener('click', () => {
    settingsIcon.classList.toggle('active')
    settingsColor.classList.toggle('active')
})

buttonDefault.addEventListener('click', () => {
    document.body.classList.add('default')
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
    localStorage.setItem('theme', 'default')
})
buttonDark.addEventListener('click', () => {
    document.body.classList.remove('default')
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    localStorage.setItem('theme', 'dark')
})
buttonLight.addEventListener('click', () => {
    document.body.classList.remove('default')
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    localStorage.setItem('theme', 'light')
})

//loader

const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden')

    }, 4000)
    setTimeout(() => {
        loader.remove()
    }, 8000)
})


function removeNotificationActive(element) {
    element.classList.remove('notification-active')
}

function btnListener(btnElement, popupElement) {
    btnElement.addEventListener('click', (e) => {
        e.preventDefault()
        popupElement.classList.remove('notification-active')
    })
}

btnListener(closeWPopup, popupWrong)
btnListener(closeSPopup, popupSuccess)

//Close clicking bg

function backgroundClose(popupEl, popupClass) {
    popupEl.addEventListener('click', e => {
        if (e.target.classList.contains(popupClass)) {
            removeNotificationActive(popupEl)
        }
    })
}

backgroundClose(popupSuccess, 'popup-success')
backgroundClose(popupWrong, 'popup-wrong')







// ---------------------

ScrollReveal().reveal('.main__row-title', {
    delay: 200,
    duration: 700,
    origin: 'left',
    scale: 1,
    easing: 'ease-in-out',
    distance: '100px'
})
ScrollReveal().reveal('.main__row-description', {
    delay: 700,
    duration: 700,
    origin: 'left',
    scale: 1,
    easing: 'ease-in-out',
    distance: '100px'
})
ScrollReveal().reveal('.title__text', { 
    // reset: true,
    origin: 'bottom',
    duration: 1000,
    delay: 500,
    distance: '15px',
    scale: 1,
})
ScrollReveal().reveal('.title__subtext', { 
    reset: true,
    origin: 'left',
    duration: 1000,
    // delay: 500,
    distance: '15px',
    easing: 'ease-in-out',
    scale: 1,
})
ScrollReveal().reveal('.subtext-right', { 
    reset: true,
    origin: 'right',
    duration: 1000,
    // delay: 500,
    distance: '15px',
    easing: 'ease-in-out',
    scale: 1,
})
ScrollReveal().reveal('.grid-card__img', {
    origin: 'top',
    duration: 1000,
    delay: 800,
    distance: '5px',
    easing: 'ease-in-out',
    scale: 1.5,
    rotate: {
        x: 10,
        y: 10
    }
})
ScrollReveal().reveal('.grid-card__title', {
    origin: 'bottom',
    duration: 1000,
    delay: 1500,
    distance: '25px',
    easing: 'ease-in-out',
    scale: 1,
})
ScrollReveal().reveal('.works-slider', {
    origin: 'right',
    // reset: true,
    duration: 1000,
    delay: 1000,
    distance: '15px',
    easing: 'ease-in-out',
    scale: 1,
})
ScrollReveal().reveal('.about__card', {
    origin: 'bottom',
    // reset: true,
    duration: 1000,
    delay: 1000,
    distance: '25px',
    easing: 'ease',
    scale: 1,
})
ScrollReveal().reveal('.card__content-title', {
    origin: 'top',
    duration: 1000,
    delay: 1500,
    distance: '25px',
    easing: 'ease',
    scale: 1,
})
ScrollReveal().reveal('.card__text-question', {
    origin: 'left',
    duration: 1000,
    delay: 2000,
    distance: '15px',
    easing: 'ease',
    scale: 1,
})
ScrollReveal().reveal('.card__text-answer', {
    origin: 'left',
    duration: 1000,
    delay: 2500,
    distance: '25px',
    easing: 'ease',
    scale: 1,
})
// ScrollReveal().reveal('.footer-text', {
//     origin: 'left',
//     duration: 1000,
//     distance: '25px',
//     easing: 'ease',
//     scale: 1,
// })
ScrollReveal().reveal('.footer-contacts', {
    origin: 'top',
    duration: 1000,
    delay: 500,
    distance: '25px',
    easing: 'ease',
    scale: 1,
})

