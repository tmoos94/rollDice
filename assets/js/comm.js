
// <!-- Initialize Swiper -->

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });

  

  ////////////////////////////////////

  let funcObj = {
    f_0: function () {
        const tl = gsap.timeline()

        tl.to('.sec00 .inner div', {
            opacity: 1,
            stagger: .3,
            rotationX: 360
        })
        tl.to('.sec00 .s0_txt', {
            opacity: 1,
            stagger: .1
        })
        tl.to('.sec00 .menu_wrap > * ', {
            opacity: 1,
            stagger: .3
        })
    },
    f_2: function () {
      console.log(2)
      
      const tl = gsap.timeline()

        tl.to('.sec02 .notice .inner', {
          opacity: 1,
          stagger: .3,
          x: -10
      })
      tl.to('.sec06 .pic_box', {
          left: '1rem',
      })
  },
          
    f_6: function () {
      console.log(6)
      const tl = gsap.timeline()

        tl.to('.sec06 .tit_pro span', {
            opacity: 1,
            stagger: .2,
            rotationX: 360
        })
        tl.to('.sec06 .pro_wrap > * ', {
            opacity: 1,
            stagger: .3,
            x: -10
        })
        tl.to('.sec06 .pic_box', {
            left: '1rem',
        })
    },
}
funcObj['f_0']()

