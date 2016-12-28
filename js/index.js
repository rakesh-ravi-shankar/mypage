$(document).ready(function(){

	$('#dp').css('width', $(window).width());
	$('#dp').css('height', $(window).height());

	$('#hello-text').css('top', $(window).height() / 1.8);
	var startedTyping = false;

	var maxScroll = 200;//$('#dp').height() - $(window).height();
	$(window).scroll(function(){
		$('#dp').css('opacity', (maxScroll - $(window).scrollTop()) / maxScroll);
		var newTextOpacity = $(window).scrollTop() / maxScroll;
		if (!startedTyping && newTextOpacity > 0.6) {
			simulateTyping();
			startedTyping = true;
			animateWebIcon();
			animateGameIcon();
		}
		$('#hello-text').css('opacity', newTextOpacity);
	});

});


function simulateTyping()
{
	$("#hello-text").typed({
		strings: ["Hello.. I'm Rakesh.."],
		typeSpeed: 0.4,
		showCursor: false
	});
}


function animateWebIcon()
{
	$('#web-dev-icon').fadeTo("slow", 1);
	$('#web-dev-icon').animate({
		"margin-left": "10%",
		"margin-right": "10%"
	}, 1000, function(){
		$(this).css("display", "inline");
		$(this).closest('div').attr("class", "col-md-4");
		$(this).closest('div').after("<div class='col-md-8 well' id='web-dev-content'></div>");
		$("#web-dev-content").css({"display": "inline", "background": "#323232", "color": "white", "text-align": "left"});
		$("#web-dev-content").load("../content/web-dev-content.html");

	});
}

function animateGameIcon()
{
	$('#game-dev-icon').fadeTo("slow", 1);
	$('#game-dev-icon').animate({
		"margin-left": "10%",
		"margin-right": "10%"
	}, 1000, function(){
		$(this).css("display", "inline");
		$(this).closest('div').attr("class", "col-md-4");
		$(this).closest('div').after("<div class='col-md-8 well' id='game-dev-content'></div>");
		$("#game-dev-content").css({"display": "inline", "background": "#323232", "color": "white", "text-align": "left"});
		$("#game-dev-content").load("../content/game-dev-content.html");
	});
}












