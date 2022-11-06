window.onscroll = function () {
    // if(window.pageYOffset >= 144.8000030517578){
    //     const scrollpercent = window.pageYOffset
    //     animation.seek((scrollpercent/speed * animation.duration));
    // }
    anime({
        targets: '.square',
        translateX: anime.stagger(150),
        delay: anime.stagger(500, { from: 'last' }),
        duration: 2000,
        autoplay: false
    });
};

