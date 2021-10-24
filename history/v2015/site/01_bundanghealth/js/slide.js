$(document).ready(function(){
		$bcurrent=0
		$blength=$(".bannerzone>li").length
		$loop=true

		bannerShow=function($bcurrent){
		$(".bannerzone>li:visible").hide()
		$(".bannerzone>li").eq($bcurrent).show()
		$(".bannerzone>li").eq($bcurrent+1).show()
		$(".bannerzone>li").eq($bcurrent+2).show()
		$(".bannerzone>li").eq($bcurrent+3).show()
		$(".bannerzone>li").eq($bcurrent+4).show()
		$(".bannerzone>li").eq($bcurrent+5).show()
		$(".bannerzone>li").eq($bcurrent+6).show()
		$(".bannerzone>li").eq($bcurrent+7).show()
		$(".bannerzone>li").eq($bcurrent+8).show()
		}

		nextBanner=function(){
			if($bcurrent==($blength-7)){ //blength-5는 11 마지막 순환되는 값과 같아지면 0으로 초기화 해줘서 반복할 수 있게해준다
			$bcurrent=0
			}else{
				$bcurrent+=1
				}
				bannerShow($bcurrent)
			}//end function

		prevBanner=function(){
			if($bcurrent==0){//0과 같으면 처음배너로 왔다는 의미 끝부터 다시 순환되기위해 blength-5 11부터 보여지게함
			$bcurrent=($blength-7)
			}else{
				$bcurrent-=1
				}
				bannerShow($bcurrent)
			}//end function

		$(".banner>a").eq(0).click(function(){
			prevBanner()
			clearTimeout(autoSlide)
			$loop=false
		})//prev버튼

		$(".banner>a").eq(1).click(function(){
			nextBanner()
			clearTimeout(autoSlide)
			$loop=false
		})//next버튼

		bannerSlide=function(){
			if($bcurrent==($blength-7)){
				$bcurrent=0
				}else{
					$bcurrent+=1
				}
				bannerShow($bcurrent)
				autoSlide=setTimeout("box06()",2000)
				}//end function
		
		bannerSlide()
	
})//end ready