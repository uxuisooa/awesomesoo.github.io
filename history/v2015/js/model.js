$(function(){
                
	$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>"); //
	
	$("#glayLayer").click(function(){ // 배경을 클릭하면
		$(this).hide(); //이것을 지우고
		$("#overLayer").hide(); //이미지도 지우고 
	});
	
	$("a.modal").click(function(){ //클릭하면
		$("#glayLayer").show(); //배경을 보여주고
		$("#overLayer").show().html("<img src='" + $(this).attr("href") + "'/>"); //이미지 태그를 #overLayer에 넣어서 보여줘라.
		return false;
	});
});