// (function(){
	
// 	$('.empty').css('display','none');
// 	$(window).on("scroll", function() {
// 		if ($(window).scrollTop() > 45){
// 			$('.empty').css('display','block');
// 			$('.main-header').addClass('main-header-scroll');
// 		}
// 		else {
// 			$('.main-header').removeClass('main-header-scroll');
// 			$('.empty').css('display','none');
// 		}
// 	});


// })();

$(document).ready(function(){
	$('.building-slider .small-images .img-anim').on('click', function() {
		var path = $(this).find('img').attr('src');
		$('.building-slider .big-image img').attr('src', path);
	});
})

$(document).ready(function(){
	
	$('#question').click(function(event) {

		$('.top-header').animate({
			'margin-top': '170px'
		});

		$('.question-div-close').click(function() {
			$('.top-header').animate({
				'margin-top': '0'
			});
		});

	});

})