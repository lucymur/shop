;(function () {

  var followImages = [];
  var textMargin = .85;

  var initImageFollow = function(i, elm) {
    var $elm = $(elm),
        $parent = $elm.parent().css('position', 'relative');
    followImages.push({
      elm: $elm,
      parent: $parent
    });
  };

  var checkResize = function() {
    var w = window.innerWidth,
        h = window.innerHeight;
    for (var i in followImages) {
      followImages[i].elm.width(w).height(h);
      followImages[i].parent.css('padding-top', (h*textMargin)+'px');
    }
    checkScroll();
  };

  var checkScroll = function() {
    var wh = window.innerHeight,
        ws = $(window).scrollTop(),
        wb = ws+wh;
    for (var i in followImages) {
      var es = followImages[i].parent.offset().top,
          eb = es + followImages[i].parent.innerHeight();
      if (eb < wb) {
        followImages[i].elm.removeClass('follow').addClass('follow-bottom');
      } else if (es < ws) {
        followImages[i].elm.removeClass('follow-bottom').addClass('follow');
      } else {
        followImages[i].elm.removeClass('follow follow-bottom');
      }
    }
  };

  $('[data-image-follow]').each(initImageFollow);
  $(window)
    .on('scroll touchmove', checkScroll)
    .on('resize', checkResize)
    .trigger('resize');
})();