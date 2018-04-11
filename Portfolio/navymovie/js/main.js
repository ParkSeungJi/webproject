/* JavaScript Document */

var slide = 0; // 슬라이드 이미지의
setInterval(function(){
    if(slide >= 2){
        slide = 0;
    $(".slider").animate({left:"0"});    
    }else{
        ++slide;
        $(".slider").animate({left:"-=940px"}); // 왼쪽으로 계속해서 950넓이만큼 이미지 이동
    }
},1500);