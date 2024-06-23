$(document).ready(function () {
    $(".tabs__button a").click(function() {
        $(".tabs__button a").removeClass('activetab');
        $(this).addClass('activetab');
        var ids = $(this).attr('href');
    

        $('.tech__head:visible').fadeOut(200, function() {

            $(ids).fadeIn(200);
        });
    
        return false;
    });
});

 


