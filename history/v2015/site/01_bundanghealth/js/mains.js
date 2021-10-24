// JavaScript Document

/* GNB */
$(document).ready(function(){
	var param = $("#nav");
	var closeGNB;
	var timeout;
	
	param.find(">ul>li").addClass("action");
	
	param.find(">ul>li").mouseenter(function(){
		var t = $(this);
		var obj = t.find(">a img");
		var over_check = obj.attr("src");
		over_check = over_check.substr(over_check.lastIndexOf("on.gif"));
		if(over_check == "on.gif"){
			return false;
		}else{	
			obj.attr("src",obj.attr("src").replace(".gif","on.gif"));
		}
		param.addClass("open");
		param.find(">ul ul").slideDown(1);
		clearTimeout(closeGNB);
	});

	param.find(">ul>li").mouseleave(function(){
		var t = $(this);
		var obj = t.find(">a img");
		var over_check = obj.attr("src");
		over_check = over_check.substr(over_check.lastIndexOf("on.gif"));
		if(over_check == "on.gif"){
			obj.attr("src",obj.attr("src").replace("on.gif",".gif"));
		}else{	
			return false;
		}
	});
	
	param.mouseleave(function(){
		closeGNB = setTimeout(function(){
			param.removeClass("open");
			param.find(">ul ul").slideUp(1);
		},1);
	});
	
	

});

/* ov 이미지 롤오버 */
$(document).ready(function(){
	var param = $("#nav >ul ul a");
	
	param.bind("mouseover focus",function(){
		var t = $(this);
		var obj = t.find("img");
		var over_check = obj.attr("src");
		over_check = over_check.substr(over_check.lastIndexOf("on.gif"));

		if(over_check == "on.gif"){
			return false;
		}
		
		obj.attr("src",obj.attr("src").replace(".gif","on.gif"));
	});

	param.bind("mouseout blur",function(){
		var t = $(this);
		var obj = t.find("img");
		
		obj.attr("src",obj.attr("src").replace("on.gif",".gif"));
	});	
});

