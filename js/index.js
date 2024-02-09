document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlide(slideIndex);

    function showSlide(index) {
        const slidesImg = document.querySelectorAll('.slide');
        const slidesText = document.querySelectorAll('.slide-text');

        if (index >= slidesImg.length) { slideIndex = 0; }
        if (index < 0) { slideIndex = slidesImg.length - 1; }

        slidesImg.forEach((slide)=>{
            slide.classList.remove('active');
        });

        slidesText.forEach((slideText)=>{
            slideText.classList.remove('active');
        });

        slidesImg[slideIndex].classList.add('active');
        slidesText[slideIndex].classList.add('active');
    }

    document.querySelector('.prev').addEventListener('click', function() {
        showSlide(--slideIndex);
    });

    document.querySelector('.next').addEventListener('click', function() {
        showSlide(++slideIndex);
    });
});

const mobileNavBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

mobileNavBtn.addEventListener('click', ()=>{
    const visible = nav.getAttribute('data-visible');

    if(visible === "false"){
        nav.setAttribute('data-visible', 'true');
        mobileNavBtn.setAttribute('data-expanded', 'true');
        body.setAttribute('data-expanded', 'true');
    }else{
        nav.setAttribute('data-visible', 'false');
        mobileNavBtn.setAttribute('data-expanded', 'false');
        body.setAttribute('data-expanded', 'false');
    }
})