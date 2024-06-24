// visual영역 JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리    홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#fff'); //첫번째 불켜
    $('.btn1').css('width','70px'); // 버튼의 너비 증가
    
    $('.gallery .link1').fadeIn('fast'); //첫번째 이미지 보인다..
    $('.gallery .link1 span').delay(1500).animate({top:500, opacity:1},'slow');//이미지 바뀌고 1.5초 뒤에 글자보이게! ,css에서 top값은 210줬음 
    

    /*자동기능 */
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  
    $('.gallery li').hide(); //모든 이미지 안보인다.
    $('.gallery .link'+cnt).fadeIn('fast'); //자신만 이미지가 보인다..
	 		                      


      
      $('.mbutton').css('background','rgba(255,255,255,.3)'); //버튼불다꺼!!
      $('.mbutton').css('width','20px'); // 버튼 원래의 너비
      $('.btn'+cnt).css('background','#fff');//자신만 불켜
      $('.btn'+cnt).css('width','70px');    

      $('.gallery li span').css('top',500).css('opacity',0);//이미지 텍스트 초기화 
      $('.gallery .link'+cnt).find('span').delay(1000).animate({top:500, opacity:1},'slow');

       if(cnt==imageCount)cnt=0;  //6이 안되게 카운트의 초기화 0,만약 cnt 가 imageCount 까지 가면 0으로!
     }
     
    timeonoff= setInterval( moveg , 4000);
    

  /*버튼클릭시 변하는거!!*/ 
   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //this를 event.target로
       //클릭한 버튼 $target == $(this), jquery 는 변수앞에 $붙일수있음 (안써도 상관없지만,원래있던 메소드나 함수와 겹쳐도 문제생기지않게 구분해줌 )
       clearInterval(timeonoff); //타이머 중지,버튼 클릭할때 자동타이머 겹치지 않게,     
	 
	
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ //세번째 버튼 클릭했어?
				 cnt=3; 
		  } //마지막else는 생략가능 (짜투리값 처리할때 쓰는것,여기선 cnt 값만 빼면되니까 생략해도됨  )

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      $('.mbutton').css('background','rgba(255,255,255,.3)'); //버튼 모두불꺼
      $('.mbutton').css('width','20px');
      $('.btn'+cnt).css('background','#fff');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','70px');
      
      $('.gallery li span').css('top',500).css('opacity',0);//해당되는 span에만 애니메이션주기
      $('.gallery .link'+cnt).find('span').delay(1000).animate({top:500, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화해야 6까지 안가고 다시1로 가서 부활할수있음 
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!살인마
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });

	 //stop & play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시 태그를 바꿔치기함 
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //타이머 축여,살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; 
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   
          if(cnt==0)cnt=imageCount; 
          cnt--; 
      }

    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','rgba(255,255,255,.3)'); //버튼 모두불꺼
    $('.mbutton').css('width','20');
    $('.btn'+cnt).css('background',' #fff');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','70px');

    $('.gallery li span').css('top',500).css('opacity',0);
    $('.gallery .link'+cnt).find('span').delay(1000).animate({top:500, opacity:1},'slow');


    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){//정지되어있는데 부활시키니까 다시 play상태로 바꾸기(icon은 stop으로)
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });


});




/*사업영역 */
 









/*사회공헌 left-right slide*/
$(document).ready(function() {
  var position=0;  //최초위치
  //var movesize=150; //이미지 하나의 너비
  var movesize=$('.slide_gallery ul li').width();
  //console.log(movesize);
  var timeonoff;
  var cnt=2;
  //$('.slide_gallery ul').after($('.slide_gallery ul').clone());

  function moveG() {
      cnt++;
       $('.slide_gallery ul li').removeClass();
       $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');

      position-=movesize;  // 150씩 감소
      $('.slide_gallery').animate({left:position}, 'fast',
          function(){							
          if(position<=-750){
              $('.slide_gallery').css('left',0);
              position=0;
              cnt=2;
              $('.slide_gallery ul li').removeClass();
              $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
          }
      }).clearQueue();
  }

 timeonoff= setInterval(moveG, 3000);

  
      //슬라이드 겔러리를 한번 복제

$('.button').click(function(e){
   e.preventDefault();

  clearInterval(timeonoff);
   
   if($(this).is('.m1')){  //이전버튼 클릭
      
       cnt++;
       $('.slide_gallery ul li').removeClass();
       $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');

        position-=movesize;  // 150씩 감소
       $('.slide_gallery').animate({left:position}, 'fast',function(){
          if(position<=-750){
              position=0;
              $('.slide_gallery').css('left',0);
              cnt=2;
              $('.slide_gallery ul li').removeClass();
              $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
           }
       }).clearQueue();  
      

   }else if($(this).is('.m2')){  //다음버튼 클릭
         if(position>=0){
              $('.slide_gallery').css('left',-750);
              position=-750;
              cnt=7;
              $('.slide_gallery ul li').removeClass();
              $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
          }

          cnt--;
         $('.slide_gallery ul li').removeClass();
         $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');

          position+=movesize; // 150씩 증가
          $('.slide_gallery').animate({left:position}, 'fast',
              function(){							
                  if(position>=0){
                      $('.slide_gallery').css('left',-750);
                      position=-750;

                      cnt=7;
                      $('.slide_gallery ul li').removeClass();
                      $('.slide_gallery ul li:eq('+ cnt +')').addClass('big');
                  }
              }).clearQueue();

    }
 });
});




/*지속가능경영 */

var origin=600; //원래너비  (처음보여지는너비)
var min_width=400; //줄어들었을때 너비  
var max_width=550; //호버되었을때 커지는 너비

$('.sustainability li').hover(function(){//mouseenter
    $('.sustainability li').animate({width:min_width},550).clearQueue();
    $(this).animate({width:max_width}, 550).clearQueue(); //마우스올라간 this만 max  width
    $(this).find('dt').css({'margin-top':'350px','color':'#fff','font-size':'1.8em'});
    $(this).find('dd').css({'opacity':'1','transition':'all .3s','transition-delay':'.3s'}); 
                    //'transition':'all .3s','transition-delay':'.3s' 같이 쓴이유는 좀더 자연스러운 연결을 위해 시간차공격! 
    $(this).find('dl').css('background','rgba(0,0,0,.6)');
},
function(){   //mouseleave , 원래대로 만들기
    $('.sustainability li').animate({width:origin},550).clearQueue();
    $(this).find('dt').css({'margin-top':'250px','color':'#fff','font-size':'1.5em'});
    $(this).find('dd').css({'opacity':'0','transition':'none'});
    $(this).find('dl').css('background','none');
});



//사회공헌 스와이퍼
var swiper = new Swiper('.swiper-container', {//다 감싸주는 전체박스 
  //autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 5,  //단수
  spaceBetween: 50,  //단사이 여백
  //initalSlide:1, //처음 왼쪽 끝에 보여지는 초기슬라이드번호(0부터 시작함,2이면3번째부터 보여지면서 시작하라는 뜻)
  loop: true,  //무한 loop 안끊기고 계속돌아감
  //freeMode: true,  //터치 만큼 자유롭게 이동,한칸씩 이동하는게 아니라 swipe 한만큼 움직임
  centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드효과(change되는거기 때문에 단수가 1단이 된다)
  //effect: 'flip',  //3D 회전효과(change되는거기 때문에 단수가 1단이 된다)
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 50, //꺾이는 각도
  //   stretch:0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows : true, //센터 이외의 것들은 어둡게 들어가는효과
  // },
//   navigation: {    //이전/다음 버튼
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  // pagination: {   //페이지 네이션
  //   el: '.swiper-pagination',
    //dynamicBullets: true,
    //clickable: true,
    // type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  // },
  // autoplay: {  //자동기능
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  // scrollbar: {  //하단 스크롤바
  //   el: '.swiper-scrollbar',
  //   hide: true
  // }
});