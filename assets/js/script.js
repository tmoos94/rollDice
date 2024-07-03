const BODY = document.querySelector('body'); //scrolling
const HTML = document.querySelector('html');
const fixedTop = document.querySelector('.fixedTop');


// floating button
window.addEventListener('scroll', function () {
    //fixed scroll btn

    let i = this.document.documentElement.scrollTop

    console.log(i);
    if (i > 400) {
        BODY.classList.add('scrolling');
    }
    else {
        BODY.classList.remove('scrolling');
    }
});

fixedTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
