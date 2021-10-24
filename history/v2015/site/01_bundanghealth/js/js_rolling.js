/*========================================
js_rolling.js

#간단설명
<div><img /><img /></div>
라고 했을 경우 div안의 img를 위,오른쪽,아래,왼쪽으로 롤링 시킨다.




# 사용법
<script type="text/javascript" charset='utf-8' src="js_rolling.js"></script> 
//JS스크립트 로드

<div id='div1'><img /><img /><img /><img /><img /></div>
//처럼 구성후 div의 너비와 높이는 꼭 정해주기 바랍니다.
<div>
	<div>1<img />etc</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>

</div>
이렇게 구성할 경우 방향은 위,아래로만 가능합니다


var roll = new js_rolling('rolling');
or
var roll = new js_rolling(document.getElementById('rolling'));
// id이름을 적던지, 직접 대상을 지목해서 롤링 클래스로 객체를 만듬

roll.set_direction(4); // 방향을 바꿈. 1: top, 2:right, 3:bottom 4:left 그외의 경우 동작안함
roll.move_gap = 1;	//움직이는 픽셀단위
roll.time_dealy = 10; //움직이는 타임딜레이
roll.time_dealy_pause = 5000;//하나의 대상이 새로 시작할 때 멈추는 시간, 0 이면 적용 안함
roll.start(); //롤링 동작

roll.move_up(); //위로 한번 롤링 (방향이 top,botton일때만 동작)
roll.move_right(); //오른쪽으로 한번 롤링(방향이 right,left일때만 동작)
roll.move_down(); //아래로 한번 롤링(방향이 top,botton일때만 동작)
roll.move_left(); //왼쪽으로 한번 롤링(방향이 right,left일때만 동작)

roll.direction = {방향숫자} //사용시 주의 : 초기화를 시키지 않고 방향만 바꾸는 것으로 left:right , top:bottom 으로만 짝을 이뤄 써야한다
roll.mouseover_pause = true , false //true면 마우스오버 시 멈춤(기본값), false 면 마우스오버에서도 계속 롤링함

#주의
방향이 top,bottom일 경우 내부 태그는 block요소(div)로
방향이 left,right일 경우 내부태그는 inline요소(a,span)으로 해주세요.
FF에서 top,bottom의 경우 inline요소일 경우 offsetHeight를 잘못알아옵니다.
이미지가 끝 부분에서 갑자기 나타나는 현상이 있을 경우 내부 이미지들의 수를 2배로 늘려주세요.(1,2,3 이면 1,2,3,1,2,3 처럼 보이도록)


#사용제약
사용시 "공대여자는 예쁘다"를 나타내셔야합니다.

만든날 : 2007-06-07
수정일 : 2007-08-11
수정일 : 2008-08-08
만든이 : mins01,mins,공대여자
홈페이지 : http://www.mins01.com 
NateOn&MSN : mins01(at)lycos.co.kr
========================================*/
var js_rolling = function(box){
	// 시간단위는 ms로 1000이 1초
	if(box.nodeType==1){
		this.box = box;
	}else{
		this.box = document.getElementById(box);
	}
	this.is_rolling = false;
	this.mouseover_pause = true;
	this.direction = 1; //1:top, 2:right, 3:bottom, 4:left (시계방향) // 1번과 4번만 됨
	this.children =	null;
	this.move_gap = 1;	//움직이는 픽셀단위
	this.time_dealy = 40; //10; //움직이는 타임딜레이
	this.time_dealy_pause = 3000; //2000;//하나의 대상이 새로 시작할 때 멈추는 시간, 0 이면 적용 안함
	this.time_timer=null;
	this.time_timer_pause=null;
	this.mouseover=false;
	this.init();
	this.set_direction(this.direction);
	this.start();
}
js_rolling.prototype.init = function(){
	this.box.style.position='relative';
	this.box.style.overflow='hidden';
	var children = this.box.childNodes;
	for(var i=(children.length-1);0<=i;i--){
		if(children[i].nodeType==1){
			children[i].style.position='relative';
		}else{
			this.box.removeChild(children[i]);
		}
	}
	var thisC=this;

	this.box.onmouseover=function(){
		if(!thisC.mouseover_pause){	return;	}
		thisC.mouseover=true;
		if(!thisC.time_timer_pause){
			thisC.pause();
		}
	}
	this.box.onmouseout=function(){
		if(!thisC.mouseover_pause){return;}
		thisC.mouseover=false;
		if(!thisC.time_timer_pause){
			thisC.resume();
		}
	}	
}
js_rolling.prototype.set_direction = function(direction){
	this.direction=direction;
	if(this.direction==2 ||this.direction==4){
		this.box.style.whiteSpace='nowrap';
	}else{
		this.box.style.whiteSpace='normal';
	}
	var children = this.box.childNodes;
	for(var i=(children.length-1);0<=i;i--){
			if(this.direction==1){
				children[i].style.display='block';
			}else if(this.direction==2){
				children[i].style.textlign='right';
				children[i].style.display='inline';
			}else if(this.direction==3){
				children[i].style.display='block';
			}else if(this.direction==4){
				children[i].style.display='inline';
			}
	}
	this.init_element_children();	
}
js_rolling.prototype.init_element_children = function(){
	var children = this.box.childNodes;
	this.children = children;
	for(var i=(children.length-1);0<=i;i--){
			if(this.direction==1){
				children[i].style.top='0px';
			}else if(this.direction==2){
				children[i].style.left='-'+this.box.firstChild.offsetWidth+'px';
			}else if(this.direction==3){
				children[i].style.top='-'+this.box.firstChild.offsetHeight+'px';
			}else if(this.direction==4){
				children[i].style.left='0px';
			}
	}
}
js_rolling.prototype.act_move_up = function(){
	for(var i = 0,m=this.children.length;i<m;i++){
		var child = this.children[i];
		child.style.top=(parseInt(child.style.top)-this.move_gap)+'px';
	}
	if((this.children[0].offsetHeight+parseInt(this.children[0].style.top))<=0){
		this.box.appendChild(this.children[0]);
		this.init_element_children();
		this.pause_act();		
	}
}
js_rolling.prototype.move_up = function(){
	if(this.direction!=1&&this.direction!=3){return false;}
	this.box.appendChild(this.children[0]);
	this.init_element_children();
	this.pause_act();	
}
js_rolling.prototype.act_move_down = function(){
	for(var i = 0,m=this.children.length;i<m;i++){
		var child = this.children[i];
		child.style.top=(parseInt(child.style.top)+this.move_gap)+'px';
	}
	if(parseInt(this.children[0].style.top)>=0){
		this.box.insertBefore(this.box.lastChild,this.box.firstChild);
		this.init_element_children();
		this.pause_act();	
	}
}
js_rolling.prototype.move_down = function(){
	if(this.direction!=1&&this.direction!=3){return false;}	
	this.box.insertBefore(this.box.lastChild,this.box.firstChild);
	this.init_element_children();
	this.pause_act();
}
js_rolling.prototype.act_move_left = function(){
	for(var i = 0,m=this.children.length;i<m;i++){
		var child = this.children[i];
		child.style.left=(parseInt(child.style.left)-this.move_gap)+'px';
	}
	if((this.children[0].offsetWidth+parseInt(this.children[0].style.left))<=0){
		this.box.appendChild(this.box.firstChild);
		this.init_element_children();
		this.pause_act();		
	}
}
js_rolling.prototype.move_left = function(){
	if(this.direction!=2&&this.direction!=4){return false;}		
	this.box.appendChild(this.box.firstChild);
	this.init_element_children();
	this.pause_act();		
}
js_rolling.prototype.act_move_right = function(){
	for(var i = 0,m=this.children.length;i<m;i++){
		var child = this.children[i];
		child.style.left=(parseInt(child.style.left)+this.move_gap)+'px';
	}
	
	if(parseInt(this.box.lastChild.style.left)>=0){
		this.box.insertBefore(this.box.lastChild,this.box.firstChild);
		this.init_element_children();
		this.pause_act();		
	}
}
js_rolling.prototype.move_right = function(){
	if(this.direction!=2&&this.direction!=4){return false;}			
	this.box.insertBefore(this.box.lastChild,this.box.firstChild);
	this.init_element_children();
	this.pause_act();
}
js_rolling.prototype.start = function(){ //롤링 시작
	var thisC = this;
	this.stop();
	this.is_rolling = true;
	var act = function(){
		if(thisC.is_rolling){
			if(thisC.direction==1){thisC.act_move_up();}
			else if(thisC.direction==2){thisC.act_move_right();}
			else if(thisC.direction==3){thisC.act_move_down();}
			else if(thisC.direction==4){thisC.act_move_left();}
		}
	}
	this.time_timer = setInterval(act,this.time_dealy);
}
js_rolling.prototype.pause_act = function(){ //일시 동작
	if(this.time_dealy_pause){
		var thisC = this;
		var act = function(){thisC.resume();thisC.time_timer_pause=null;}
		if(this.time_timer_pause){clearTimeout(this.time_timer_pause);}
		this.time_timer_pause = setTimeout(act,this.time_dealy_pause);
		this.pause();
	}
}
js_rolling.prototype.pause = function(){ //일시 멈춤
	this.is_rolling = false;
}
js_rolling.prototype.resume = function(){ //일시 멈춤 해제
	if(!this.mouseover){
		this.is_rolling = true;
	}
}
js_rolling.prototype.stop = function(){ //롤링을 끝냄
	this.is_rolling = false;
	if(!this.time_timer){
		clearInterval(this.time_timer);
	}
	this.time_timer = null
}