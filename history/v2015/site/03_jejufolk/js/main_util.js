
function tabMenu(tName){
	$(tName+" ul").not(":first").hide();
	$(tName+" p").not(":first").hide();
	$(tName+">li>h3>a").mouseover(function(){
		$(tName+" ul").hide();
		$(tName+" p").hide();
		$(this).parent().siblings("ul").show();
		$(this).parent().siblings("p").show();
		$(tName+">li>h3>a>img").each(function(){
			$(this).attr("src",$(this).attr("src").replace("_on.gif","_off.gif"))
		})
		$(">img",this).attr("src",$(">img",this).attr("src").replace("_off.gif","_on.gif"))
	})
	$(tName+">li>h3>a").click(function(){
		return false;
	})
}

$(function(){
	tabMenu(".b02tab");
	
})







