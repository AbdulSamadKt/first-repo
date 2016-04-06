jQuery(document).ready(function($) {
var myflag=true;
function slide_up($v){
    // Check chrome browser
	if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()))
    // Check trackpad
		if($v== -3) myflag=false;

	$(".et_pb_row_0").addClass("animate-0");
	$(".et_pb_row_1").addClass("animate-1");
}
function slide_down(){
	if(myflag){
		$(".et_pb_row_0").removeClass("animate-0");
		$(".et_pb_row_1").removeClass("animate-1");}
		else 
			myflag=true;
	}
	$(".arrow-down").click(function(){
		slide_up();
		
	});
				
	$(window).bind('mousewheel DOMMouseScroll', function(event){
		if (event.originalEvent.wheelDelta < 0|| event.originalEvent.detail > 0){
			slide_up(event.originalEvent.wheelDelta);
		}
		else {
			slide_down();
		}
	});	
});
