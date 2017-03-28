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


     <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#accordion" ).accordion();
  } );
  </script>

  <script>
$( "#accordion" ).accordion();
</script>


})();