const btnNext = document.querySelector('.button--right');
const btnPrevious = document.querySelector('.button--left');
const legends = document.querySelectorAll('.slider--legend');
const imgs = document.querySelectorAll ('.portfolio--slider__imgs img');
const indexes = document.querySelectorAll ('.sliderIndex');
const navBar = document.querySelector('nav');
const hero = document.querySelector('#hero');
const services = document.querySelector('#services');
const portfolio = document.querySelector('#portfolio');
const competences = document.querySelector('#competences');
const testimonial = document.querySelector('#testimonial');
const form = document.querySelector('form');
const navMenuAcceuil = document.querySelector('.nav--menu__Acceuil');
const navMenuServices = document.querySelector('.nav--menu__Services');
const navMenuPortfolio = document.querySelector('.nav--menu__Portfolio');
const navMenuCompetences = document.querySelector('.nav--menu__Competences');
const navMenuTestimonial = document.querySelector('.nav--menu__Testimonial');
const navMenuContact = document.querySelector('.nav--menu__Contact');


let index = 0;

btnNext.addEventListener('click', nextSlide);
const interval = setInterval(nextSlide, 4000);

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

btnPrevious.addEventListener('click', previousSlide);

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

const options = {
    root : null,
    rootMargin: "0px",
    threhold: 1
}



const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        console.log(entries);
        navMenuAcceuil.classList.add('isVisible');
    }else{
        navMenuAcceuil.classList.remove('isVisible');
    }
    });
});
const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        console.log(entries);
        navMenuServices.classList.add('isVisible');
    }else{
        navMenuServices.classList.remove('isVisible');
    }
    });
});
const observer3 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        console.log(entries);
        navMenuPortfolio.classList.add('isVisible');
    }else{
        navMenuPortfolio.classList.remove('isVisible');
    }
    });
});
const observer4 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        console.log(entries);
        navMenuCompetences.classList.add('isVisible');
    }else{
        navMenuCompetences.classList.remove('isVisible');
    }
    });
});
const observer5 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        console.log(entries);
        navMenuTestimonial.classList.add('isVisible');
    }else{
        navMenuTestimonial.classList.remove('isVisible');
    }
    });
});
const observer6 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
    if(entries[0].intersectionRatio !== 0) {
        console.log(entries);
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

let servicesTop = services.offsetTop;
let heroTop = hero.offsetTop;

function fixedNav() {
  if (window.scrollY >= servicesTop) {    
    navBar.classList.add('isFixed');
  } else if(window.scrollY <= heroTop){
    navBar.classList.remove('isFixed');    
  }
}

window.addEventListener('scroll', fixedNav);

