// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch(["highres-webp/tm-bg-slide-1.webp",
				       "highres-webp/tm-bg-slide-2.webp",
				       "highres-webp/tm-bg-slide-3.webp",
				       "highres-webp/tm-bg-slide-4.webp"
	 			], 	{duration: 3200, fade: 1300});
		});
})

// CLICK IMAGE TO ROTATE FOR FUN :D
// Thanks to Arun https://stackoverflow.com/questions/16641619/javascript-click-to-rotate-image-infinitely-and-click-again-to-stop
$(function() {
    
    var $rota = $('#profile_img')
	
	//.click is deprecated, use .on and 'click'
    $rota.on('click',function(){
        var $this = $(this);
        
        if($this.data('rotating')){
            clearInterval($this.data('rotating'));
            $this.data('rotating', false)
        } else {
            $this.data('rotating', setInterval(function(){
                var degree = $this.data('degree') || 0;
                $this.css({ transform: 'rotate(' + degree + 'deg)'});
                $this.data('degree', ++degree)
            }, 5));
        }
    });
    
});
