const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
        enabled: true,
        delay: 3000,
    },
    on: {
        init() {
        this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
        });
        }
    },

    // Navigation arrows


    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });


let slides = 3;
let space = "144px"
if (window.innerWidth < 1750){
    slides = 2
}
if (window.innerWidth < 1200){
    space = "0px"
}

if (window.innerWidth < 700){
    slides = 1

}



    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        slidesPerView: 'auto',
        speed: 1000,
        slidesPerView : slides,
        spaceBetween : space,
    
        // Navigation arrows
    
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        });