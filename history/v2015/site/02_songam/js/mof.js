

/** onload *********************************************************/
$(document).ready(function() {
	
	/*
	//tabService-text
	$('#textTabService > ul > li:eq(0) > a:eq(0)').parent().find('div').show();
	$('#textTabService > ul > li:eq(0)').addClass('tabService_on');
	$('#textTabService > ul > li > a').bind('click',function (){
		$('#textTabService > ul li').removeClass().addClass('tabService_off');
		$(this).parent().addClass('tabService_on');
		$('#textTabService > ul > li > a').parent().find('div:eq(0)').hide();
		var height = $(this).parent().find('div:eq(0)').height();
		$(this).parent().find('div').show();
		return false;
	});
	
	//tabService-img
	$('#imgTabService > ul > li:eq(0) > a:eq(0)').parent().find('div').show();
	$('#imgTabService > ul > li:eq(0) > a:eq(0) img').attr('src',function(){return $(this).attr('src').replace('_off','_on');});
	$('#imgTabService > ul > li > a').bind('mouseover',function (){
		$('#imgTabService > ul > li > a img').attr('src',function(){return $(this).attr('src').replace('_on','_off');});
		$(this).children('img').attr('src', $(this).children('img').attr('src').replace('_off','_on'));
		$('#imgTabService > ul > li > a').parent().find('div:eq(0)').hide();
		var height = $(this).parent().find('div:eq(0)').height();
		$(this).parent().find('div').show();
		return false;
	});
	*/
	
	
	var positionLeft;
	$('#btnAllMenuOpen, #btnAllMenuClose').bind('click', function(){
		
		if($('#wrap').css('left') != '-190px'){
			positionLeft = '-190px';
		}else{
			positionLeft = '0px';
		}
		
		if(positionLeft == '-190px'){
			$('#all_menu_wrap').show();
		}
		
		$('#wrap').animate(
			{	
				left: positionLeft
			},
			{	
				duration: 1000, 
				step: function( now, fx ){
					$('#wrap').css('left', now );
				}, 
				complete: function(){
					if(positionLeft == '0px'){
						$('#all_menu_wrap').hide();
						$('#btnAllMenuOpen').attr('title', '메뉴열기');
						$('#imgAllMenuOpen').attr('title', '메뉴열기');
						$('#btnAllMenuOpen').focus();
					}else{
						$('#btnAllMenuOpen').attr('title', '메뉴닫기');
						$('#imgAllMenuOpen').attr('title', '메뉴닫기');
					}
				}
			}
		);
	});
	
});


/** function *********************************************************/
function toggleDepth1MenuGroup(key){
	$('#gnb > ul > li > div').each(function(){
		if($(this).attr('id') == 'depth2MenuList_'+key){
			$(this).slideToggle();
		}else{
			$(this).slideUp();
		}
	});
}

function ctlMyMenuCheckBox(key){
	if($('#myMenu_' + key).is(":checked") == true){
		$('#myMenu_' + key).removeAttr("checked");
	}else{
		$('#myMenu_' + key).attr("checked",true);
	}
}













