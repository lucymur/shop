(function () {
    var $window = $(window);
    var $header = $('#header');

    $window.on('scroll', function () {
        if ( $window.scrollTop() > 200 ) {
            $header.addClass('header-fixed');
        } else {
            $header.removeClass('header-fixed');
        }
    });



    $('.toogle_menu').on('click', function () {
    	$('.layout').toggleClass('mobile-nav-opened');
    	return false;
    });

})();