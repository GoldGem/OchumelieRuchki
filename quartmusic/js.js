jQuery(document).ready(function($){


/*--- [start] equal height columns with jquery---*/
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

$(document).ready(function() {
	equalHeight($('div.div'));
});

$('ul.sf-menu li').hover(function(){
	$(this).children('ul').stop(true, true).fadeIn();}, function(){
	$(this).children('ul').stop(true, true).fadeOut();
	});
$('.new').last().css('border','none');








































});