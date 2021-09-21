$(document).ready(function() {
/*PARALAX PAGE 1*/
    $("#container_image").mousemove(function(e) {
      parallaxIt(e, ".homepage_image", 15);
      parallaxIt(e, ".homepage p", 19);
    });
    
    function parallaxIt(e, target, movement) {
      var $this = $("#container_image");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
    
      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement,
      });
    }
/*SMOOTH SCROLLING VERTICAL*/
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1500);
        }
      });
 /*NAV RESP   
      $('#burger').click(function() {
        $('.undermenu').toggle();
    }); 
*/ 
    $("#burger").mouseover(function(){
        $(".undermenu").show();
        });
        $("body").click(function(){
        $(".undermenu").hide();
        });
    /*

    $("#burger").mouseover(function(){
        $(".undermenu").show();
        });
        $("#burger").mouseout(function(){
        $(".undermenu").hide();
        });
*/


});