$(".owl-carousel").owlCarousel({
    // loop: true,
    // item:6,
    // margin: 20,
    responsiveClass: true,
    dots: true,
    nav: true,
    autoHeight:true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    autoplayHoverPause: true,
    // navText: [$('.am-next'),$('.am-prev')],
    navText: ["<",">"],
    responsive: {
        0: {
            items: 2,
            nav: true,
        },
        600: {
            items: 3,
            nav: true,
        },
        1000: {
            items: 5,
            nav: true,
        }
    }
});

// $(".owl-carousel").owlCarousel({
//     // you can use jQuery selector
//     navText: [$('.am-next'),$('.am-prev')]
 
// });