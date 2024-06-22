$(document).ready(function () {
    // Hero Section Slider


    // Service Section Slider
    $('.owl-theme').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        // autoplay: true,
        // autoplayTimeout: 2000,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    

    $(".tabs__button a").click(function(){
        $(".tabs__button a").removeClass('active')
        $(this).addClass('active')
        var ids = $(this).attr('href')
        $('.tech__head').hide();
        $(ids).show();
        return false;
    })
});

 