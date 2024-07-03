
document.addEventListener('DOMContentLoaded', function () {
    var swiper1 = new Swiper('.slide-intro', {
        // spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            //움직이거나 누를시 슬라이드 정지
        },
        loop: true,
    });

    var isPaused = false;
    var pauseButton = document.createElement('button');
    pauseButton.className ='swiper-button-pause';
    pauseButton.textContent = '정지';
    document.querySelector('.slide-intro').appendChild(pauseButton);

    pauseButton.addEventListener('click', function () {
        if (isPaused) {
            swiper1.autoplay.start();
            pauseButton.textContent = '정지';
        } else {
            swiper1.autoplay.stop();
            pauseButton.textContent = '시작';
        }
        isPaused = !isPaused;
    });

    var swiper2 = new Swiper('.slide-eft .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });
});

