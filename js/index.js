$(document).ready(function(){
	
	$("#car").css({"left": $(window).width() * 0.9, "top": $(window).height() / 4});
	$("#van").css({"left": $(window).width(), "top": $(window).height() / 4});
	$("#suv").css({"left": $(window).width() * 0.85, "top": $(window).height() / 3.6});

	$("#chopper").css({"left": $(window).width() * 0.5});
	$("#chopper").animate({
		top: $(window).height() / 8
	}, 5000, function(){
		$("#chopper").css({"transform": "rotate(20deg)"});

		$("#van").animate({
			left: $(window).width() * 0.9
		}, 5000, function(){
			$(this).css("opacity", 0);
			$("#explosion").css({"width": "7em", "height": "7em", "left": $(window).width() * 0.9, "top": $(window).height() / 4});
			$("#explosion").attr("src", "resources/explosion.gif");

			$("#explosion").fadeOut("slow");
		});


		$("#car").animate({
			left: $(window).width() * 0.5
		}, 9000);

		
		$("#suv").animate({
			left: $(window).width() * 0.5
		}, 9000);
	});

	$("#chopper").animate({
		left: $(window).width() * 0.9
	}, 10000, function(){
		$("#chopper").css({"transform": "rotate(0deg)"});
	});



	$("#balloon").css({"left": $(window).width() * 0.9});
	$("#balloon").animate({
		top: $(window).height() * 0.7,
	}, 6000);
	$("#balloon").animate({
		left: $(window).width() * 0.7
	}, 10000, function(){
		$("#balloon").animate({
			top: "5%",
		}, 8000);
	});





});