$(function() {
	$(".btn-toggle").click(function() {
		x = $("#btn-x");
		x.toggleClass('icon-menu');
		x.toggleClass('icon-x');
		$("#side").animate({'width': 'toggle'}, 150);	
	});
});