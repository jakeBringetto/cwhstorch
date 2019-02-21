var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');


//buttons
var prevBtn = document.querySelector('#prev-button');
var nextBtn = document.querySelector('#next-button');

//counter
let counter = 1;
var size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//listener
nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'last-img'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    
    if(carouselImages[counter].id === 'first-img'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});

