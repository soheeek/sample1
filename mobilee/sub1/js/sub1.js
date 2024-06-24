/*sub2-1 리조트js */

var memo = [
   {title:'거제벌베디어',
    sub:'유니크한 공간 및 프라이빗서비스를 갖춘 프리미엄 리조트입니다바다가 한눈에 보여시원하고 상쾌한 느낌을 주는 객실 인테리어와차분한 분위기의 침실을 갖추어 편안하고 여유로운 시간을 보내실 수 있습니다.',
    imgsrc:'img1.jpg'},
    {title:'설악 쏘라노',
    sub:'동해와 설악이 맞닿은 자연의 아름다운 풍경이 있는 한화리조트/설악 쏘라노입니다.시간과 공간을 초월하는 유럽의 절대적 미(BEAUTY, 美) 유럽에 대한 향수와 생명력 넘치는 자연을 모티브로 만들어내는 꿈의 신세계!',
    imgsrc:'img2.jpg'},
    {title:'한화리조트 평창',
    sub:'2018 동계올림픽 개최지에서 즐기는 레저, 휴양 그리고 최상의 컨벤션 시설! 고급스럽고 아늑한 휴식의 공간, 한화리조트/평창으로 초대합니다.',
    imgsrc:'img3.jpg'},
    {title:'한화리조트 제주',
    sub:'한라산의 수려한 자연경관을 품은 상쾌한 힐링리조트 , 제주의 낭만과 여유로움이 머무는 한화리조트 제주로 여러분들을 초대합니다.',
    imgsrc:'img4.jpg'},
    {title:'설악 해운대',
    sub:'해운대의 아름다운 야경이 눈앞에 펼쳐지는 곳, 해운대와 오륙도, 광안대교가 함께 어우르는 대한민국 새로운 레져문화의 중심지, 한화리조트/해운대입니다.',
    imgsrc:'img5.jpg'}
];

var ind = 0 ;
var total = memo.length;
 
  function conchange(){
      $('.container .img_box img').attr('src','./images/'+memo[ind].imgsrc).hide().fadeIn('fast');
      $('.container dt').text(memo[ind].title);
      $('.container dd').text(memo[ind].sub);
      $('.container .text').text((ind+1)+'/'+total);
  
    }

    $('.container .left').click(function(e){
        e.preventDefault();
       ind--;
       if(ind==-1)ind=4;0
       conchange();
    })

    $('.container .right').click(function(e){
        e.preventDefault();

        ind++;
        if(ind==5)ind=0;
        conchange();

    });


/*sub 1_3 사업영역 */



//tab
$(document).ready(function(){
  var tabnum=1;
  $('.content_area .container_box:eq(0)').show(); // 첫번째 탭 내용만 열어라 or fadeIn('slow')도 해봐도됨

  $('.content_area .tab').each(function (index) {  // index=0 1
    $(this).click(function(e){
        e.preventDefault();  

        $(".content_area .container_box").hide(); //모든 탭내용을 안보이게...
        $(".content_area .container_box:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
        
        $('#content .tabs ul li a').removeClass('current');
        $(this).addClass('current');
        tabnum = index+1
    });
  });



//사진 변경 
 
  $('.big1').css('background','url(./images/img1.jpg)'); //파일경로는 html이 기준 
  $('.big2').css('background','url(./images/img5.jpg)'); 
  $('.big1, .big2').css('background-size','300px 200px');
  $('.big1').hide().fadeIn('fast'); //맨처음 이미지 나타날때 효과 
  $('.gallery li:eq(0) a').children().css('filter','grayscale(100%)');

  $('.gallery li a').click(function(e){
      e.preventDefault();
      var ind = $(this).index('.gallery li a');  
      console.log(ind);// 0 1 2 3 4 5 6 7

      $('.big'+tabnum).css('background','url(./images/img'+(ind+1)+'.jpg)'); //클릭한 버튼에 해당index번호에 맞는 배경이미지를 가져와라
      $('.big'+tabnum).hide().fadeIn('fast');//fade효과


      
      $('.gallery li a').children().css('filter','grayscale(0)');//모든버튼을 원래상태로 
      $(this).children().css('filter','grayscale(100%)');//클릭한 해당버튼(자신this)만 활성화
      
  });


});

/*골프영역*/
$(document).ready(function() {
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)

  $(".close_btn,.pop_menu li").click(function(e) { //메뉴버튼 클릭시
     e.preventDefault();

      var ind = $(this).index('.pop_menu li');
      //console.log(ind);

      var documentHeight =  $(document).height(); //전체 페이지의 높이
      $(".popup li").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일

     if(op==false){
       $(".popup li:eq("+ind+")").animate({left:0,opacity:1}, 'fast');
       op=true;
     }else{
       $(".popup li").animate({left:'-100%',opacity:0}, 'fast');
       op=false;
     }

  });
});


// fb 호출코드
 var swiper = new Swiper('.swiper-container1', {
  //autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 2,  //단수
  spaceBetween:10,  //단사이 여백 (단위값:px) 
  loop: true,  //무한 loop , 롤링안됨
  //initialSlide:0, //초기 슬라이드 번호(0부터 시작 ~)
  //freeMode: true,  //터치 만큼 자유롭게 이동
  centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드효과(단수가 1단이 된다)
  //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
  navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      //dynamicBullets: true,
      clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
  // // autoplay: {  //자동으로 돌아가는것
  // //     delay: 3000, //3초
  // //     disableOnInteraction: false
  // // },
  // scrollbar: {  //하단 스크롤바
  //     el: '.swiper-scrollbar',
  //     hide: true //true=>터치되는 순간에만 보이다 사라짐 
  // }
  });
 