$(document).ready(function(){
	// Carousel 
	// Without plugins

	// Vars
	var widthCarousel = $("#carousel").width();
	var qdadeSlides = $("#carousel").find("article").length;
	var widthCanvas = $("#carousel").find("img").width() + 2;

	// Set strip size, one image after another
	$("#carousel").find(".mask").width(widthCanvas*qdadeSlides);

	// Set all slides visible (css hidden)
	$("#carousel").find("article").show().width(widthCarousel);

	// Create buttons if there is more then 1 picture
	if(qdadeSlides>1){
		$("#carousel").append("<div class='back'><</div>");
		$("#carousel").append("<div class='go'>></div>");
	}

	// when "back" is trigged
	$(".back").click(function(){
		// if it isn't the beggining
		if($(".mask").css("left") != "0px"){
			$(".mask").animate({
				left: "+="+widthCarousel+"px"
			}, 500);
		}
	});

	// when "go" is trigged
	// define last position
	var maxLeft = widthCanvas * (qdadeSlides-1) * -1;	
	
	$(".go").click(function(){
		var positionMask = $('.mask').position();
		var positionMaskLeft = positionMask.left - widthCanvas;

		if(positionMaskLeft > maxLeft){
			$(".mask").animate({
				left: "-="+widthCarousel+"px"
			}, 500);
		}

	});
});