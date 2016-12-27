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
		}
		$('#hello-text').css('opacity', newTextOpacity);
	});
	
});


function simulateTyping()
{
	$("#hello-text").typed({
		strings: ["Hello.. I'm Rakesh.."],
		typeSpeed: 0.4
	});
}
