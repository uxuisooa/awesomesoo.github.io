/*	글자 확대 축소 */
var chFont = new Array('1em','1.2em');
var dfFont = 1;

function changeFsize(fs) {
	var obj = document.getElementById('content');
	var fsize = dfFont;

	if(fs == 'flarge')
		fsize = 1;
	else
		fsize = 0;

	if(fsize == 0) {
		fsize = 0;
		document.getElementById('cvsmall').style.display='block';
		document.getElementById('cvbig').style.display="none";
	}
	if(fsize == 1) {
		fsize = 1;
		document.getElementById('cvsmall').style.display='none';
		document.getElementById('cvbig').style.display="block";
	}

	dfFont = fsize;
	obj.style.fontSize = chFont[fsize];
}

mechk=0;
function allmW(chk){
	/*if(chk == 'on'){
		if(mechk == 0){
			document.getElementById('allmenuH').style.display='block';
			mechk=1;
		}else{
			document.getElementById('allmenuH').style.display='none';
			mechk=0;
		}

	}else if(chk == 'off'){
		document.getElementById('allmenuH').style.display='none';
	}*/
}


/* 12.03 kogas mobile zt*/
$(document).ready(function() {
	var docSizeH, isMenuOpen = false, menuHeight = 100;
	var isIOS = navigator.userAgent.match(/(iPhone|iPod|iPad)/);
	resizeFnc();
	scrollFnc();
	initMenu();
	initMain();
	$(window).resize(resizeFnc);
	$(window).scroll(scrollFnc);

	$(window).load(function(){  
		if(isIOS){
			menuHeight +=200; 
		}
		docSizeH = $(document).height(); 
		resizeFnc();
	});

	function resizeFnc(){
		docSizeH = $(document).height();
		if(docSizeH > menuHeight){
			$("#allmenuH").height(docSizeH);
			$(".allmenuIn").height(docSizeH);
		}else{
			$("#allmenuH").height(menuHeight);
			$(".allmenuIn").height(menuHeight);
		}
	}

	/* 스크롤시 top버튼 숨기기 */
	function scrollFnc(){
		if(isMenuOpen){
			return;
		}else{
			if(isIOS){
				$(document).bind('touchstart', function(e){$(".topbtn").hide(); });
				$(document).bind('touchmove', function(e){$(".topbtn").hide();});
				$(document).bind('touchend', function(e){$(".topbtn").show(); });
			}else{
				$(".topbtn").hide();
				clearTimeout($.data(this, 'scrollTimer'));
				$.data(this, 'scrollTimer', setTimeout(function() {
					$(".topbtn").show();
				}, 250));
			}
		}
	}

	/* GNB메뉴 */
	function initMenu(){
		firstMenuHide();
		$(".menu").bind("click",function(e){
			e.stopPropagation();
			e.preventDefault();
			showMenu();
		});

		$(".dim").bind("click",function(e){
			e.stopPropagation();
			e.preventDefault();
			hideMenu();
		});

		$(".allmenuIn strong a").bind("click",function(e){
			e.stopPropagation();
			e.preventDefault();
			hideMenu();
		});
		
		$(".topbtn").bind("click",function(e){
			e.stopPropagation();
			e.preventDefault();
			window.scrollTo(0,0);
		});
	}
	
	function firstMenuHide(){
		isMenuOpen = false;
		$("#allmenuH").css({"width":"0"});
		$(".allmenuIn").css({'transition' : 'all 0s ease-in-out','transform' : 'translateX(-260px)'});
		$('.dim').css("display","none");
	}

	function showMenu(){
		isMenuOpen = true;
		$("#allmenuH").css({"width":"100%"});	
		$('.dim').css("display","block");
		$('.allmenuIn').css({'transition' : 'all 0.2s ease-in-out','transform' : 'translateX(0px)'});
		$(".allmenuIn").unbind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend");
		if(isIOS){
			$(document).unbind('touchstart');
			$(document).unbind('touchmove');
			$(document).unbind('touchend');
		}
	}

	function hideMenu(){
		isMenuOpen = false;
		$('.dim').css("display","none");
		$(".allmenuIn").css({'transition' : 'all 0.2s ease-in-out','transform' : 'translateX(-260px)'});
		$(".allmenuIn").bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {$("#allmenuH").css({"width":"0"});	});
	}
	
	/* 메인 롤링 배너 */
	function initMain(){
		if($(".visualSect").length < 1){ return;}
		$('.visualSect .visualWrap').wrap('<div id="slider" class="swipe">');
		$(".visualWrap").addClass("swipe-wrap");
	    
	    $('.swipe').css({
	        'overflow': 'hidden',
			'visibility': 'hidden',
			'position': 'relative'
		});

	    $('.swipe-wrap').css({
	        'overflow': 'hidden',
			'position': 'relative'
		});

	    $('.swipe-wrap > div').css({
	        'float': 'left',
			'width': '100%',
			'position': 'relative'
		});

	    var swipe = new Swipe(document.getElementById('slider'), {
	      startSlide: 0,
	      speed: 500,
		  continuous: true,
		  //auto: 500,
	      callback: function(index, elem) {
			$(".visualBtn a").removeClass("on");
			$(".visualBtn a:eq("+index+")").addClass("on");
		  },
	      transitionEnd: function(index, elem) {
  			$(".visualBtn a").removeClass("on");
			$(".visualBtn a:eq("+index+")").addClass("on");
		  }
	    });

		$('.visualBtn a').bind("click",function(e){
			e.stopPropagation();
			e.preventDefault();
			var idx = $(this).index();
			$(".visualBtn a").removeClass("on");
			$(".visualBtn a:eq("+idx+")").addClass("on");
			swipe.slide(idx, 500);
		});

	}
});
