$menu = document.getElementsByClassName('mobile_nav');
$(document).ready(function () {
    $('.button').on('click', function () {
        if ($('.button').hasClass('active_menu')) {
            $(this).removeClass('active_menu');
            $($menu).removeClass('active_mobile_nav');
        } else {
            $(this).addClass('active_menu');
            $($menu).addClass('active_mobile_nav');
        }
    })
})
    