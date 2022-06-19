const btnNext = document.querySelector('.button--right');
const btnPrevious = document.querySelector('.button--left');
const legends = document.querySelectorAll('.slider--legend');
const imgs = document.querySelectorAll ('.portfolio--slider__imgs img');
const indexes = document.querySelectorAll ('.sliderIndex');
const navBar = document.querySelector('nav');
const navMenu = document.querySelector('.nav--menu');
const hero = document.querySelector('#hero');
const services = document.querySelector('#services');
const portfolio = document.querySelector('#portfolio');
const competences = document.querySelector('#competences');
const testimonial = document.querySelector('#testimonial');
const navMenuAcceuil = document.querySelector('.nav--menu__Acceuil');
const navMenuServices = document.querySelector('.nav--menu__Services');
const navMenuPortfolio = document.querySelector('.nav--menu__Portfolio');
const navMenuCompetences = document.querySelector('.nav--menu__Competences');
const navMenuTestimonial = document.querySelector('.nav--menu__Testimonial');
const navMenuContact = document.querySelector('.nav--menu__Contact');
const form = document.querySelector('form');
const iconMobile = document.querySelector('.mobile--menu__icon');
const mobileMenu = document.querySelector('.mobile--nav');
const logo = document.querySelector('.nav--logo');
const scrollBar = document.querySelector('.scrollIndicator');
const body = document.querySelector("body")


const options = {
    root : null,
    rootMargin: "0px",
    threhold: 1
};

let index = 0;
let servicesTop = services.offsetTop;
let heroTop = hero.offsetTop;

const interval = setInterval(nextSlide, 4000);
btnNext.addEventListener('click', nextSlide);
btnPrevious.addEventListener('click', previousSlide);
window.addEventListener('scroll', fixedNav);

function nextSlide (){
    if(index < 2){
        imgs[index].classList.remove('img--isActive');
        legends[index].classList.remove('slider--legend__isActive')
        index++;
        imgs[index].classList.add('img--isActive');
        legends[index].classList.add('slider--legend__isActive')
    }else if (index === 2){
        imgs[index].classList.remove('img--isActive');
        legends[index].classList.remove('slider--legend__isActive')
        index = 0;
        imgs[index].classList.add('img--isActive');
        legends[index].classList.add('slider--legend__isActive')
    }  
    for(i=0; i < indexes.length; i++){
        if(indexes[i].getAttribute('data-clic') - 1 === index){
            indexes[i].classList.add('sliderIndex--isActive')
        }else{
            indexes[i].classList.remove('sliderIndex--isActive');
        }
    }
};

function previousSlide (){
    if(index > 0){
        imgs[index].classList.remove('img--isActive');
        legends[index].classList.remove('slider--legend__isActive')
        index--;
        imgs[index].classList.add('img--isActive');
        legends[index].classList.add('slider--legend__isActive')
    }else if (index === 0){
        imgs[index].classList.remove('img--isActive');
        legends[index].classList.remove('slider--legend__isActive')
        index = 2;
        imgs[index].classList.add('img--isActive');
        legends[index].classList.add('slider--legend__isActive')
    }  
    for(i=0; i < indexes.length; i++){
        if(indexes[i].getAttribute('data-clic') - 1 === index){
            indexes[i].classList.add('sliderIndex--isActive')
        }else{
            indexes[i].classList.remove('sliderIndex--isActive');
        }
    }
};

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        navMenuAcceuil.classList.add('isVisible');
    }else{
        navMenuAcceuil.classList.remove('isVisible');
    }
    });
});
const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        navMenuServices.classList.add('isVisible');
    }else{
        navMenuServices.classList.remove('isVisible');
    }
    });
});
const observer3 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        navMenuPortfolio.classList.add('isVisible');
    }else{
        navMenuPortfolio.classList.remove('isVisible');
    }
    });
});
const observer4 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        navMenuCompetences.classList.add('isVisible');
    }else{
        navMenuCompetences.classList.remove('isVisible');
    }
    });
});
const observer5 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        navMenuTestimonial.classList.add('isVisible');
    }else{
        navMenuTestimonial.classList.remove('isVisible');
    }
    });
});
const observer6 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        navMenuContact.classList.add('isVisible');
    }else{
        navMenuContact.classList.remove('isVisible');
    }
    });
});

observer.observe(hero);
observer2.observe(services);
observer3.observe(portfolio);
observer4.observe(competences);
observer5.observe(testimonial);
observer6.observe(form);

function fixedNav() {
  if (window.scrollY >= servicesTop) {    
    navBar.classList.add('isFixed');
    navMenu.classList.add('navTransition');
    logo.style.opacity = "0"
  } else if(window.scrollY <= heroTop){
    navBar.classList.remove('isFixed');
    navMenu.classList.remove('navTransition');
    logo.style.opacity = "1"
  }
}

iconMobile.addEventListener('click', () =>{
    iconMobile.classList.toggle('open');
    mobileMenu.classList.toggle('open')
});

const observerBar = new IntersectionObserver(handleIntersect).observe(body);
console.log(observerBar);
function handleIntersect(entries){
    const el = entries[0];
    if (el.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation)
    }else if (!el.isIntersecting){
        window.removeEventListener('scroll', indicatorAnimation)
    }
};

function indicatorAnimation(){
    if (window.scrollY > body.offsetTop){
        const percent =(( window.scrollY - body.offsetTop) / body.scrollHeight * 100).toFixed(2);
        scrollBar.style.transform = `scaleX(${percent}%)`
    }
}