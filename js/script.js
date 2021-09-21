

/*JELLY LETTERS*/
$(document).ready(function () {
  var letters = $('h1').text();
  var nHTML = '';
  for (var letter of letters) {
    nHTML += "<span class='a'>" + letter + "</span>";
  }
  $('h1').html(nHTML);
});
$(document).ready(function () {
  var letters = $('h2').text();
  var nHTML = '';
  for (var letter of letters) {
    nHTML += "<span class='a'>" + letter + "</span>";
  }
  $('h2').html(nHTML);
});

//PARALLAX AVATAR
$(document).ready(function () {
  $("html").mousemove(function(e) {
    parallaxIt(e, ".face", 2);
    parallaxIt(e, ".inner-face", 3);
    parallaxIt(e, ".shadow", 0.8);
    parallaxIt(e, ".head", 1.5);
    parallaxIt(e, ".eyes", 8);
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

/*3D SPHERE*/
var entries = [ 
 
  { label: 'BOOTSTRAP', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'CSS', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'HTML', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'SASS', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'MYSQL', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'PHP', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'SYMFONY', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'JAVASCRIPT', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'JQUERY', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'GIT', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'WORDPRESS', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'JMERISE', url: 'projects/skills/skills.html', target: '_top' },
  { label: 'PRESTASHOP', url: 'projects/skills/skills.html', target: '_top' }

];



var settings = {

  entries: entries,
  width: 480,
  height: 480,
  radius: '60%',
  radiusMin: 75,
  bgDraw: false,
  bgColor: 'rgb(93, 93, 95)',
  opacityOver: 1.00,
  opacityOut: 0.05,
  opacitySpeed: 6,
  fov: 500,
  speed: 1,
  fontFamily: 'Oswald, Arial, sans-serif',
  fontSize: '20',
  fontColor: '#fff',
  fontWeight: 'bold',//bold
  fontStyle: 'normal',//italic 
  fontStretch: 'wider',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  fontToUpperCase: true,
  tooltipFontFamily: 'Oswald, Arial, sans-serif',
  tooltipFontSize: '20',
  tooltipFontColor: '#fff',
  tooltipFontWeight: 'normal',//bold
  tooltipFontStyle: 'normal',//italic 
  tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  tooltipFontToUpperCase: false,
  tooltipTextAnchor: 'left',
  tooltipDiffX: 0,
  tooltipDiffY: 10

};

$( '.tagcloud' ).svg3DTagCloud( settings );



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



/*NAV FUNCTIONS*/
$(function() {
	$('nav a').on('click', function() {
		var offset = 0;
		var speed = 800;
		var target = $(this.hash);

		$('nav a').each(function() {
			$(this).removeClass('active');
		});

		$(this).addClass('active');

		$('html, body').animate({
			scrollTop: target.offset().top - offset
		}, speed, 'swing'); });

});

$(window).scroll(function(event) {
	var scrollPos = $(document).scrollTop();
	console.log(scrollPos);
	$('nav a').each(function() {
		var curLink = $(this);
		var refElement = $(curLink.attr('href'));

		if (refElement.position().top <= scrollPos + 60) {
			$('nav a').removeClass('active');
			curLink.addClass('active');

		} else {
			curLink.removeClass('active');
		}
	});
});



/*SCROLL MOUSEWHEEL TO SECTION*/
(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByTagName('section');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    
    if(i >= 0 && i < a.length) {
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      });
    }
  });
})();
console.clear();


/* skills animations */

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

/*RESPONSIVE MENU*/
$(".nav-btn").click(function(){
  $("#menu").toggleClass("active");
  $(".nav-btn").toggleClass("active"); 
});

$(".navigation a").click(function(){
  $(".nav-btn").toggleClass("active");
  $("#menu").toggleClass("active");
  
});

/*CAROUSEL*/
$(document).ready(function(){

  $("#myCarousel").carousel({

      interval : 3500,

      pause: false

  });

});

