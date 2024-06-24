//★ sub2_2 연혁 js 영역 ★

$(document).ready(function () {
    $('.topMove').click(function(e){
       e.preventDefault();
       //상단으로 스르륵 이동합니다.
       $("html,body").stop().animate({"scrollTop":0},1000); //해당위치로 스크롤 탑값을 부드럽게 이동시키는 코드★★이줄외우기
    });

    //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
   $('.navBox a').click(function(e){
      e.preventDefault(); 
 
       var value=0; //이동할 스크롤의 거리

       if($(this).hasClass('btn1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
          value= $('.content_area .2011_now').offset().top;  // 해당 콘테츠의 상단의 거리~~
       }else if($(this).hasClass('btn2')){
          value= $('.content_area .2000_2010y').offset().top; 
       }else if($(this).hasClass('btn3')){
          value= $('.content_area .1990_1999y').offset().top; 
       }else if($(this).hasClass('btn4')){
          value= $('.content_area .1979_1989y').offset().top; 
       }

       value-=80; //백만큼 덜가기~
       
     $("html,body").stop().animate({"scrollTop":value},1000);
   });

        
   


   /*scroll event */
   
      $('.navBox li:eq(0)').find('a').addClass('spy');
      //첫번째 서브메뉴 활성화
      
      $('#content .year:eq(0)').addClass('boxMove1');
      //첫번째 본문 내용글 애니메이션 처리
      var smh= $('.history_list').height();  //메인 비주얼의 높이 ,스크롤이벤트 주려면 잡아야함
      var h1= $('#content .year:eq(1)').offset().top-600;
      var h2= $('#content .year:eq(2)').offset().top-600;
      var h3= $('#content .year:eq(3)').offset().top-600;
  
       //스크롤의 좌표가 변하면.. 스크롤 이벤트
         $(window).on('scroll',function(){
          var scroll = $(window).scrollTop();
          //스크롤top의 좌표를 담는다
         
          $('.text').text(Math.floor(scroll));
          //스크롤 좌표의 값을 찍는다. Math.floor(scroll) ->소수점버리고 정수만 나오게하는 함수 
          
          //sticky menu 처리
          if(scroll>smh){ 
              $('.navBox').addClass('navOn');
              $('header').hide();// 헤더를 없애고 서브메뉴고정
          }else{
              $('.navBox').removeClass('navOn');
              
              $('header').show();
          }
  
          $('.navBox li').find('a').removeClass('spy');
          //모든 서브메뉴 비활성화~ 불꺼!!!
          
          
           //스크롤의 거리의 범위를 처리
          if(scroll>=0 && scroll<h1){//제일 탑에있을때 + h1(본문)나오기전까지일때
              $('.navBox li:eq(0)').find('a').addClass('spy');
              //첫번째 서브메뉴 활성화
              
              $('#content .year:eq(0)').addClass('boxMove');
              //첫번째 내용 콘텐츠 애니메이
          }else if(scroll>=h1 && scroll<h2){
              $('.navBox li:eq(1)').find('a').addClass('spy');
              //두번째 서브메뉴 활성화
              
               $('#content .year:eq(1)').addClass('boxMove');
          }else if(scroll>=h2 && scroll<h3){
              $('.navBox li:eq(2)').find('a').addClass('spy');
              //세번째 서브메뉴 활성화
              
               $('#content .year:eq(2)').addClass('boxMove');
          }else if(scroll>=h3){
              $('.navBox li:eq(3)').find('a').addClass('spy');
              //네번째 서브메뉴 활성화
               $('#content .year:eq(3)').addClass('boxMove');
          }
          

         });


   });