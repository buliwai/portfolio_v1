



/*SHOW ON SCROLL*/

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}






/* skill animations */

$(document).ready(function(){
	
  $("#skillbar_css").animate({width:'80%'},1500);
  $("#skillbar_bootstrap").animate({width:'85%'},1500);
  $("#skillbar_sass").animate({width:'70%'},1500);
  $("#skillbar_jquery").animate({width:'60%'},1500);
  $("#skillbar_mysql").animate({width:'60%'},1500);
  $("#skillbar_php").animate({width:'70%'},1500);
  $("#skillbar_prestashop").animate({width:'75%'},1500);
  $("#skillbar_wordpress").animate({width:'75%'},1500);
  
  });
  /* BACK BUTTON*/
  function rtn() {
     window.history.back();
  }
  
//PARALLAX EFFECT
$(document).ready(function () {
  $("html").mousemove(function(e) {
    parallaxIt(e, "#text_container", 2);
    parallaxIt(e, "#wrapper", 10);
  
    parallaxIt(e, "img", 0);//bouge img de fond
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $("html");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement,
    });
  }
  })

  
