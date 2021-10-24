var $num = 0;
var $colWidth = 745;
var $frameNum = 1;
var $rolling = true;
var $bannerAuto;
var $posX;
var $banner;
var $objLength;
var $objMax;
var $conBt;
var $conImg;
$(document).ready(function(){
$banner = $(".box04_banner");
$objLength = $banner.children().length;
$objMax = $objLength-$frameNum;

$conBt = $(".box04_btn > li > a > img");
});
$bannerAuto = setInterval(function(){
	$num--;	
	if($num<-$objMax){
	$num=0;
	$banner.animate({left:0},50);
	}						
	$posX = $num*$colWidth;		
	$banner.animate({left:$posX},400);	
	loctionBt($num);
	},1500);

function left(){
	$num++;
	if($num>0){
	$num=-$objMax;
	$banner.animate({left:$objMax*-$colWidth},50);	
	}								
	$posX = $num*$colWidth;		
	$banner.animate({left:$posX},400);
	loctionBt($num);
	}

function stop(){
	if($rolling){
	$rolling = false;
	clearInterval($bannerAuto);
	}
}
function loctionBt($btNum){
	$num = $btNum;
	$($conBt).each(function(){
		$(this).attr("src",$(this).attr("src").replace("_on.png",".png"))
	});
	$($conBt[Math.abs($btNum)]).attr("src",$($conBt[Math.abs($btNum)]).attr("src").replace(".png","_on.png"));
	$posX = $btNum*$colWidth;		
	$banner.animate({left:$posX},400);		
}


