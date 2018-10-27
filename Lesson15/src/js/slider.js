export default function slider() {

    let sliderIndex = 1,
        sliderItem = document.querySelectorAll('.slider-item'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot'),
        slidePrev = document.querySelector('.prev'),
        slideNext = document.querySelector('.next');

    let slideShow = (n) => {
        if (n < 1) n = sliderIndex = sliderItem.length;
        if (n > sliderItem.length) n = sliderIndex = 1;
        n--;

        sliderItem.forEach((item) => item.style.display = 'none');
        sliderItem[n].style.display = 'block';

        dots.forEach((item) => item.classList.remove('dot-active'));
        dots[n].classList.add('dot-active');
    };

    slideShow(sliderIndex);
    slidePrev.addEventListener('click', () => slideShow(--sliderIndex));
    slideNext.addEventListener('click', () => slideShow(++sliderIndex));
    
    dots.forEach((item, i) => {
        item.addEventListener('click', () => {
            sliderIndex = i + 1;
            slideShow(sliderIndex);
        });
    });

}