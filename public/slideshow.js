$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
var slideIndex = 1;
var myTimer;
var slideshowContainer;
window.addEventListener("load", function () {
	showSlides(slideIndex);
	myTimer = setInterval(function () {
		plusSlides(1);
	}, 4000);
//UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
	slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
slideshowContainer.addEventListener("mouseenter", pause);
slideshowContainer.addEventListener("mouseleave", resume);
});
// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
	clearInterval(myTimer);
	if (n < 0) {
		showSlides((slideIndex -= 1));
	} else {
		showSlides((slideIndex += 1));
	}
	//COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
	if (n === -1) {
		myTimer = setInterval(function () {
			plusSlides(n + 2);
		}, 4000);
	} else {
		myTimer = setInterval(function () {
			plusSlides(n + 1);
		}, 4000);
	}
}
//Controls the current slide and resets interval if needed
function currentSlide(n) {
	clearInterval(myTimer);
	myTimer = setInterval(function () {
		plusSlides(n + 1);
	}, 4000);
	showSlides((slideIndex = n));
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
pause = () => {
	clearInterval(myTimer);
};
resume = () => {
	clearInterval(myTimer);
	myTimer = setInterval(function () {
		plusSlides(slideIndex);
	}, 4000);
};
