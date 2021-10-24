$(function(){
	$("#bt_search").click(function(){ //클릭하면
		$("#bg_search").show(); //배경을 보여주고
		return false;
	});
});

$(document).ready(function(){ //DOM이 준비되고
    $('#toggleButton2').click(function(){ // #toggleButton2를 클릭하면
        $('#moreMenu2').toggle(); // #moreMenu2를 알아서 토.글!
    });
});