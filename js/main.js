const menuBtn = document.querySelector('.menu__btn');
const nav = document.querySelector('.nav');
const noScroll = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');

menuBtn.addEventListener('click', function(){
    nav.classList.toggle('nav--active');
    noScroll.classList.toggle('--no-scroll')
    menuBtn.classList.toggle('menu__btn--active')
    wrapper.classList.toggle('wrapper--active')
});


window.onclick = function(event){
    let target = event.target 

    if (target === wrapper){
        nav.classList.remove('nav--active')
        noScroll.classList.remove('--no-scroll')
        menuBtn.classList.remove('menu__btn--active')
        wrapper.classList.remove('wrapper--active')
    }
}

