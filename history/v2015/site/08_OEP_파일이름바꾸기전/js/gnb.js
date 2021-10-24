$(document).ready(function(){ //DOM이 준비되고
    $(".gnb").hide();
    $('#btngnb').click(function(){ // ID가 btngnb인 요소를 클릭하면
        var state = $('.gnb').css('display'); // state 변수에 ID가 gnb인 요소의 display의 속성을 '대입'
        if(state == 'none'){ // state가 none 상태일경우 
            $('.gnb').slideDown(); // ID가 gnb인 요소를 show();
            $('.btn_gnb_off').attr('class','btn_gnb_on'); // btn_gnb_off를 btn_gnb_on로 교체
        }else{ // 그 외에는
            $('.gnb').slideUp(); // ID가 gnb인 요소를 hide();     
            $('.btn_gnb_on').attr('class','btn_gnb_off'); // btn_gnb_on를 btn_gnb_off로 교체
        }
    });
});

$(document).ready(function(){ //DOM이 준비되고
    $(".userinfo").hide();
    $('.username').click(function(){ // CLASS가 username인 요소를 클릭하면
        var state = $('.userinfo').css('display'); // state 변수에 ID가 userinfo인 요소의 display의 속성을 '대입'
        if(state == 'none'){ // state가 none 상태일경우 
            $('.userinfo').show(); // ID가 userinfo인 요소를 show();
        }else{ // 그 외에는
            $('.userinfo').hide(); // ID가 userinfo인 요소를 hide();     
        }
    });
});