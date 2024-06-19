//헤더 스크롤 처리
var screenHeight =$(window).height();

$(window).on('scroll',function(){//스크롤의 거리가 발생하면

  var scroll = $(window).scrollTop();  

  //스크롤의 거리를 리턴하는 함수

  //console.log(scroll);


  if(scroll>screenHeight-80){  //스크롤이 비주얼의 높이-header높이 까지 내리면

      $('#headerArea').css('background','rgba(0,0,0,.6)').css('backdrop-filter', 'blur(10px)');

  }else{//스크롤 내리기 전 디폴트(마우스올리지않음)

      $('#headerArea').css('background','none').css('backdrop-filter', 'blur(0)');  

  }; 
});

  /***move_top상단이동 */
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면 (window=scroll함께 외워)
	var scroll = $(window).scrollTop(); //스크롤의 거리(좌표)
   
	//$('.text').text(scroll);

	if(scroll>1000){ //300이상의 거리가 발생되면
		$('.move_top').fadeIn('fast');  //top보여라~~~~
	}else{
		$('.move_top').fadeOut('fast');//top안보여라~~~~
	}
});

$('.move_top').click(function(e){
	e.preventDefault();
	 //상단으로 스르륵 이동합니다.
	$("html,body").stop().animate({"scrollTop":0},1000);//해당위치로 스크롤 탑값을 부드럽게 이동시키는 코드★★이줄외우기
 });





//  gnb영역

var onoff = false; //false(메뉴열림) true(메뉴닫힘)
$(".menuOpen").click(function(e){
   e.preventDefault();
   if(onoff == false){
     $("#gnb").slideDown('slow');
     $('#headerArea').addClass('mn_open');//메뉴모양변경
     onoff = true;
   }else{
     $("#gnb").slideUp('fast');
     $('#headerArea').removeClass('mn_open');
     onoff = false;
   }
});

//  네비높이 맞추기(페이지 로딩시 1회)
var screenSize = $(window).width();
var winh =  $(document).height();

if( screenSize > 1024){
 $("#gnb").height('auto');
}else{                 
 $("#gnb").height(winh);
}

var current=0; // 0(해상도가 모바일), 1(소형테블릿이상)

$(window).resize(function(){ 
   var screenSize = $(window).width();  //가로 해상도
   if( screenSize > 1024){  //소형테블릿 이상이면
     $("#gnb").show();
     $("#gnb").height('auto');
     current=1; //소형테블릿이상
   }
   if(current==1 && screenSize <= 1024){
     $("#gnb").hide();
     $("#gnb").height(winh);
      current=0; //모바일
      onoff = false;
   }
 }); 

//  FOOTER 별
  var stars=900;
  var $stars=$(".stars");
  var r=900;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*600);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
       
    })
  })

